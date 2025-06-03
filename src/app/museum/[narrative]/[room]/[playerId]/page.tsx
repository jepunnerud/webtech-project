'use client'
import { use, useEffect } from 'react'
import { useState } from 'react'
import playersData from '@/../public/players.json'
import Image from 'next/image'
import styles from './page.module.css'
import StandardButton from '@/components/StandardButton'
import { getTeamName } from "@/utils/teamUtils";

/** The Page itself must be client-side because of useState */
export default function PlayerPage({
  params,
}: {
  params: Promise<{ narrative: string; room: string; playerId: string }>
}) {
  const { narrative, room, playerId } = use(params)

  const player = playersData.find((p) => p.id === Number(playerId))

  const [textLevel, setTextLevel] = useState<'easy' | 'medium' | 'advanced'>('medium')
  const [textLength, setTextLength] = useState<'short' | 'extended'>('short')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!player) {
    return <div className={styles.notFound}>Player not found</div>
  }

  const getDescription = () => {
    const key = `${textLength}_${textLevel}_description` as const
    return player[key]
  }

  const backLabel =
  narrative === "teams"
    ? `← Back to ${getTeamName(room)}`
    : narrative === "position"
    ? `← Back to ${room.charAt(0).toUpperCase() + room.slice(1)}`
    : `← Back to ${room}s`;

  const backHref = `/museum/${narrative}/${room}`;


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
          <h1>{player.name}</h1>
          <div className={styles.infoRow}>
            <div className={styles.infoColumn}>
              <p className={styles.position}>{player.position}</p>
              <p className={styles.nation}>{player.nation}</p>
              <p className={styles.born}>Born: {player.born}</p>
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
