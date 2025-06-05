// src/app/disclaimer/page.tsx
import styles from './page.module.css'
import StandardButton from '@/components/StandardButton/StandardButton'

export const metadata = {
  title: 'Disclaimer',
}

export default function DisclaimerPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Disclaimer</h1>
        <p>About this site and its purpose</p>
      </div>

      <div className={styles.playersGrid}>
        {/* Course Context */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Project Context</h3>
            <p>
              This website is a final project for the “Information Modeling and Web Technologies” course 
              in the Digital Humanities & Digital Knowledge master&apos;s program at the University of Bologna.
            </p>
          </div>
        </div>

        {/* What This Is */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>What This Is</h3>
            <p>
              A simple web app designed to support a museum exhibition by organizing real-world items 
              into themed, interactive visits. Visitors can explore items through metadata, stories, 
              and media content.
            </p>
          </div>
        </div>

        {/* Why We Made It */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Why We Made It</h3>
            <p>
              To demonstrate how web technologies and information modeling can support cultural 
              storytelling. It also documents our work, styles, and structure.
            </p>
          </div>
        </div>

        {/* Copyright Info */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Copyright</h3>
            <p>
              © 2025 Museum of Football. The content, layout, and code are by the student team. 
              External images and media remain the property of their original creators.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.centeredButton}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}
