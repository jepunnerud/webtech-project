
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import playersData from "@/../public/players.json";
import StandardButton from "@/components/StandardButton";

// (1) Original teams array (no changes here)
const teams: {
  id: string;
  name: string;
  logo: string;
  roomNumber: number;
  doors: ("top" | "bottom" | "left" | "right")[];
}[] = [
  {
    id: "arsenal",
    name: "Arsenal",
    logo: "/logos/arsenal.svg",
    roomNumber: 1,
    doors: ["right", "bottom"] as ("right" | "bottom")[],
  },
  {
    id: "chelsea",
    name: "Chelsea",
    logo: "/logos/chelsea.png",
    roomNumber: 2,
    doors: ["left", "bottom"] as ("left" | "bottom")[],
  },
  {
    id: "liverpool",
    name: "Liverpool",
    logo: "/logos/liverpool.png",
    roomNumber: 4,
    doors: ["top", "right"] as ("top" | "right")[],
  },
  {
    id: "manchesterunited",
    name: "Manchester United",
    logo: "/logos/manchesterunited.png",
    roomNumber: 3,
    doors: ["top", "left"] as ("top" | "left")[],
  },
];

// (2) Helpers to extract “positions” and “debut decades” from players.json
function getAllPositions(): string[] {
  const set = new Set<string>();
  playersData.forEach((p) => {
    if (p.position && typeof p.position === "string") {
      set.add(p.position);
    }
  });
  return Array.from(set).sort().slice(0, 4);
}

function getAllDecades(): number[] {
  const set = new Set<number>();
  playersData.forEach((p) => {
    if (p.debut_date) {
      const year = new Date(p.debut_date).getFullYear();
      const decade = Math.floor(year / 10) * 10;
      set.add(decade);
    }
  });
  return Array.from(set).sort().slice(0, 4);
}

function getDoorsByIndex(idx: number): Array<"top" | "bottom" | "left" | "right"> {
  const doorMapping: Array<Array<"top" | "bottom" | "left" | "right">> = [
    ["right", "bottom"], // room 1
    ["left", "bottom"],  // room 2
    ["top", "left"],     // room 3
    ["top", "right"],    // room 4
  ];
  return doorMapping[idx] || ["right", "bottom"];
}

export default function MuseumIndexPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const narrative = searchParams.get("narrative") ?? "teams";

  let roomsToShow:
    | {
        id: string;
        name: string;
        logo?: string;
        roomNumber: number;
        doors: ("top" | "bottom" | "left" | "right")[];
      }[]
    | null = null;

  if (narrative === "teams") {
    roomsToShow = teams;
  } else if (narrative === "position") {
    const allPositions = getAllPositions();
    roomsToShow = allPositions.map((pos, idx) => ({
      id: pos.toLowerCase().replace(/\s+/g, ""),
      name: pos,
      roomNumber: idx + 1,
      doors: getDoorsByIndex(idx),
    }));
  } else if (narrative === "debut") {
    const allDecades = getAllDecades();
    roomsToShow = allDecades.map((dec, idx) => ({
      id: `${dec}`,
      name: `${dec}s`,
      roomNumber: idx + 1,
      doors: getDoorsByIndex(idx),
    }));
  }

  // Handlers
  const onNarrativeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const val = evt.target.value;
    if (val === "teams") {
      router.push("/museum");
    } else {
      router.push(`/museum?narrative=${val}`);
    }
  };

  return (
    <div>
      {/* ───── Header (title only) ───── */}
      <div className={styles.header}>
        <h1>Interactive museum map</h1>
      </div>

      {/* ───── Button + Dropdown(s) all on the same row ───── */}
      <div className={styles.buttonWrapper} style={{ display: "flex", alignItems: "center" }}>
        <StandardButton label="View all legends →" href="/museum/all" />

        {/* Primary “Narrative” dropdown */}
        <div className={styles.selectWrap}>
          <label htmlFor="narrativeSelect">Narrative: </label>
          <select id="narrativeSelect" value={narrative} onChange={onNarrativeChange}>
            <option value="teams">Teams</option>
            <option value="position">Position</option>
            <option value="debut">Debut Decade</option>
          </select>
        </div>
      </div>

      {/* ───── The 4‐room grid beneath ───── */}
      <div className={styles.grid}>
        {roomsToShow!.map((room) => (
          <Link
            key={room.id}
            href={`/museum/${narrative}/${room.id}`}
            className={`${styles.box} ${styles[`room${room.roomNumber}`]}`}
          >
            {room.doors.map((side) => (
              <span
                key={side}
                className={
                  styles[
                    `door${side.charAt(0).toUpperCase() + side.slice(1)}`
                  ]
                }
              />
            ))}

            {narrative === "teams" && (
              <Image
                src={room.logo!}
                alt={`${room.name} logo`}
                width={120}
                height={120}
                style={{ height: "70%", width: "auto" }}
              />
            )}

            <div className={styles.text}>
              <h3>{room.name}</h3>
            </div>
          </Link>
        ))}

        <div className={styles.centerText}>
          <h3>Entrance/Exit</h3>
        </div>
      </div>
    </div>
  );
}
