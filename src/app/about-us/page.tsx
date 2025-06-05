import Image from 'next/image'
import styles from './page.module.css'
import StandardButton from '@/components/StandardButton/StandardButton'

interface Student {
  name: string
  imageSrc: string
  linkedin: string
  github: string
  nationality: string
  age: number
}

const students: Student[] = [
  {
    name: 'Åke Sjursen Hauge',
    imageSrc: '/guttabilder/aake.png',
    linkedin: 'https://www.linkedin.com/in/aake-sjursen-hauge/',
    github: 'https://github.com/aakesjh',
    nationality: 'Norwegian',
    age: 25,
  },
  {
    name: 'Andreas Omholt Olsen',
    imageSrc: '/guttabilder/andreas.png',
    linkedin: 'https://www.linkedin.com/in/andreas-omholt-olsen-890b9724b/',
    github: 'https://github.com/andreas-ols1',
    nationality: 'Norwegian',
    age: 24,
  },
  {
    name: 'Jakob Eilertsen Punnerud',
    imageSrc: '/guttabilder/jakob.png',
    linkedin: 'https://www.linkedin.com/in/jakobpunnerud-208771233/',
    github: 'https://github.com/jepunnerud',
    nationality: 'Norwegian',
    age: 23,
  },
]

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Meet Our Team</h1>
        <p className={styles.subtitle}>The talented individuals behind our success</p>
      </div>

      <div className={styles.aboutCardContainer}>
        {students.map((student) => (
          <div key={student.name} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={student.imageSrc}
                alt={`Portrait of ${student.name}`}
                width={160}
                height={160}
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.name}>{student.name}</h2>
              <div className={styles.details}>
                <p className={styles.detailItem}>
                  <span className={styles.detailLabel}>Nationality:</span> {student.nationality}
                </p>
                <p className={styles.detailItem}>
                  <span className={styles.detailLabel}>Age:</span> {student.age}
                </p>
              </div>
              <div className={styles.links}>
                <a
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${student.name}'s LinkedIn profile`}
                  className={styles.link}
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn logo"
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                </a>
                <a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${student.name}'s GitHub profile`}
                  className={styles.link}
                >
                  <Image
                    src="/icons/github.svg"
                    alt="GitHub logo"
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}
