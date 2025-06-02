// app/museum/[team]/page.tsx
import styles from './page.module.css'
import playersData from '@/../public/players.json'
import Image from 'next/image'
import Link from 'next/link'
import { Player, TeamStats } from '@/types'
import { getTeamName } from '@/utils/teamUtils'
import PlayerCard from '@/components/playerCard/PlayerCard'
import StandardButton from '@/components/StandardButton'

function getTeamPlayers(
  teamSlug: string
): (Player & { mainTeam: TeamStats; currentTeamStats?: TeamStats })[] {
  const teamName = getTeamName(teamSlug)

  return playersData
    .map((player) => {
      const mainTeam = player.teams.reduce((prev, cur) =>
        prev.appearances > cur.appearances ? prev : cur
      )

      const currentTeamStats = player.teams.find(
        (t) => t.club.toLowerCase() === teamName.toLowerCase()
      )

      return { ...player, mainTeam, currentTeamStats }
    })
    .filter((p) => p.mainTeam.club.toLowerCase() === teamName.toLowerCase() && p.currentTeamStats)
}

export default async function TeamPage({ params }: { params: Promise<{ team: string }> }) {
  const { team } = await params

  const teamPlayers = getTeamPlayers(team)
  const teamName = getTeamName(team)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StandardButton label="&larr; Back to Museum" href="/museum"></StandardButton>
        <h1>{teamName} Legends</h1>
        <p>Players who made history for {teamName}</p>
      </div>

      {teamPlayers.length === 0 ? (
        <div className={styles.empty}>
          <p>No players found for this team.</p>
        </div>
      ) : (
        <div className={styles.playersGrid}>
          {teamPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} href={`/museum/${team}/${player.id}`} />
          ))}
        </div>
      )}
    </div>
  )
}
