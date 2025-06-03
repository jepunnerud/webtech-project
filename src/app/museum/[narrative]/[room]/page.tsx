// app/museum/[narrative]/[room]/page.tsx
import styles from "./page.module.css";
import playersData from "@/../public/players.json";
import PlayerCard from "@/components/playerCard/PlayerCard";
import StandardButton from "@/components/StandardButton";
import { getTeamName } from "@/utils/teamUtils";
import { Player, TeamStats } from "@/types";

type Params = {
  params: {
    narrative: string;
    room: string;
  };
};

function getTeamPlayers(
  teamSlug: string
): (Player & { mainTeam: TeamStats; currentTeamStats?: TeamStats })[] {
  const teamName = getTeamName(teamSlug);
  return playersData
    .map((player) => {
      const mainTeam = player.teams.reduce((prev, cur) =>
        prev.appearances > cur.appearances ? prev : cur
      );
      const currentTeamStats = player.teams.find(
        (t) => t.club.toLowerCase() === teamName.toLowerCase()
      );
      return { ...player, mainTeam, currentTeamStats };
    })
    .filter(
      (p) =>
        p.mainTeam.club.toLowerCase() === teamName.toLowerCase() &&
        p.currentTeamStats
    );
}

export default async function RoomPage({ params }: Params) {
  const { narrative, room } = params;
  let filteredPlayers: Array<
    Player & { mainTeam: TeamStats; currentTeamStats?: TeamStats }
  > = [];

  if (narrative === "teams") {
    filteredPlayers = getTeamPlayers(room);
  } else if (narrative === "position") {
    filteredPlayers = playersData
      .filter(
        (p) =>
          p.position &&
          p.position.toLowerCase().replace(/\s+/g, "") === room
      )
      .map((player) => {
        const mainTeam = player.teams.reduce((prev, cur) =>
          prev.appearances > cur.appearances ? prev : cur
        );
        return { ...player, mainTeam, currentTeamStats: mainTeam };
      });
  } else if (narrative === "debut") {
    const decadeNum = parseInt(room, 10);
    filteredPlayers = playersData
      .filter((p) => {
        if (!p.debut_date) return false;
        const year = new Date(p.debut_date).getFullYear();
        return Math.floor(year / 10) * 10 === decadeNum;
      })
      .map((player) => {
        const mainTeam = player.teams.reduce((prev, cur) =>
          prev.appearances > cur.appearances ? prev : cur
        );
        return { ...player, mainTeam, currentTeamStats: mainTeam };
      });
  }

  const titleText =
    narrative === "teams"
      ? `${getTeamName(room)} Legends`
      : narrative === "position"
      ? `Position: ${room.charAt(0).toUpperCase() + room.slice(1)}`
      : `Debut: ${room}s`;

  const subtitleText =
    narrative === "teams"
      ? `Players who made history for ${getTeamName(room)}`
      : narrative === "position"
      ? `Players who played as ${room.charAt(0).toUpperCase() + room.slice(1)}`
      : `Players who debuted in the ${room}s`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StandardButton label="← Back to Museum" href="/museum" />
        <h1>{titleText}</h1>
        <p>{subtitleText}</p>
      </div>

      {filteredPlayers.length === 0 ? (
        <div className={styles.empty}>
          <p>No players found for this category.</p>
        </div>
      ) : (
        <div className={styles.playersGrid}>
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              href={`/museum/${narrative}/${room}/${player.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
