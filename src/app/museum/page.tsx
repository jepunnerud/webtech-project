// src/app/museum/page.tsx
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

// Define room details with logos and door positions
const teams = [
  {
    id: "arsenal",
    name: "Arsenal",
    logo: "/logos/arsenal.svg",
    roomNumber: 1,
    doors: ["right", "bottom"],
  },
  {
    id: "chelsea",
    name: "Chelsea",
    logo: "/logos/chelsea.png",
    roomNumber: 2,
    doors: ["left", "bottom"],
  },
  {
    id: "liverpool",
    name: "Liverpool",
    logo: "/logos/liverpool.png",
    roomNumber: 4,
    doors: ["top", "right"],
  },
  {
    id: "manchesterunited",
    name: "Manchester United",
    logo: "/logos/manchesterunited.png",
    roomNumber: 3,
    doors: ["top", "left"],
  },
];

const MuseumPage = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Interactive museum map</h1>
      </div>
      <div className={styles.grid}>
        {teams.map((team) => (
          <Link
            key={team.id}
            href={`/museum/${team.id}`}
            className={`${styles.box} ${styles[`room${team.roomNumber}`]}`}
          >
            {team.doors.map((side) => (
              <span key={side} className={styles[`door${side.charAt(0).toUpperCase() + side.slice(1)}`]} />
            ))}

            <Image
              src={team.logo}
              alt={`${team.name} logo`}
              width={120}
              height={120}
              style={{ height: "70%", width: "auto" }}
            />
            <div className={styles.text}>
              <h3>Room {team.roomNumber}</h3>
            </div>
          </Link>
        ))}

        <div className={styles.centerText}>
          <h3>Entrance/Exit</h3>
        </div>
      </div>
    </div>
  );
};

export default MuseumPage;
