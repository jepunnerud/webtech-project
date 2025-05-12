import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Styling Documentation' };

export default function Documentation() {
  return (
    <article className={styles.page}>
      {/* ---------- Intro ---------- */}
      <header className={styles.header}>
        <h1>Styling&nbsp;Documentation</h1>
        <p className={styles.lead}>
          How colour, spacing, and the golden ratio guide every component.
        </p>
      </header>

      {/* ---------- Nav Bar ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Navigation Bar</h2>
        <p>
          The bar is <em>fixed</em> at 64&nbsp;px, the primary vertical
          spacing step (64 / 1.618 ≈ 40 px). We use a single accent blue
          (#64b5f6) for brand recall and WCAG–AA contrast on hover.
        </p>
        <ul className={styles.list}>
          <li>Frosted glass via <code>backdrop-filter: blur(12px)</code>.</li>
          <li>No underlines—colour shift alone meets the 3:1 hover rule.</li>
        </ul>
      </section>

      {/* ---------- Home Hero ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Home Hero</h2>
        <p>
          The hero fills the viewport with
          <code>height: calc(100dvh − 64px)</code> so browser UI doesn’t create
          white bands. Typography follows a φ-based modular scale:
        </p>
        <ol className={styles.list}>
          <li>Body text = 1 rem</li>
          <li>Subhead = 1 × 1.618 ≈ 1.6 rem</li>
          <li>Hero title = 1.6 × 1.618 ≈ 2.6 rem</li>
        </ol>
      </section>

      {/* ---------- Team Grid ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Team Grid / Cards</h2>
        <p>
          Cards keep <code>aspect-ratio: 4/3</code> (close to φ) and use a dark
          surface (<code>#10151e</code>) with a subtle shadow for depth.
        </p>
        <ul className={styles.list}>
          <li>
            Grid column: <code>minmax(260px, 1fr)</code> (260 × φ ≈ 420 px max
            reading width).
          </li>
          <li>
            Main-club accent: <code>4px solid</code> brand blue on the left
            edge.
          </li>
        </ul>
      </section>

      {/* ---------- Player Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Player Detail Page</h2>
        <p>
          Two-column layout until 720 px, then the image stacks. Image width
          280 px ⇒ text block ≈ 455 px (φ ratio), yielding ~65-char lines.
        </p>
        <p>
          Interactive pills use <code>100vmax</code> radius to contrast the
          squared cards.
        </p>
      </section>

      {/* ---------- Design Tokens ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Design Tokens</h2>
        <pre className={styles.code}>{`accent  : #64b5f6;
radius  : 10px;
shadow  : 0 6px 18px rgba(0,0,0,.25);
border  : 1px solid rgba(255,255,255,.08);`}</pre>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className={styles.footer}>
        <Link href="/" className={styles.back}>
          ← Return Home
        </Link>
      </footer>
    </article>
  );
}
