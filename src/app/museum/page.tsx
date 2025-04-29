// src/app/museum/page.tsx
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const teams = [
  { id: "arsenal", name: "Arsenal", logo: "/logos/arsenal.svg", roomNumber: 1 },
  { id: "chelsea", name: "Chelsea", logo: "/logos/chelsea.png", roomNumber: 2 },
  { id: "liverpool", name: "Liverpool", logo: "/logos/liverpool.png", roomNumber: 4 },
  { id: "manchesterunited", name: "Manchester United", logo: "/logos/manchesterunited.png", roomNumber: 3 },
];

const MuseumPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Football Legends Museum</h1>
        <p>Click on a team room to explore their legendary players</p>
      </div>
      
      <div className={styles.grid}>
        {teams.map((team, index) => (
          <Link 
            key={team.id}
            href={`/museum/${team.id}`}
            className={`${styles.room} ${styles[`room${index + 1}`]}`}
          >
            <div className={styles.logoContainer}>
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                width={120}
                height={120}
                className={styles.logo}
              />
            </div>
            <div className={styles.roomInfo}>
              <h3>{team.name}</h3>
              <span>Room {team.roomNumber}</span>
            </div>
          </Link>
        ))}
        
        <div className={styles.entrance}>
          <h3>Entrance</h3>
        </div>
      </div>
    </div>
  );
};

export default MuseumPage;