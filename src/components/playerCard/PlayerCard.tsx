import Image from "next/image";
import Link from "next/link";
import styles from "./PlayerCard.module.css";
import { Player } from "@/types";

interface PlayerCardProps {
  player: Player;
  href: string;
}

export default function PlayerCard({ player, href }: PlayerCardProps) {
  const main = player.teams.reduce((a, b) =>
    a.appearances > b.appearances ? a : b
  );
  return (
    <Link key={player.id} href={href} className={styles.playerCard}>
      <div className={styles.playerImage}>
        <Image
          src={player.image_url}
          alt={player.name}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.playerInfo}>
        <h3>{player.name}</h3>
        <p>{player.position}</p>
        <p className={styles.nation}>{player.nation}</p>
        <div className={styles.teamStats}>
          <span>Appearances: {main.appearances}</span>
          {main.goals !== undefined && <span>Goals: {main.goals}</span>}
        </div>
        {href.includes("all") && (
          <>
            <small className={styles.clubTag}>Legend of {main.club}</small>
            <small className={styles.debutDate}>
              Debut:{" "}
              {new Date(player.debut_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </small>
          </>
        )}
      </div>
    </Link>
  );
}
