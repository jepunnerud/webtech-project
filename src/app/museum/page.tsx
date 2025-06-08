'use client'

import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import playersData from '@/../public/players.json'
import StandardButton from '@/components/StandardButton/StandardButton'
import { use, useEffect, useState } from 'react'

const teams: {
  id: string
  name: string
  logo: string
  roomNumber: number
  doors: ('top' | 'bottom' | 'left' | 'right')[]
}[] = [
  {
    id: 'arsenal',
    name: 'Arsenal',
    logo: '/logos/arsenal.svg',
    roomNumber: 1,
    doors: ['right', 'bottom'] as ('right' | 'bottom')[],
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    logo: '/logos/chelsea.png',
    roomNumber: 2,
    doors: ['left', 'bottom'] as ('left' | 'bottom')[],
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    logo: '/logos/liverpool.png',
    roomNumber: 4,
    doors: ['top', 'right'] as ('top' | 'right')[],
  },
  {
    id: 'manchesterunited',
    name: 'Manchester United',
    logo: '/logos/manchesterunited.png',
    roomNumber: 3,
    doors: ['top', 'left'] as ('top' | 'left')[],
  },
]

function getAllPositions(): string[] {
  const preferredOrder = ['Goalkeeper', 'Defender', 'Forward', 'Midfielder']
  const actualPositions = new Set<string>()
  playersData.forEach((p) => {
    if (p.position && typeof p.position === 'string') {
      actualPositions.add(p.position)
    }
  })
  return preferredOrder.filter((pos) => actualPositions.has(pos))
}

function getAllDecades(): number[] {
  const preferredOrder = [1970, 1980, 2000, 1990]
  const actualDecades = new Set<number>()
  playersData.forEach((p) => {
    if (p.debut_date) {
      const year = new Date(p.debut_date).getFullYear()
      const decade = Math.floor(year / 10) * 10
      actualDecades.add(decade)
    }
  })
  return preferredOrder.filter((decade) => actualDecades.has(decade))
}

function getDoorsByIndex(idx: number): Array<'top' | 'bottom' | 'left' | 'right'> {
  const doorMapping: Array<Array<'top' | 'bottom' | 'left' | 'right'>> = [
    ['right', 'bottom'],
    ['left', 'bottom'],
    ['top', 'left'],
    ['top', 'right'],
  ]
  return doorMapping[idx] || ['right', 'bottom']
}

export default function MuseumIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ narrative?: string }>
}) {
  const router = useRouter()
  const { narrative: narrativeFromQuery } = use(searchParams)
  const [narrative, setNarrative] = useState<string>(narrativeFromQuery ?? 'teams')

  useEffect(() => {
    const stored = localStorage.getItem('narrative')
    if (stored && stored !== narrative) {
      setNarrative(stored)
    }
  }, [narrative])

  const onNarrativeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const val = evt.target.value
    setNarrative(val)
    localStorage.setItem('narrative', val)

    if (val === 'teams') {
      router.push('/museum')
    } else {
      router.push(`/museum?narrative=${val}`)
    }
  }

  let roomsToShow:
    | {
        id: string
        name: string
        logo?: string
        roomNumber: number
        doors: ('top' | 'bottom' | 'left' | 'right')[]
      }[]
    | null = null

  const roomNumberMap = [1, 2, 4, 3]

  if (narrative === 'teams') {
    roomsToShow = teams
  } else if (narrative === 'position') {
    const allPositions = getAllPositions()
    roomsToShow = allPositions.map((pos, idx) => {
      const rn = roomNumberMap[idx]
      return {
        id: pos.toLowerCase().replace(/\s+/g, ''),
        name: pos,
        roomNumber: rn,
        doors: getDoorsByIndex(rn - 1),
      }
    })
  } else if (narrative === 'debut') {
    const allDecades = getAllDecades()
    roomsToShow = allDecades.map((dec, idx) => {
      const rn = roomNumberMap[idx]
      return {
        id: `${dec}`,
        name: `${dec}s`,
        roomNumber: rn,
        doors: getDoorsByIndex(rn - 1),
      }
    })
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h1>Interactive museum map</h1>
        </div>

        <div className={styles.buttonWrapper} style={{ display: 'flex', alignItems: 'center' }}>
          <StandardButton label="View all legends →" href="/museum/all" />

          <div className={styles.selectWrap}>
            <label htmlFor="narrativeSelect">Narrative: </label>
            <select id="narrativeSelect" value={narrative} onChange={onNarrativeChange}>
              <option value="teams">Teams</option>
              <option value="position">Position</option>
              <option value="debut">Debut Decade</option>
            </select>
          </div>
        </div>

        <div className={styles.grid}>
          {roomsToShow!.map((room) => (
            <Link
              key={room.id}
              href={{
                pathname: `/museum/${narrative}/${room.id}`,
                query: { roomNumber: room.roomNumber },
              }}
              className={`${styles.box} ${styles[`room${room.roomNumber}`]}`}
            >
              {room.doors.map((side) => (
                <span
                  key={side}
                  className={styles[`door${side.charAt(0).toUpperCase() + side.slice(1)}`]}
                />
              ))}
              {narrative === 'teams' ? (
                <Image
                  src={room.logo!}
                  alt={`${room.name} logo`}
                  width={120}
                  height={120}
                  style={{ height: '70%', width: 'auto' }}
                />
              ) : (
                <div className={styles.text}>
                  <h3>{room.name}</h3>
                </div>
              )}
            </Link>
          ))}

          <div className={styles.centerText}>
            <h3>Entrance/Exit</h3>
          </div>
        </div>
      </div>
      <div className={styles.centeredButton}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}
