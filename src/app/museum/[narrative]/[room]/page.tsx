import { notFound } from 'next/navigation'
import styles from './page.module.css'
import playersData from '@/../public/players.json'
import { Player, TeamStats } from '@/types'
import { getTeamName } from '@/utils/teamUtils'
import SmallPlayerCard from '@/components/smallPlayerCard/SmallPlayerCard'
import StandardButton from '@/components/StandardButton'

type Params = {
  params: {
    narrative: string
    room: string
  }
  searchParams: {
    roomNumber?: string
  }
}

function enrichPlayers(
  players: Player[]
): (Player & { mainTeam: TeamStats; currentTeamStats?: TeamStats })[] {
  return players.map((player) => {
    const mainTeam = player.teams.reduce((prev, cur) =>
      prev.appearances > cur.appearances ? prev : cur
    )
    return { ...player, mainTeam, currentTeamStats: mainTeam }
  })
}

function getFilteredPlayers(narrative: string, room: string) {
  if (narrative === 'teams') {
    const teamName = getTeamName(room)
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

  if (narrative === 'position') {
    return enrichPlayers(
      playersData.filter((p) => p.position && p.position.toLowerCase().replace(/\s+/g, '') === room)
    )
  }

  if (narrative === 'debut') {
    const decadeNum = parseInt(room, 10)
    return enrichPlayers(
      playersData.filter((p) => {
        if (!p.debut_date) return false
        const year = new Date(p.debut_date).getFullYear()
        return Math.floor(year / 10) * 10 === decadeNum
      })
    )
  }

  return []
}

const roomLayout = {
  '1': { entrance: [2, 1], exit: [1, 3] },
  '2': { entrance: [1, 0], exit: [2, 2] },
  '3': { entrance: [0, 2], exit: [1, 0] },
  '4': { entrance: [1, 3], exit: [0, 1] },
} as const

function isBetween(
  [r, c]: [number, number],
  [er, ec]: [number, number],
  [xr, xc]: [number, number]
) {
  return (
    r >= Math.min(er, xr) && r <= Math.max(er, xr) && c >= Math.min(ec, xc) && c <= Math.max(ec, xc)
  )
}

export default function RoomPage({ params, searchParams }: Params) {
  const { narrative, room } = params
  const roomNumber = searchParams.roomNumber
  const players = getFilteredPlayers(narrative, room)

  if (!players.length) notFound()

  const layout = roomLayout[roomNumber as keyof typeof roomLayout] || roomLayout['1']
  const { entrance, exit } = layout

  const blockedCells = new Set([
    `${entrance[0]}-${entrance[1]}`,
    `${exit[0]}-${exit[1]}`,
    '1-1',
    '1-2',
  ])

  const allCells: [number, number][] = []
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      allCells.push([row, col])
    }
  }

  const playableCells = allCells
    .filter(([r, c]) => !blockedCells.has(`${r}-${c}`))
    .sort((a, b) => {
      const aBetween = isBetween(a, [...entrance], [...exit])
      const bBetween = isBetween(b, [...entrance], [...exit])

      if (aBetween !== bBetween) return aBetween ? 1 : -1

      const distA =
        Math.abs(a[0] - entrance[0]) +
        Math.abs(a[1] - entrance[1]) +
        Math.abs(a[0] - exit[0]) +
        Math.abs(a[1] - exit[1])

      const distB =
        Math.abs(b[0] - entrance[0]) +
        Math.abs(b[1] - entrance[1]) +
        Math.abs(b[0] - exit[0]) +
        Math.abs(b[1] - exit[1])

      return distB - distA
    })

  const cellPlayerMap = new Map<string, (typeof players)[0]>()
  playableCells.forEach(([row, col], i) => {
    if (i < players.length) {
      cellPlayerMap.set(`${row}-${col}`, players[i])
    }
  })

  const titleText =
    narrative === 'teams'
      ? `${getTeamName(room)} Legends`
      : narrative === 'position'
        ? `Position: ${room.charAt(0).toUpperCase() + room.slice(1)}`
        : `Debut: ${room}s`

  const subtitleText =
    narrative === 'teams'
      ? `Players who made history for ${getTeamName(room)}`
      : narrative === 'position'
        ? `Players who played as ${room.charAt(0).toUpperCase() + room.slice(1)}`
        : `Players who debuted in the ${room}s`

  const roomQuery = roomNumber ? `?roomNumber=${roomNumber}` : ''

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StandardButton label="← Back to Museum" href="/museum" />
        <h1>Room: {roomNumber}</h1>
        <h2>{titleText}</h2>
        <p>{subtitleText}</p>
      </div>

      <div className={styles.room}>
        {[...Array(3)].flatMap((_, row) =>
          [...Array(4)].map((_, col) => {
            const key = `${row}-${col}`
            const isEntrance = row === entrance[0] && col === entrance[1]
            const isExit = row === exit[0] && col === exit[1]
            const player = cellPlayerMap.get(key)

            return (
              <div key={key} className={styles.cell}>
                {isEntrance ? (
                  <div className={styles.roomText}>Entrance</div>
                ) : isExit ? (
                  <div className={styles.roomText}>Exit</div>
                ) : player ? (
                  <SmallPlayerCard
                    player={player}
                    href={`/museum/${narrative}/${room}/${player.id}${roomQuery}`}
                  />
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
