import Image from 'next/image'
import Link from 'next/link'
import styles from './SmallPlayerCard.module.css'
import { Player } from '@/types'

interface PlayerCardProps {
  player: Player
  href: string
}

export default function SmallPlayerCard({ player, href }: PlayerCardProps) {
  return (
    <Link key={player.id} href={href} className={styles.playerCard}>
      <div className={styles.playerImage}>
        <Image src={player.image_url} alt={player.name} width={200} height={200} />
      </div>
      <div className={styles.playerInfo}>
        <h3>{player.name}</h3>
      </div>
    </Link>
  )
}
