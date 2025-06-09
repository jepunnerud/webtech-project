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
              This website is a final project for the “Information Modeling and Web Technologies”
              course in the Digital Humanities & Digital Knowledge master&apos;s program at the
              University of Bologna.
            </p>
          </div>
        </div>

        {/* What This Is */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>What This Is</h3>
            <p>
              A simple web app designed to support a museum exhibition by organizing real-world
              items into themed, interactive visits. Visitors can explore items through metadata,
              stories, and media content.
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

      {/* Image Credits Section */}
      <div className={styles.creditsSection}>
        <h2>Image Credits</h2>
        <p>
          The images used in this app are for educational and demonstrative purposes only. All rights belong to their respective owners. Below is a list of credits for the images used:
        </p>
        <div className={styles.externalLink}>
          <ul className={styles.creditsList}>
            <li><a href="https://www.filippogalli.com/2024/01/07/tony-adams-allinferno-e-ritorno/" target="_blank" rel="noopener noreferrer">Tony Adams</a></li>
            <li><a href="https://www.imdb.com/it/name/nm1408419/bio/" target="_blank" rel="noopener noreferrer">Dennis Bergkamp</a></li>
            <li><a href="https://arsenalarsenal.net/tag/liam-brady/" target="_blank" rel="noopener noreferrer">Liam Brady</a></li>
            <li><a href="https://www.skysports.com/petr-cech" target="_blank" rel="noopener noreferrer">Petr Cech</a></li>
            <li><a href="https://www.chelseafc.com/en/news/article/ashley-cole-a-true-blue-legend" target="_blank" rel="noopener noreferrer">Ashley Cole</a></li>
            <li><a href="https://150.scottishfa.co.uk/legends/managers/kenny-dalglish/" target="_blank" rel="noopener noreferrer">Kenny Dalglish</a></li>
            <li><a href="https://www.menarini.com/it-it/news/dettaglio-news/didier-drogba-la-stella-del-calcio-brilla-tra-i-vincitori-del-28-premio-internazionale-fair-play-menarini" target="_blank" rel="noopener noreferrer">Didier Drogba</a></li>
            <li><a href="https://liverpoolfc.fandom.com/wiki/Robbie_Fowler" target="_blank" rel="noopener noreferrer">Robbie Fowler</a></li>
            <li><a href="https://www.telegraph.co.uk/sport/football/teams/liverpool/4014627/Liverpool-captain-Steven-Gerrard-Profile.html" target="_blank" rel="noopener noreferrer">Steven Gerrard</a></li>
            <li><a href="https://www.manutd.com/en/players-and-staff/detail/ryan-giggs" target="_blank" rel="noopener noreferrer">Ryan Giggs</a></li>
            <li><a href="https://www.firstpost.com/sports/football-news/thierry-henry-depression-mental-health-13591272.html" target="_blank" rel="noopener noreferrer">Thierry Henry</a></li>
            <li><a href="https.manutd.com/en/players-and-staff/detail/roy-keane" target="_blank" rel="noopener noreferrer">Roy Keane</a></li>
            <li><a href="https://www.talkchelsea.net/news/i-understand-why-he-spoke-out-chelsea-great-defends-antonio-conte-after-wild-outburst/" target="_blank" rel="noopener noreferrer">Frank Lampard</a></li>
            <li><a href="https://www.skysports.com/football/news/11670/10180742/world-cup-winner-robert-pires-announces-his-retirement-from-football" target="_blank" rel="noopener noreferrer">Robert Pires</a></li>
            <li><a href="https://www.manutd.com/en/news/detail/seven-reasons-bryan-robson-is-a-manchester-united-icon" target="_blank" rel="noopener noreferrer">Bryan Robson</a></li>
            <li><a href="https://www.manutd.com/en/players-and-staff/detail/wayne-rooney" target="_blank" rel="noopener noreferrer">Wayne Rooney</a></li>
            <li><a href="https://www.thefootballmarket.it/blogs/infos/ian-rush-portrait-de-la-legende-du-liverpool-fc" target="_blank" rel="noopener noreferrer">Ian Rush</a></li>
            <li><a href="https://www.manutd.com/en/players-and-staff/detail/paul-scholes" target="_blank" rel="noopener noreferrer">Paul Scholes</a></li>
            <li><a href="https://www.friendsofliverpool.com/2023/12/club-legend-graeme-souness/" target="_blank" rel="noopener noreferrer">Graeme Souness</a></li>
            <li><a href="https://www.chelseafc.com/en/john-terry" target="_blank" rel="noopener noreferrer">John Terry</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.centeredButton}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}