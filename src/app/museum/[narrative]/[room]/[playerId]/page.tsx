'use client'

import { use, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import playersData from '@/../public/players.json'
import styles from './page.module.css'
import StandardButton from '@/components/StandardButton/StandardButton'
import { getTeamName } from '@/utils/teamUtils'

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '')
function computeMainTeam(teams: { club: string; appearances: number; goals: number }[]) {
  return teams.reduce((prev, cur) => (prev.appearances > cur.appearances ? prev : cur))
}
export default function PlayerPage({
  params,
  searchParams,
}: {
  params: Promise<{ narrative: string; room: string; playerId: string }>
  searchParams: Promise<{ roomNumber?: string }>
}) {
  const { narrative, room, playerId } = use(params)
  const { roomNumber } = use(searchParams)
  const idNum = Number(playerId)

  const player = playersData.find((p) => p.id === idNum)
  const [textLevel, setTextLevel] = useState<'easy' | 'medium' | 'advanced'>('medium')
  const [textLength, setTextLength] = useState<'short' | 'extended'>('short')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!player) {
    return <div className={styles.notFound}>Player not found</div>
  }

  let filtered = playersData.map((p) => {
    const mainTeam = computeMainTeam(p.teams)
    return { ...p, mainTeam }
  })

  if (narrative === 'teams') {
    filtered = filtered.filter((p) => slug(p.mainTeam.club) === room)
  } else if (narrative === 'position') {
    filtered = filtered.filter((p) => p.position.toLowerCase() === room.toLowerCase())
  } else if (narrative === 'debut') {
    const decadeNum = parseInt(room.replace(/[^0-9]/g, ''), 10)
    if (!isNaN(decadeNum)) {
      const start = decadeNum
      const end = decadeNum + 9
      filtered = filtered.filter((p) => {
        const year = new Date(p.debut_date).getFullYear()
        return year >= start && year <= end
      })
    }
  }

  if (filtered.length === 0 || !filtered.some((p) => p.id === idNum)) {
    filtered = [{ ...player, mainTeam: computeMainTeam(player.teams) }]
  }

  const idx = filtered.findIndex((p) => p.id === idNum)
  const length = filtered.length
  const prev = filtered[(idx - 1 + length) % length]
  const next = filtered[(idx + 1) % length]

  const getDescription = () => {
    const key = `${textLength}_${textLevel}_description` as const
    return player[key]
  }

  const backLabel =
    narrative === 'teams'
      ? `← Back to ${getTeamName(room)}`
      : narrative === 'position'
        ? `← Back to ${room.charAt(0).toUpperCase() + room.slice(1)}`
        : narrative === 'debut'
          ? `← Back to ${room}s`
          : `← Back to ${room}s`

  const backHref = `/museum/${narrative}/${room}?roomNumber=${roomNumber ?? ''}`

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <StandardButton label={backLabel} href={backHref} />
      </div>

      <div className={styles.playerHeader}>
        <div className={styles.playerImage}>
          <Image src={player.image_url} alt={player.name} width={300} height={300} priority />
        </div>
        <div className={styles.playerBasicInfo}>
          <h1>{player.name + (player.id === 19 || player.id === 1 ? '❤️' : '')}</h1>
          <div className={styles.infoRow}>
            <div className={styles.infoColumn}>
              <p className={styles.position}>{player.position}</p>
              <p className={styles.nation}>{player.nation}</p>
              <p className={styles.born}>Born: {new Date(player.born).toLocaleDateString()}</p>
              <p className={styles.debut}>
                Debut: {new Date(player.debut_date).toLocaleDateString()}
              </p>
            </div>
            {player.long_description_qr && (
              <div className={styles.qrColumn}>
                <Image src={player.long_description_qr} alt="QR Code" width={100} height={100} />
                <span className={styles.qrLabel}>Scan for more info</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.descriptionControls}>
        <div className={styles.buttonGroup}>
          <span>Text Complexity:</span>
          <button
            onClick={() => setTextLevel('easy')}
            className={textLevel === 'easy' ? styles.active : ''}
          >
            Easy
          </button>
          <button
            onClick={() => setTextLevel('medium')}
            className={textLevel === 'medium' ? styles.active : ''}
          >
            Medium
          </button>
          <button
            onClick={() => setTextLevel('advanced')}
            className={textLevel === 'advanced' ? styles.active : ''}
          >
            Advanced
          </button>
        </div>
        <div className={styles.buttonGroup}>
          <span>Text Length:</span>
          <button
            onClick={() => setTextLength('short')}
            className={textLength === 'short' ? styles.active : ''}
          >
            Short
          </button>
          <button
            onClick={() => setTextLength('extended')}
            className={textLength === 'extended' ? styles.active : ''}
          >
            Extended
          </button>
        </div>

        {/* Only show pager if there’s more than one player in `filtered` */}
        {filtered.length > 1 && (
          <div className={styles.pager}>
            <Link
              href={`/museum/${narrative}/${room}/${prev.id}?roomNumber=${roomNumber ?? ''}`}
              className={styles.prev}
            >
              ← {prev.name}
            </Link>
            <Link
              href={`/museum/${narrative}/${room}/${next.id}?roomNumber=${roomNumber ?? ''}`}
              className={styles.next}
            >
              {next.name} →
            </Link>
          </div>
        )}
      </div>

      <div className={styles.descriptionSection}>
        <p className={styles.descriptionText}>{getDescription()}</p>
      </div>

      <div className={styles.statsSection}>
        <h2>Career Statistics</h2>
        <table className={styles.statsTable}>
          <thead>
            <tr>
              <th>Club</th>
              <th>Appearances</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            {player.teams.map((team, index) => (
              <tr key={index}>
                <td>{team.club}</td>
                <td>{team.appearances}</td>
                <td>{team.goals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {player.long_description_wiki && (
        <div className={styles.externalLink}>
          <a href={player.long_description_wiki} target="_blank" rel="noopener noreferrer">
            Read more on Wikipedia →
          </a>
        </div>
      )}
    </div>
  )
}
