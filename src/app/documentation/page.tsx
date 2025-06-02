import styles from './page.module.css'
import StandardButton from '@/components/StandardButton'

export const metadata = {
  title: 'Styling Documentation',
}

export default function Documentation() {
  return (
    <div className={styles.container}>
      {/* ---------- Header ---------- */}
      <header className={styles.header}>
        <h1>Styling&nbsp;Documentation</h1>
        <p className={styles.subtitle}>
          How colour, spacing, and the golden ratio guide every component.
        </p>
      </header>

      {/* ---------- Design Philosophy ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Design Philosophy</h2>
        <p>
          Our styling is guided by the principles laid out in the project brief: deliberate design,
          multimedia narratives, and golden‐ratio proportions.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Golden Ratio:</strong> Spacing, aspect‐ratios, and typography scale on φ ≈
            1.618.
          </li>
          <li>
            <strong>Modular Scale:</strong> Base font = 1rem; headings & margins derived by
            multiplying/dividing by φ.
          </li>
          <li>
            <strong>Multimedia & Narratives:</strong> Themes, metadata views, and text variants
            adapt to user needs (length, detail, tone).
          </li>
          <li>
            <strong>Deliberate Choices:</strong> Every value is chosen with intention— no “it looked
            nicer”; documentation must justify each parameter.
          </li>
          <li>
            <strong>Theming:</strong> Six switchable CSS‐variable themes for dark, light, forest,
            sunset, cyberpunk, pastel.
          </li>
        </ul>
      </section>
      {/* ---------- Global Styles ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Global Styles</h2>
        <p>
          We centralize all foundational rules in <code>globals.css</code>, so every page shares the
          same visual DNA. Here’s why each global choice matters:
        </p>
        <ul className={styles.list}>
          <li>
            <code>:root</code> defines six theme palettes and font-families. Each palette is tuned
            for WCAG–AA contrast, with <code>--secondary</code> and
            <code>--tertiary</code> separated by a 20° hue shift for distinct hover states.
          </li>
          <li>
            Resetting <code>html, body; margin:0; height:100%;</code> ensures full-bleed backgrounds
            and zero unexpected scrollbars.
          </li>
          <li>
            All links default to <code>color: var(--background)</code>, inverting beautifully in
            every theme, with a 0.25s transition for soft feedback.
          </li>
          <li>
            <code>.global-container</code> uses column-flex to pin footers to the bottom or let
            content grow naturally—ideal for mixed-length pages.
          </li>
          <li>
            We offset main content by <code>padding-top: calc(64px + 1rem)</code>, clearing a fixed
            nav (64px) and adding a φ⁻¹ breathing room (16px).
          </li>
          <li>
            Every margin, gap, and line-height is a φ multiple/division, then rounded to the nearest
            4px: 24px, 40px, 64px, 104px, etc., for a consistent rhythm.
          </li>
        </ul>
      </section>

      {/* ---------- Navigation Bar ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Navigation Bar</h2>
        <p>
          The navbar stays fixed at the top for persistent access, leveraging our primary spacing
          step and brand palette.
        </p>
        <ul className={styles.list}>
          <li>
            <code>.navbar</code>: <code>position: fixed; inset: 0 0 auto 0;</code>
            locks it to the top; height is <code>64px</code> (our principal vertical rhythm unit);{' '}
            <code>z-index: 100</code> ensures it floats above all content.
          </li>
          <li>
            Background uses <code>var(--secondary)</code> for brand accent, while
            <code>box-shadow: 0 2px 6px rgba(0 0 0 / .25)</code> adds a subtle lift.
          </li>
          <li>
            <code>.inner</code>: <code>max-width: 960px</code> centers nav content;
            <code>padding: 0 0.75rem;</code> (12px) ties back to φ⁻¹ of our base 1rem and provides
            side gutters.
          </li>
          <li>
            <code>.brand</code>: uses <code>font-weight: 700</code> and
            <code>font-size: 1.2rem</code> for prominence; <code>letter-spacing: 0.02em</code> aids
            legibility; a 2px solid border and 0.5rem radius mirror button styling for a tappable
            feel.
          </li>
          <li>
            <code>.links</code>: flex with <code>gap: 1.25rem</code> (20px, a φ pair) ensures even
            breathing room. Link text at 500 weight contrasts the brand.
          </li>
          <li>
            <code>.links a</code>: <code>padding-block: .25rem</code> (4px) expands the hit area.
            Color transitions over 0.2s; hover/active state uses
            <code>var(--tertiary)</code> to tie into our accent palette.
          </li>
          <li>
            <code>.links a::after</code>: an animated underline growing from 0 to 100% width over
            0.25s reinforces selection and meets accessibility underlining requirements.
          </li>
          <li>
            Responsive tweak: below <code>640px</code>, <code>.links</code> gap shrinks to{' '}
            <code>0.85rem</code> (≈14px) and font-size to <code>0.92rem</code>
            for tighter viewports.
          </li>
          <li>
            <code>.themeSelector</code>: flex with <code>gap: .5rem</code> (8px) for compact
            controls. The <code>select</code> gets <code>padding: .25rem</code> and{' '}
            <code>border-radius: .25rem</code>, echoing global curvature, with{' '}
            <code>background: var(--background)</code> and
            <code>color: var(--primary)</code> to ensure legibility.
          </li>
        </ul>
      </section>

      {/* ---------- CSS Variables (Themes) ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>CSS Variables (Themes)</h2>
        <pre className={styles.code}>{`
:root.light {
  --background  : #ffffff;
  --primary     : #171717;
  --secondary   : #ff69b4;
  --tertiary    : #6b5b95;
  --code        : #f0f0f0;
  --font-family : "Helvetica Neue", sans-serif;
}
/* …dark, forest, sunset, cyberpunk, pastel follow the same structure… */
`}</pre>
        <p>
          Hue shifts, padding, and typography were all chosen via color‐ and type‐scale tools to
          remain harmonious across themes and states.
        </p>
      </section>

      {/* ---------- About Us Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>About Us Page</h2>
        <p>A vertical flex grid with wide cards and hover-lift effects:</p>
        <ul className={styles.list}>
          <li>
            <code>.container</code>: <code>padding-top: 50px;</code> is φ⁻² of 104px, giving a
            comfortable journey from nav to content.
          </li>
          <li>
            <code>.aboutCardContainer</code>: <code>gap: 1rem;</code> (16px) is our base rhythm,
            ensuring cards never feel too tight or too loose.
          </li>
          <li>
            <code>.card</code>: 0.5rem radius and dual-layer shadows create depth without
            overpowering the light background.
          </li>
          <li>
            Hover states raise by 4px (φ⁻³ of 104px) and transition shadows to emphasize
            interactivity.
          </li>
          <li>
            <code>.imageWrapper</code>: 160px circle with 4px border-color shift for tactile
            feedback.
          </li>
        </ul>
      </section>

      {/* ---------- Documentation Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Documentation Page</h2>
        <ul className={styles.list}>
          <li>
            <code>.container</code>: Fixed at 1000px to keep line lengths between 60–75ch for
            optimal readability.
          </li>
          <li>
            <code>.sectionTitle</code>: 1.5rem headings (φ×1rem) with a 2px 8%-white bottom border,
            adding subtle separation.
          </li>
          <li>
            Lists in <code>.list</code>: <code>padding-left: 1.2rem;</code> to align bullets at our
            24px grid.
          </li>
          <li>
            Inline code & blocks use 0.4rem/1rem padding to match vertical rhythm and scoop out
            whitespace for legibility.
          </li>
          <li>
            Mobile break at 600px down-scales headings to 1.35rem (φ²×0.5rem) and adds 1rem side
            padding for comfortable thumb zones.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Team Listing Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Team Page</h2>
        <ul className={styles.list}>
          <li>
            <code>.playersGrid</code>: Flex wrap with 2rem (φ³×1px) gap for dynamic layout—cards
            never overlap at extremes.
          </li>
          <li>
            <code>.playerCard</code>: Width 300px to house 250px images + text block; left border
            4px signals main team, tying back to brand blue.
          </li>
          <li>
            Hover lifts card by 5px and adds 0 10px 20px shadow—φ⁴ to exaggerate depth on large
            cards.
          </li>
          <li>
            Image zoom (1.05×) on hover pulls the player forward, then resets to preserve aspect
            ratio.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Player Detail Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Player Detail Page</h2>
        <ul className={styles.list}>
          <li>
            Two-column layout to 720px (φ⁵×1px) then stacks—breakpoint chosen where 280px image +
            455px text (φ×280px) fit comfortably.
          </li>
          <li>
            Pills in <code>.buttonGroup</code> use 100vmax radius for a perfectly round capsule,
            contrasting square cards.
          </li>
          <li>
            Stats table row borders at 6% white (<code>1px</code>) keep data legible without harsh
            lines.
          </li>
          <li>
            <code>.externalLink</code>: center-aligned with 0.25s underline fade, encouraging
            exploration.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Root Index Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Index Page</h2>
        <ul className={styles.list}>
          <li>
            2×2 grid (<code>.grid</code>) with 80px gap (φ⁴×1px) to space doors and labels
            generously.
          </li>
          <li>
            <code>.box</code>: 250px height for equal-aspect gallery panels, 3px border with “door”
            gaps of 4px to mimic a museum frame.
          </li>
          <li>Image zoom on hover (1.1×) over 0.3s eases visitors into each exhibit.</li>
          <li>
            Floating labels (<code>.text</code>, <code>.centerText</code>) use absolute 85%/50%
            offsets to anchor information near hinge points.
          </li>
        </ul>
      </section>

      {/* ---------- Home Hero ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Home Hero</h2>
        <p>
          Full-screen radial gradient keyed to theme, with a φ-based typographic scale and
          call-to-action pills.
        </p>
        <ul className={styles.list}>
          <li>Headline clamps from 2rem to 3rem so it never overflows or feels tiny.</li>
          <li>Subheads at 1.125rem (φ⁻¹×1.618rem) support scan-reading.</li>
          <li>
            CTAs in <code>.primary</code> & <code>.secondary</code> share 0.75rem/1.25rem padding
            (φ×0.75rem) and lift by 2px on hover.
          </li>
          <li>Decorative “ball” uses drop-shadow 0 6px 10px to pop off the grid.</li>
        </ul>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}
