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
        <p>Scope, Purpose, Project Context, and Copyright</p>
      </div>

      <div className={styles.playersGrid}>
        {/* Project Context */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Project Context</h3>
            <p>
              This site is the final project for the “Information Modeling and Web Technologies”
              course (Digital Humanities & Digital Knowledge, University of Bologna).
            </p>
          </div>
        </div>

        {/* Scope */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Scope</h3>
            <p>
              The Museum of Football is a digital companion to the physical exhibition, presenting
              curated artifacts with detailed metadata and narrative descriptions.
            </p>
          </div>
        </div>

        {/* Purpose */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Purpose</h3>
            <p>
              To document our styling decisions, design tokens, and narrative structure—supporting
              collaboration, transparency, and future pedagogical use.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Copyright</h3>
            <p>
              © 2025 Museum of Football. All layout, typography, and code are © Museum of Football
              2025. Third-party content retains its own copyrights.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.centerButton}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}
