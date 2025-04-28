import styles from "./page.module.css";
import Image from "next/image";

const MuseumPage = () => {
  const logos = ["/logos/arsenal.svg", "/logos/chelsea.png", "/logos/liverpool.png", "/logos/manchesterunited.png"];
  const roomNumbers = [1, 2, 4, 3];
  return (
    <div>
      <div className={styles.header}>
        <h1>Interactive museum map</h1>
      </div>
      <div className={styles.grid}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`${styles.box} ${
              index === 0 ? styles.room1 : index === 1 ? styles.room2 : index === 2 ? styles.room4 : styles.room3
            }`}
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{
                width: "auto",
                height: "70%",
              }}
              width={50}
              height={50}
            />
            <div className={styles.text}>
              <h3>Room {roomNumbers[index]}</h3>
            </div>
          </div>
        ))}
        <div className={styles.centerText}>
          <h3>Entrance/Exit</h3>
        </div>
      </div>
    </div>
  );
};

export default MuseumPage;
