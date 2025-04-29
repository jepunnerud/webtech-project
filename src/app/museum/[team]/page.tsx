import { use } from 'react';
import styles from './page.module.css';
import playersData from '../../../../public/players.json';
import Image from 'next/image';
import Link from 'next/link';
import { Player, TeamStats } from '@/types';
import { getTeamName } from '@/utils/teamUtils.ts';

async function getTeamPlayers(teamSlug: string) {
  const teamName = getTeamName(teamSlug);
  
  return playersData
    .map(player => {
      const mainTeam = player.teams.reduce((prev, current) => 
        (prev.appearances > current.appearances) ? prev : current
      );
      
      const currentTeamStats = player.teams.find(t => 
        t.club.toLowerCase() === teamName.toLowerCase()
      );

      return {
        ...player,
        mainTeam,
        currentTeamStats
      };
    })
    .filter(player => 
      player.mainTeam.club.toLowerCase() === teamName.toLowerCase() && 
      player.currentTeamStats
    );
}

export default function TeamPage({ params }: { params: { team: string } }) {
  const teamPlayers = use(getTeamPlayers(params.team));
  const teamName = getTeamName(params.team);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/museum" className={styles.backButton}>
          &larr; Back to Museum
        </Link>
        <h1>{teamName} Legends</h1>
        <p>Players who made history for {teamName}</p>
      </div>

      {teamPlayers.length === 0 ? (
        <div className={styles.empty}>
          <p>No players found for this team.</p>
        </div>
      ) : (
        <div className={styles.playersGrid}>
          {teamPlayers.map(player => (
            <Link 
              key={player.id} 
              href={`/museum/${params.team}/${player.id}`}
              className={styles.playerCard}
            >
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
                  <span>Appearances: {player.currentTeamStats?.appearances}</span>
                  {player.currentTeamStats?.goals !== undefined && (
                    <span>Goals: {player.currentTeamStats.goals}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}