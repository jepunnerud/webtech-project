'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import players from '@/../public/players.json'
import { Player } from '@/types'
import styles from './page.module.css'
import PlayerCard from '@/components/playerCard/PlayerCard'
import StandardButton from '@/components/StandardButton'

/* helpers */
const slug = (club: string) => club.toLowerCase().replace(/\s+/g, '')
const sortByDebut = (a: Player, b: Player) => a.debut_date.localeCompare(b.debut_date)
const sortByMain = (a: Player, b: Player) => {
  const best = (p: Player) => p.teams.reduce((x, y) => (x.appearances > y.appearances ? x : y))
  return best(b).appearances - best(a).appearances
}

export default function AllViewer() {
  const router = useRouter()
  const sp = useSearchParams()
  const narrative = sp.get('narrative') ?? 'default'
  const posFilter = sp.get('pos') ?? ''
  const teamFilter = sp.get('team') ?? ''

  /* option lists */
  const positions = useMemo(() => Array.from(new Set(players.map((p) => p.position))).sort(), [])
  const teams = useMemo(
    () => Array.from(new Set(players.flatMap((p) => p.teams.map((t) => t.club)))).sort(),
    []
  )

  /* filtered + sorted list */
  const shown = useMemo(() => {
    let list = [...players]
    list.sort(narrative === 'debut' ? sortByDebut : sortByMain)

    if (narrative === 'position' && posFilter) list = list.filter((p) => p.position === posFilter)
    if (narrative === 'team' && teamFilter)
      list = list.filter((p) => p.teams.some((t) => slug(t.club) === teamFilter))

    return list
  }, [narrative, posFilter, teamFilter])

  /* helper to push new query */
  const setQuery = (q: string) => router.push(`/museum/all?${q}`)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StandardButton label="&larr; Back to Museum" href="/museum"></StandardButton>
        <h1>All-Time Legends</h1>
      </div>

      {/* -------- controls -------- */}
      <div className={styles.controls}>
        {/* --- row 1: sort buttons --- */}
        <div className={styles.controlsRow}>
          <span className={styles.sortLabel}>Sort by:</span>
          <button
            onClick={() => setQuery('')}
            className={narrative === 'default' ? styles.active : ''}
          >
            Appearances
          </button>
          <button
            onClick={() => setQuery('narrative=debut')}
            className={narrative === 'debut' ? styles.active : ''}
          >
            Debut date
          </button>
        </div>

        {/* --- row 2: filters --- */}
        <div className={styles.controlsRow}>
          <span className={styles.sortLabel}>Filters:</span>
          <div className={styles.selectWrap}>
            <label>Position:</label>
            <select
              value={narrative === 'position' ? posFilter : ''}
              onChange={(e) =>
                setQuery(e.target.value ? `narrative=position&pos=${e.target.value}` : '')
              }
            >
              <option value="">—</option>
              {positions.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className={styles.selectWrap}>
            <label>Team:</label>
            <select
              value={narrative === 'team' ? teamFilter : ''}
              onChange={(e) =>
                setQuery(e.target.value ? `narrative=team&team=${e.target.value}` : '')
              }
            >
              <option value="">—</option>
              {teams.map((t) => (
                <option key={t} value={slug(t)}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* -------- grid -------- */}
      {shown.length === 0 ? (
        <p className={styles.empty}>No players match.</p>
      ) : (
        <div className={styles.playersGrid}>
          {shown.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              href={`/museum/all/${player.id}?${sp.toString()}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
