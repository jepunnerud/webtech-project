import { notFound } from 'next/navigation'
import styles from './page.module.css'
import playersData from '@/../public/players.json'
import { Player, TeamStats } from '@/types'
import { getTeamName } from '@/utils/teamUtils'
import SmallPlayerCard from '@/components/smallPlayerCard/SmallPlayerCard'
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

export default function TeamPage({
  params,
  searchParams,
}: {
  params: { team: string }
  searchParams: { room?: string }
}) {
  const { team } = params
  const roomNumber = searchParams.room

  const teamPlayers = getTeamPlayers(team)
  const teamName = getTeamName(team)

  if (!teamPlayers.length) {
    notFound()
  }

  const roomLayout = {
    '1': { entrance: [2, 1], exit: [1, 3] },
    '2': { entrance: [1, 0], exit: [2, 2] },
    '3': { entrance: [0, 2], exit: [1, 0] },
    '4': { entrance: [1, 3], exit: [0, 1] },
  } as const

  type RoomKey = keyof typeof roomLayout
  const roomKey: RoomKey = (
    roomNumber && ['1', '2', '3', '4'].includes(roomNumber) ? roomNumber : '1'
  ) as RoomKey
  const entrancePos = roomLayout[roomKey].entrance
  const exitPos = roomLayout[roomKey].exit

  const blockedCells = new Set([
    `${entrancePos[0]}-${entrancePos[1]}`,
    `${exitPos[0]}-${exitPos[1]}`,
    '1-1',
    '1-2',
  ])

  function isBetween(
    cell: ReadonlyArray<number>,
    entrance: ReadonlyArray<number>,
    exit: ReadonlyArray<number>
  ) {
    const [r, c] = cell
    const [er, ec] = entrance
    const [xr, xc] = exit
    return (
      r >= Math.min(er, xr) &&
      r <= Math.max(er, xr) &&
      c >= Math.min(ec, xc) &&
      c <= Math.max(ec, xc)
    )
  }

  const allCells: [number, number][] = []
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      allCells.push([row, col])
    }
  }

  const playableCells = allCells
    .filter(([r, c]) => !blockedCells.has(`${r}-${c}`))
    .sort((a, b) => {
      const aBetween = isBetween(a, entrancePos, exitPos)
      const bBetween = isBetween(b, entrancePos, exitPos)

      if (aBetween !== bBetween) return aBetween ? 1 : -1

      const distA = Math.abs(a[0] - entrancePos[0]) + Math.abs(a[1] - entrancePos[1])
      const distB = Math.abs(b[0] - entrancePos[0]) + Math.abs(b[1] - entrancePos[1])

      return distB - distA
    })

  const cellPlayerMap = new Map<string, (typeof teamPlayers)[0]>()
  playableCells.forEach(([row, col], i) => {
    if (i < teamPlayers.length) {
      cellPlayerMap.set(`${row}-${col}`, teamPlayers[i])
    }
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StandardButton label="← Back to Museum" href="/museum" />
        <h1>Room: {roomNumber}</h1>
        <h2>{teamName} Legends</h2>
        <p>Players who made history for {teamName}</p>
      </div>

      <div className={styles.room}>
        {[...Array(3)].flatMap((_, row) =>
          [...Array(4)].map((_, col) => {
            const key = `${row}-${col}`
            const isEntrance = row === entrancePos[0] && col === entrancePos[1]
            const isExit = row === exitPos[0] && col === exitPos[1]
            const player = cellPlayerMap.get(key)

            return (
              <div key={key} className={styles.cell}>
                {isEntrance ? (
                  <div className={styles.roomText}>Entrance</div>
                ) : isExit ? (
                  <div className={styles.roomText}>Exit</div>
                ) : player ? (
                  <SmallPlayerCard player={player} href={`/museum/${team}/${player.id}`} />
                ) : (
                  <div className={styles.emptyCell} />
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
