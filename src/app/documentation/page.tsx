import styles from './page.module.css'
import StandardButton from '@/components/StandardButton/StandardButton'

export const metadata = {
  title: 'Styling & AI Usage Documentation',
}

export default function Documentation() {
  return (
    <div className={styles.container}>
      {/* ---------- Header ---------- */}
      <header className={styles.header}>
        <h1>Styling & AI&nbsp;Documentation</h1>
        <p className={styles.subtitle}>
          This page shows how we use color, spacing, careful design, and AI in our work. This helps
          us make all parts of the website easy and good to use.
        </p>
      </header>

      {/* ---------- Design Philosophy ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Design Philosophy</h2>
        <p>
          Our styling follows clear rules. These rules come from the project
          description. The rules make sure that everything you see has a purpose. This makes the
          website connected, easy to understand, and look good. Our main ideas are: &apos;deliberate
          design&apos; (we choose things for a reason) and using a clear system for
          spacing and sizes to make things look balanced.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Consistent Spacing System:</strong> We use a set system for all spacing. This
            system helps us decide how much space to put around elements (this is called margins and
            padding). It also helps with the shape of pictures and boxes (this is called aspect
            ratios) and how big text should be. When we use a system, things look balanced. For
            example, if a small space is 8 pixels, the next bigger space might be 12 or 16 pixels.
            This follows a scale based on our starting unit (often 4px, or 1rem which is usually 16
            pixels). This is a main part of our design system.
          </li>
          <li>
            <strong>Modular Scale & Typographic Hierarchy:</strong> This is a system for sizes of
            text and space. We start with a base font size, which is <code>1rem</code> (usually 16
            pixels). Then, we find other sizes, like for headings or spaces, by multiplying or
            dividing this <code>1rem</code> by numbers from our chosen scale (for example, 1.25,
            1.5, 2.0). So, a heading might be 1.5rem, and smaller text might be 0.8rem. These
            numbers are chosen to make text easy to read and show what is most important. This makes
            all sizes related and look good together. It helps make the design consistent.
          </li>
          <li>
            <strong>Multimedia & Narratives:</strong> The website shows different kinds of
            information, like text and pictures. The design should change to fit what
            the user wants. We have different &apos;themes&apos; (these are different looks for the
            site). We also have ways to see information called &apos;metadata views&apos; (metadata
            is data about data, like information about a picture). And we have different styles of
            text. These can change based on how much detail the user wants, or what information they
            look for. For example, some users want short text, others want long text. Our design
            tries to help with this.
          </li>
          <li>
            <strong>Deliberate Choices & Justification:</strong> We do not choose a style just
            because &quot;it looked nicer.&quot; Every choice, like a color or a size, has a reason.
            We write down these reasons. Often, the reason is connected to our main ideas, like our
            spacing system and type scale, or making the site easy to use for everyone (this is
            called accessibility). This makes it easier to work on the site later. It also helps
            everyone on the team understand why things are as they are. This is a very important
            rule for our project.
          </li>
          <li>
            <strong>Theming:</strong> We have ten different looks, or &apos;themes&apos;, for the
            website: dark, light, forest, sunset, cyberpunk, pastel, ManUTD, Liverpool, Chelsea and Arsenal. Users can switch between
            them. These themes are made using CSS Variables. CSS Variables are like placeholders for
            style values, for example, a color. When you change a theme, these placeholders get new
            values. Each theme changes colors and maybe some fonts, but they all should be easy to
            read and use.
          </li>
        </ul>
      </section>

      {/* ---------- Global Styles ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Global Styles</h2>
        <p>
          All basic style rules are in one file called <code>globals.css</code>. This makes sure
          that all pages look similar. This helps keep things consistent and easier to manage. Every
          choice here has a reason, as our project guidelines say.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              <code>:root</code> Theme Palettes & Font Families:
            </strong>{' '}
            In CSS, <code>:root</code> is the main part of the HTML document. We define our theme
            colors and basic fonts here using CSS variables. We have ten themes, like light and
            dark. For each theme, we pick colors so that text is easy to read on the background.
            This is called contrast. Our main colors for accents, <code>--secondary</code> and{' '}
            <code>--tertiary</code>, are at least 20 degrees different in hue (hue is a property of
            color). This makes them look different but related. This is good for showing when you
            move your mouse over a button, for example.
          </li>
          <li>
            <strong>
              CSS Reset (<code>html, body</code>):
            </strong>{' '}
            We set <code>margin: 0;</code> and <code>height: 100%;</code> for <code>html</code> and{' '}
            <code>body</code> elements. Browsers often have their own default margins. These
            defaults can make sites look different in different browsers. By setting margin to 0, we
            get a clean start. The <code>height: 100%;</code> helps if we want a background to cover
            the whole screen. It also stops some scrollbars that we do not want.
          </li>
          <li>
            <strong>
              <code>.global-container</code> Flex Layout:
            </strong>{' '}
            We often use a class named <code>.global-container</code> for the main part of the page.
            We style it with <code>display: flex; flex-direction: column; min-height: 100vh;</code>.
            Flexbox (<code>display: flex</code>) is a CSS tool to arrange items.{' '}
            <code>flex-direction: column;</code> stacks items on top of each other.{' '}
            <code>min-height: 100vh;</code> means it will be at least as tall as the screen (vh
            stands for viewport height). This is useful to make sure the footer (the bottom part of
            the page) stays at the bottom, even if there is not much content.
          </li>
          <li>
            <strong>Main Content Offset for Fixed Navigation:</strong> The navigation bar at the top
            is fixed. This means it stays visible when you scroll. It has a height of{' '}
            <code>64px</code>. So, the main content below it needs some space at the top, called
            padding. Otherwise, the navbar would cover the content. We use{' '}
            <code>padding-top: calc(64px + 1rem);</code>. The <code>1rem</code> (16px) is extra
            space. This 16px is a common spacing unit and fits our 4px grid system (a system where
            many sizes are multiples of 4px).
          </li>
          <li>
            <strong>Rhythmic Spacing (Margins, Gaps, Line-Height):</strong> We want the spaces
            between things to be consistent. This creates a visual rhythm. So, for margins (space
            outside elements), padding (space inside elements), gaps (space between grid or flex
            items), and often line-height (space between lines of text), we use a scale of values.
            These values come from our base size (<code>1rem</code>). They are usually multiples of
            4px (like 4px, 8px, 12px, 16px, 24px, 32px, 40px, 64px). This system makes proportions
            look good. It also helps things line up on a grid, making the layout clean.
          </li>
        </ul>
      </section>

      {/* ---------- Navigation Bar ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Navigation Bar</h2>
        <p>
          The navigation bar (navbar) is important. It helps users find their way on the site. It
          stays at the top of the screen when you scroll, so it is always there. Its height is 64px.
          This is a key size in our design system. It also uses our main theme colors.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              <code>.navbar</code> Positioning & Sizing:
            </strong>{' '}
            We use <code>position: fixed; inset: 0 0 auto 0;</code>. This CSS makes the navbar stick
            to the top of the screen. The <code>height</code> is <code>64px</code>. This size is a
            key value in our design (it is 4 times our base unit of 16px). The{' '}
            <code>z-index: 100;</code> makes sure the navbar is on top of other things on the page.
            So, it does not get hidden.
          </li>
          <li>
            <strong>Background & Shadow:</strong> The navbar&apos;s background color is{' '}
            <code>var(--secondary)</code>. This is one of our main theme accent colors. This makes
            it stand out. It also has a small shadow (
            <code>box-shadow: 0 2px 6px rgba(0 0 0 /.25);</code>). This makes it look a bit lifted
            from the page.
          </li>
          <li>
            <strong>
              <code>.inner</code> Container:
            </strong>{' '}
            Inside the navbar, there is an <code>.inner</code> div. It has{' '}
            <code>max-width: 960px;</code>. This means on wide screens, the content inside the
            navbar (like logo and links) will not be too wide. It will stay in the center. It also
            has <code>padding: 0 0.75rem;</code>. This 0.75rem (12px) gives space on the sides and
            fits our 4px grid system.
          </li>
          <li>
            <strong>
              <code>.brand</code> Styling:
            </strong>{' '}
            The site logo or name (<code>.brand</code>) is styled to be important. It uses{' '}
            <code>font-weight: 700;</code> (this makes it bold) and <code>font-size: 1.2rem;</code>{' '}
            (this is 1.2 times our base font size, so 19.2px). The{' '}
            <code>letter-spacing: 0.02em;</code> adds a small space between letters. This can make
            it easier to read. It has a 2px border and 0.5rem (8px) rounded corners, like our
            buttons. This makes it feel like something you can click.
          </li>
          <li>
            <strong>
              <code>.links</code> Spacing:
            </strong>{' '}
            The navigation links inside <code>.links</code> are arranged using flexbox. The space
            between them is <code>gap: 1.25rem;</code> (20px). This 20px is chosen from our spacing
            scale to give good space between links and fits our 4px grid. The text for links has{' '}
            <code>font-weight: 500;</code>. This is less bold than the brand, so they look
            different.
          </li>
          <li>
            <strong>
              <code>.links a</code> Interaction:
            </strong>{' '}
            Each link has <code>padding-block:.25rem;</code> (4px of padding on top and bottom).
            This makes the clickable area bigger. This is good for touch screens. When you move your
            mouse over a link, the color changes. This change takes 0.2 seconds. The hover color is{' '}
            <code>var(--tertiary)</code>, another theme accent color.
          </li>
          <li>
            <strong>
              <code>.links a::after</code> Underline Animation:
            </strong>{' '}
            We use an animated underline for links. The <code>::after</code> is a CSS way to add
            something after the link text. This &quot;something&quot; is an underline. It starts at
            0% width and grows to 100% width in 0.25 seconds when you move your mouse over it. This
            shows which link you are pointing at. It also helps meet accessibility rules for links
            (rules to make websites usable by everyone).
          </li>
          <li>
            <strong>Responsive Adjustments:</strong> On small screens (less than <code>640px</code>{' '}
            wide, like on many phones), the space between links (<code>.links</code> gap) gets
            smaller to <code>0.85rem</code> (about 14px). This size is chosen from our responsive
            spacing scale to fit better. The font size also gets a bit smaller, to{' '}
            <code>0.92rem</code>. This is so the links do not look too crowded on small screens. We
            also show a &quot;hamburger&quot; icon (three lines) to open or close the menu on small
            screens.
          </li>
          <li>
            <strong>
              <code>.themeSelector</code> Styling:
            </strong>{' '}
            The dropdown menu to choose a theme (<code>.themeSelector</code>) also uses flexbox with
            a small space (<code>gap:.5rem;</code> or 8px) between the label and the dropdown. The
            dropdown (<code>select</code> element) has some padding (<code>.25rem</code>) and
            rounded corners (<code>.25rem</code>) to look like other elements. Its background (
            <code>var(--background)</code>) and text color (<code>var(--primary)</code>) change with
            the theme. This way, it always looks correct and is easy to read.
          </li>
        </ul>
      </section>

      {/* ---------- CSS Variables (Themes) ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>CSS Variables (Themes)</h2>
        <p>
          Our themes use CSS Custom Properties, also called CSS Variables. They are like nicknames
          for style values, especially colors. We define a set of these nicknames (like{' '}
          <code>--background</code> for the page background color, or <code>--primary</code> for
          main text color). Then, for each of our six themes (light, dark, forest, sunset,
          cyberpunk, pastel), we give these nicknames different actual color values. This makes it
          easy to change the whole look of the site. We just change which set of variable
          definitions is active. This is how the theme switcher in the navbar works. This is a key
          part of the project.
        </p>
        <pre className={styles.code}>{`
/* This is an example for the 'light' theme. Other themes change the #hex values. */
:root.light {
  --background               : #ffffff; /* Page background - pure white for light theme */
  --primary                  : #171717; /* Main text color - almost black for readability */
  --secondary                : #ff69b4; /* Accent color 1 - a bright pink */
  --tertiary                 : #6b5b95; /* Accent color 2 - a muted purple, for hovers or secondary elements */
  --accent-hover             : #ff85c4; /* A lighter pink for when you hover over something with --secondary color */
  --accent-active            : #ff47a3; /* A more intense pink for when something with --secondary is clicked */
  --code-bg                  : #f0f0f0; /* Background for code examples, like this one */
  --code-text                : #333333; /* Text color for code examples */
  --border-color             : #e0e0e0; /* For subtle lines or borders between sections */
  --font-family              : "Helvetica Neue", Helvetica, Arial, sans-serif; /* Main font for text */
  --font-family-monospace    : "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; /* Font for code */
}

/* For the 'dark' theme, it would be something like this: */
/*
:root.dark {
  --background               : #121212; /* Very dark grey */
  --primary                  : #e0e0e0; /* Light grey for text */
  --secondary                : #bb86fc; /* A bright purple for dark mode */
  --tertiary                 : #3700b3; /* A deeper purple */
  /* ... and so on for all variables ... */
}
*/
`}</pre>
        <p>
          When we picked the actual colors for each theme, we thought about how they work together.
          We used tools that help with color choices and type scales (like{' '}
          <span className={styles.externalLink}>
          <a 
            href="https://typescale.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Type Scale
          </a>{' '}
          or the{' '}
          <a
            href="https://m2.material.io/design/color/the-color-system.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material Design color tool
          </a>
          ). This was to make sure that text is always easy to read. This is important for people
          who have difficulty seeing some colors. The fonts
          we picked are easy to read on many different screens.
        </span>
        </p>
      </section>

      {/* ---------- About Us Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>About Us Page Styling</h2>
        <p>
          The &apos;About Us&apos; page shows information about the people who made the project. It
          uses cards for each person. The cards lift up a bit when you move your mouse over them. We
          wanted it to look clean.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              <code>.container</code> Padding:
            </strong>{' '}
            The main area of the About Us page has <code>padding-top: 50px;</code>. This 50px space
            is a choice from our spacing scale. It gives enough room and makes sure the content does
            not start too close to the navigation bar.
          </li>
          <li>
            <strong>
              <code>.aboutCardContainer</code> Gap:
            </strong>{' '}
            The container that holds all the person-cards has a <code>gap: 1rem;</code> (16px). 16px
            is our base spacing unit, and it fits our 4px grid. This ensures the cards have an even
            space between them. So it does not look too crowded or too empty.
          </li>
          <li>
            <strong>
              <code>.card</code> Visuals:
            </strong>{' '}
            The cards have rounded corners (<code>border-radius: 0.5rem;</code> which is 8px). They
            also have a shadow made of two layers. This makes them look a bit lifted from the page,
            but not too much.
          </li>
          <li>
            <strong>Card Hover States:</strong> When you move your mouse over a card, it lifts up by{' '}
            <code>4px</code> (using <code>transform: translateY(-4px);</code>). This 4px lift is a
            small step from our spacing scale. It gives clear visual feedback. The change happens
            smoothly (<code>transition: 0.3s ease-out;</code>).
          </li>
          <li>
            <strong>
              <code>.imageWrapper</code> Styling:
            </strong>{' '}
            The pictures of people are usually in a circle shape, <code>160px</code> wide. There is
            a <code>4px</code> border around the circle. When you move your mouse over the card,
            this border might change color (for example, to <code>var(--secondary)</code>). This
            gives more feedback.
          </li>
        </ul>
      </section>

      {/* ---------- Documentation Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Documentation Page Styling (This Page)</h2>
        <p>
          The styles for this page you are reading now are made to be clear and easy to read. It is
          important that technical information is shown well.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              <code>.container</code> Width:
            </strong>{' '}
            The main content area has a <code>max-width: 70%;</code>. We picked this width
            because it makes lines of text not too long. If lines are too long, it is hard to read.
            Good line length is usually 60 to 75 characters.
          </li>
          <li>
            <strong>
              <code>.sectionTitle</code> Styling:
            </strong>{' '}
            The titles for each section (like the one above) have a <code>font-size: 1.5rem;</code>{' '}
            (24px, usually 1.5 times our base 1rem font size). This fits our 4px grid for visual
            consistency. There is a <code>2px</code> line under the title (
            <code>border-bottom</code>). This line is made with the main text color but only 8%
            visible (<code>rgba(var(--primary-rgb-components), 0.08)</code>). So, it is very light
            and just helps to separate the title from the text.
          </li>
          <li>
            <strong>
              <code>.list</code> Padding:
            </strong>{' '}
            For lists like this one, there is <code>padding-left: 1.2rem;</code> (about 19px). This
            moves the bullet points or numbers in a bit. We picked this value so they line up well
            with our spacing system and create a clear visual structure for list content.
          </li>
          <li>
            <strong>Inline Code & Code Blocks:</strong> When we write code in the text, like{' '}
            <code>&lt;code&gt;</code>, it has a light background (<code>var(--code-bg)</code>) and a
            little padding (<code>0.2rem 0.4rem;</code>). For bigger blocks of code (like in{' '}
            <code>&lt;pre&gt;</code> tags), there is more padding, usually <code>1rem</code>. This
            gives the code space. Both use a special font for code (
            <code>var(--font-family-monospace)</code>).
          </li>
          <li>
            <strong>Mobile Responsiveness:</strong> On small screens (like phones, around{' '}
            <code>640px</code> wide), the section titles might get a bit smaller (e.g., to{' '}
            <code>1.35rem</code>). This size is chosen from our typographic scale to keep
            readability on smaller screens. The page might also get extra padding on the sides (
            <code>1rem</code>). This is so the text is not right against the edge of the screen.
            This makes it easier to read and use with your thumb.
          </li>
        </ul>
      </section>

            {/* ---------- Museum: Team Viewer Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Room Page Layout & Styling</h2>
        <p>
          The &apos;Museum: Room Page&apos; presents a curated exhibit of players based 
          on a specific narrative (e.g., a team, a position, or a debut decade). 
          Instead of a simple wrapping grid, it uses a fixed <strong>3x4 grid</strong> to simulate a 
          virtual room with a deliberate layout. This structure includes an entrance, an exit, and 
          empty spaces to guide the user through the exhibit in a structured way.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              <code>.room</code> & <code>.cell</code> Grid Layout:
            </strong>{' '}
            The core layout uses <code>display: grid;</code> with <code>grid-template-columns: 
              repeat(4, 1fr);</code> to create a strict 4-column structure. Each item occupies 
              a <code>.cell</code>, which ensures a consistent spatial arrangement. This is fundamentally 
              different from a flexbox layout, as the grid&apos;s structure is rigid, with some cells 
              intentionally left empty or designated as entrances/exits. This creates a more immersive, 
              room-like experience.
          </li>
          <li>
            <strong>
              Player Placement & The Distance Function:
            </strong>{' '}
            Player placement within the room is not random. To create a logical flow, players are sorted 
            into the available cells using a specific algorithm. This algorithm calculates a &quot;distance&quot; 
            for each cell, defined as the sum of its distance to the entrance and its distance to the exit. 
            Cells with a shorter combined distance are populated first, creating a primary &quot;path&quot; of players 
            between the entrance and exit, ensuring a natural and guided viewing order for visitors.
          </li>
          <li>
            <strong>
              <code>SmallPlayerCard</code> Component & Design Choices:
            </strong>{' '}
            Each player is rendered using a dedicated <code>SmallPlayerCard</code> component. This component is 
            designed to be responsive within its grid cell by using <code>max-width: 100%</code> and a modern CSS 
            property, <code>aspect-ratio: 4 / 5;</code>. This maintains a consistent card shape regardless of screen size. 
            Internally, the card uses flexbox to divide its space, allocating 65% for the player image and 35% for the 
            name, ensuring a balanced and clean look.
          </li>
          <li>
            <strong>
              Card Hover Effects & Interactivity:
            </strong>{' '}
            To provide clear interactive feedback, the <code>SmallPlayerCard</code> lifts up slightly when hovered 
            over (<code>transform: translateY(-5px);</code>) and gains a subtle shadow. Simultaneously, the 
            player&apos;s image zooms in smoothly (<code>transform: scale(1.05);</code>). These effects make the 
            exhibit feel dynamic and clearly indicate which player the user is about to select for more details.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Player Detail Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Player Detail Page Styling</h2>
        <p>
          The &apos;Player Detail Page&apos; shows all information about one player. Its 
          layout is a primary example of responsive design, using a two-column flexbox container 
          for larger screens that gracefully stacks into a single column for mobile devices. 
          Interactive elements like buttons and navigation controls share a consistent &quot;pill&quot; 
          shape, and data tables are styled for clarity without being visually heavy.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              Responsive <code>.playerHeader</code> Layout:
            </strong>{' '}
            The main header uses <code>display: flex;</code> to place the <code>.playerImage</code> 
            and <code>.playerBasicInfo</code> side-by-side. The image has a fixed basis (<code>flex: 0 0 280px</code>) 
            while the info block is flexible (<code>flex: 1 1 280px</code>). At the <code>720px</code> breakpoint, 
            a media query changes the header to <code>flex-direction: column;</code>, stacking the elements vertically 
            for a mobile-friendly view.
          </li>
          <li>
            <strong>
              Pill Buttons in <code>.buttonGroup</code> & <code>.pager</code>:
            </strong>{' '}
            Buttons for user controls, such as those in the <code>.buttonGroup</code> for text complexity and the 
            next/previous <code>.pager</code> links, share a consistent &quot;pill&quot; shape. This is achieved with 
            <code>border-radius: 100vmax;</code>, a robust value that ensures perfectly rounded ends regardless of the 
            button&apos;s size. This distinct shape separates them from content blocks and clearly signals them as 
            interactive elements.
          </li>
          <li>
            <strong>
              <code>.statsTable</code> Styling:
            </strong>{' '}
            The career statistics table is designed for readability. Table headers (<code>&lt;th&gt;</code>) have a 
            solid background color (<code>background: var(--secondary);</code>) to stand out. The lines separating 
            each data row (<code>&lt;td&gt;</code>) are subtle, using <code>border-bottom: 1px solid 
              rgba(255 255 255 / 0.06);</code>. This very low-opacity border (6% visible white, assuming a dark theme) 
              cleanly separates data without adding visual clutter.
          </li>
          <li>
            <strong>
              <code>.externalLink</code> Styling:
            </strong>{' '}
            The final link to an external resource like Wikipedia is centered using <code>text-align: center;</code>. 
            The link itself has no default underline, but on hover, the text color changes and an underline appears 
            (<code>text-decoration: underline;</code>). The <code>transition: color 0.25s;</code> provides a smooth 
            feedback mechanism, making it clear the element is a clickable link.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Root Index Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Index Page Styling</h2>
        <p>
          The &apos;Museum: Index Page&apos; serves as the main entrance, presenting a dynamic map of 
          the museum&apos;s exhibits. The content of the map changes based on the selected &quot;narrative&quot; 
          (Teams, Position, or Debut Decade). The layout uses a spacious 2x2 grid where each panel acts as a gateway 
          to a different room, complete with visual &quot;doors&quot; to guide the user.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              Grid Layout (<code>.grid</code>):
            </strong>{' '}
            The page is built on a 2x2 grid using <code>display: grid;</code> with <code>grid-template-columns: 
              1fr 1fr;</code>. This creates four distinct quadrants for the room panels. A large gap between items 
              (<code>gap: 5vw;</code>) gives each panel significant breathing room, reinforcing the feeling of a grand, 
              open map.
          </li>
          <li>
            <strong>
              Room Panel Styling (<code>.box</code>):
            </strong>{' '}
            Each clickable room panel is a <code>&lt;Link&gt;</code> styled with the <code>.box</code> class. They 
            have a fixed height of <code>250px</code> and a distinct <code>3px</code> border, giving them a solid, 
            architectural feel. On hover, the background color changes, and if the panel contains an image, the image 
            zooms in (<code>transform: scale(1.1);</code>) to provide clear, interactive feedback.
          </li>
          <li>
            <strong>
              The Doorways (<code>.doorTop</code>, etc.):
            </strong>{' '}
            A unique feature of this page is the visual &quot;doors&quot; on each room panel. These are not images but 
            <code>&lt;span&gt;</code> elements dynamically added to the sides of a <code>.box</code> based on data. 
            Using <code>position: absolute;</code>, classes like <code>.doorTop</code> and <code>.doorLeft</code> place 
            these small elements precisely on the border, creating the illusion of openings that connect the rooms on 
            the map.
          </li>
          <li>
            <strong>
              Dynamic Content & Central Hub (<code>.text</code>, <code>.centerText</code>):
            </strong>{' '}
            The content inside each panel is dynamic. For the &quot;teams&quot; narrative, it displays a team logo image. 
            For other narratives, it uses a <code>.text</code> block to show the category name (e.g., &quot;Midfielder&quot;). 
            Separately, a single &quot;Entrance/Exit&quot; label with the <code>.centerText</code> class is placed in the 
            absolute middle of the entire grid using the <code>position: absolute;</code> and <code>transform: 
              translate(-50%, -50%);</code> technique, serving as a central point of reference on the map.
          </li>
        </ul>
      </section>

      {/* ---------- Home Hero ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Home Hero Styling</h2>
        <p>
          The Home Hero is the full-viewport introduction to the website, designed to be visually striking. 
          By default, its background is a subtle <code>radial-gradient</code>, but it dynamically switches to a 
          theme-specific background image when a club theme is active. The layout uses a responsive two-column 
          grid that elegantly stacks on mobile devices. Typography is fluid, and interactive elements are clearly defined.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Headline Typography:</strong> The main title uses the CSS <code>clamp()</code> function to ensure 
            it scales gracefully across devices. The rule <code>font-size: clamp(2rem, 5vw, 3rem);</code> sets a minimum 
            size of <code>2rem</code>, a maximum of <code>3rem</code>, and a flexible size of <code>5vw</code> in between, 
            preventing the text from ever being too large or too small for the screen.
          </li>
          <li>
            <strong>Subhead Typography:</strong> The descriptive paragraph below the headline is set to a fixed 
            <code>1.125rem</code> (18px). This creates a clear visual hierarchy and ensures the supporting text is 
            perfectly readable, complementing the larger headline without competing with it.
          </li>
          <li>
            <strong>
              CTA Button Styling (<code>.primary</code> & <code>.secondary</code>):
            </strong>{' '}
            The Call to Action buttons use a consistent design language. They have generous padding 
            (<code>0.75rem 1.25rem</code>) and a moderate <code>border-radius: 8px;</code>, making them distinct 
            from other elements but not fully &quot;pill-shaped&quot;. On hover, they lift slightly with <code>transform: 
              translateY(-2px);</code> to provide clear interactive feedback.
          </li>
          <li>
            <strong>Decorative &quot;Ball&quot; Element:</strong> The football image uses the <code>.ball</code> class, 
            which applies a realistic shadow with <code>filter: drop-shadow(...)</code>. Unlike <code>box-shadow</code>, 
            this applies the shadow to the actual shape of the PNG image, ignoring its transparent background and creating 
            a more lifelike floating effect.
          </li>
          <li>
            <strong>Theming & Responsive Layout:</strong> The hero section is theme-aware. When a theme class like 
            <code>.arsenal</code> is active, the gradient background is replaced by a full-screen image with a 
            semi-transparent overlay. On screens smaller than <code>640px</code>, the two-column grid stacks vertically, 
            and the ball image uses <code>order: -1;</code> to cleverly re-position itself above the text for a 
            mobile-first presentation.
          </li>
        </ul>
      </section>

      {/* ---------- Content Organization and Narratives ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Content Organization and Narratives</h2>
        <p>
          The content architecture is a cornerstone of this project, designed to guide visitors through a curated 
          experience rather than allowing unstructured browsing. This is achieved by presenting a finite set of items 
          (football players) through the lens of selectable &quot;narratives&quot;, a core requirement of the project 
          specifications.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Item Presentation (20 Football Legends):</strong>
            The project showcases 20 distinct football players, with each player entity treated as a museum item. 
            The presentation of each item consistently includes:
            <ul>
              <li>
                <strong>Images:</strong> Each player has a primary image, utilized in the <code>SmallPlayerCard</code> 
                component (on the Room Page) and displayed more prominently in the <code>PlayerPage</code> (the player 
                detail view).
              </li>
              <li>
                <strong>QR Codes:</strong> The <code>PlayerPage</code> features a scannable QR code that links to the 
                player&apos;s external Wikipedia page, fulfilling a specific project requirement for interactive, 
                external content linking.
              </li>
              <li>
                <strong>Metadata:</strong> Structured data for each player—such as nation, position, born/debut dates, 
                and club statistics—is stored centrally in the <code>players.json</code> file. This file acts as the 
                single source of truth, providing the &quot;appropriate metadata&quot; that populates all components.
              </li>
            </ul>
            This content is explored via the <code>MuseumIndexPage</code> (the &apos;map&apos;) which leads into 
            dynamically generated <code>RoomPage</code> instances.
          </li>
          <li>
            <strong>Narrative Implementation and Purpose:</strong>
            A &apos;narrative&apos; is a state variable, managed via a dropdown on the <code>MuseumIndexPage</code> 
            and passed through the URL structure (<code>/museum/[narrative]/[room]</code>). This state dictates the 
            entire user journey through the museum.
            <ul>
              <li>
                <strong>Available Narratives:</strong>
                <ul>
                  <li>
                    <strong>Teams:</strong> Groups players by the major club they are associated with, catering to 
                    fan-based exploration.
                  </li>
                  <li>
                    <strong>Position:</strong> Organizes players by their on-field role (e.g., Midfielder), offering a 
                    tactical perspective.
                  </li>
                  <li>
                    <strong>Debut Decade:</strong> Presents a historical view by grouping players based on the 10-year 
                    period of their professional debut, fulfilling a required narrative type.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Guiding the Visitor Experience:</strong> The selected narrative directly controls:
                <ul>
                  <li>
                    The data displayed, determined by the <code>getFilteredPlayers()</code> function which selects a 
                    subset of players from <code>players.json</code>.
                  </li>
                  <li>The selectable rooms rendered on the <code>MuseumIndexPage</code>.</li>
                  <li>
                    The scope of the next/previous pager on the <code>PlayerPage</code>, which cycles through the 
                    context-aware list of filtered players.
                  </li>
                  <li>
                    The dynamic titles and subtitles on the <code>RoomPage</code>, which change to reflect the current 
                    narrative.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Adaptive Descriptive Texts:</strong>
            The <code>PlayerPage</code> implements adaptive content as per the project specifications. It provides user 
            controls to modify the displayed text along two independent axes:
            <ul>
              <li>
                <strong>
                  Text Complexity (<code>textLevel</code>):
                </strong>{' '}
                Users can select &apos;easy&apos;, &apos;medium&apos;, or &apos;advanced&apos; language.
              </li>
              <li>
                <strong>
                  Text Length (<code>textLength</code>):
                </strong>{' '}
                Users can select &apos;short&apos; or &apos;extended&apos; versions of the description.
              </li>
            </ul>
            The <code>getDescription()</code> function dynamically constructs a key (e.g., 
            <code>short_easy_description</code>) based on the <code>textLevel</code> and <code>textLength</code> 
            state variables to retrieve the correct text from <code>players.json</code>. This directly fulfills 
            the requirement for &quot;3-9 texts for each item&quot; and caters to different user personas (e.g., Alice, 
            Bruno, and Carla) by providing the &quot;buttons as necessary to pass from one type of text to the other.&quot;
          </li>
        </ul>
      </section>

      {/* ---------- Addressing Qualitative Requirements (ABCD & RSTU) ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Addressing Qualitative Requirements</h2>
        <p>
          This project was built to follow specific quality rules from the project description. These are the 
          &quot;ABCD&quot; properties for the website&apos;s look and feel, and the &quot;RSTU&quot; properties for 
          the data about the players (the metadata).
        </p>
        <ul className={styles.list}>
          <li>
            <strong>ABCD Properties of the Display:</strong> These are about how the website looks and works.
            <ul>
              <li>
                <strong>Automatic:</strong> This means things happen on their own when you interact with the page. For 
                example, when you select a theme, the whole site&apos;s color scheme changes instantly. Likewise, 
                choosing a different text complexity on the <code>PlayerPage</code> immediately updates the description 
                without a page reload.
              </li>
              <li>
                <strong>Believable:</strong> This means the website feels like a real, thought-out place. The museum
                 pages are designed to look like a map with rooms and doors. The titles and player groups always match 
                 the story (or &apos;narrative&apos;) you choose, making it feel like a real guided tour. We also used 
                 consistent design rules for spacing and text sizes to make everything look professional.
              </li>
              <li>
                <strong>Complete:</strong> This means the entire site is fully styled and works as expected. Every part of the 
                page, from big layouts to small buttons and tables, has a finished look. The design also works well on different 
                screen sizes (it&apos;s responsive) and handles all the player data correctly.
              </li>
              <li>
                <strong>Deliberate:</strong> This means every design choice was made for a specific reason. The width of the 
                text is set to make it easy to read. The `drop-shadow` filter is used on the football image because it creates 
                a more realistic shadow than a normal box-shadow would. Core features like the narrative selector and adaptive 
                text controls were built specifically to meet the project&apos;s requirements.
              </li>
            </ul>
          </li>
          <li>
            <strong>RSTU Properties of the Metadata:</strong> This is about the data in the <code>players.json</code> file.
            <ul>
              <li>
                <strong>Rich:</strong> The data for each player has a lot of detail, including their stats, nationality, pictures, 
                multiple descriptive texts for different audiences, and links to external info.
              </li>
              <li>
                <strong>Systematic:</strong> The data is organized in a consistent way. Every player has the same type of 
                information, and the different descriptions follow a clear naming pattern (like 
                <code>short_easy_description</code>). This makes it easy for the code to use the data.
              </li>
              <li>
                <strong>Tailored:</strong> While the overall structure is the same, the data is tailored to each player. 
                For example, a player&apos;s `teams` list can have one club or many, and the site handles both.
              </li>
              <li>
                <strong>Uniform:</strong> All 20 players use the same basic data structure. Because of this, our components 
                can reliably show their information. For example, a <code>SmallPlayerCard</code> knows it will always find a 
                <code>player.name</code> and <code>player.image_url</code>, which makes the code simpler and less likely to break.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ---------- Our Use of AI in Development ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Our Use of AI in Development</h2>
        <p>
          In this project, we used Artificial Intelligence (AI) in some areas. This helped us with
          our work, making content, and solving some problems. This let us focus on the main project
          tasks. Here is how we used AI:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>
              Initial Data Generation (<code>players.json</code>):
            </strong>{' '}
            To get data for our museum quickly, we used AI. We asked AI to make an first{' '}
            <code>players.json</code> file. We told AI to create 20 football players. We asked for
            things like position, country, game numbers, and different texts (short/long,
            easy/hard). This saved time. Making this data by hand was not a main part of the
            project, but we needed it to show how the website works.
          </li>
          <li>
            <strong>Assistance with Complex Functions:</strong> AI helped us think about solutions
            for some hard problems in coding. For example, we used AI to help plan functions for
            placing players in a virtual room. This included thinking about Euclidean distance (a
            way to measure straight-line distance between two points) to put players far from doors.
          </li>
          <li>
            <strong>Theme and Color Scheme Generation:</strong> AI helped us create the six
            different looks (themes like Light, Dark, Forest) and their colors. We used AI tools to
            try different color sets. This helped us find colors that look good together and are
            easy to see (this is part of accessibility). The team-themes were hand-made. 
            This made the design process faster.
          </li>
          <li>
            <strong>General Troubleshooting and Debugging:</strong> AI was a help when we had
            problems with code. It gave ideas for fixing errors and explained why some code might
            not work. Debugging means finding and fixing errors in code.
          </li>
          <li>
            <strong>GitHub Copilot Integration:</strong> We used GitHub Copilot during development.
            GitHub Copilot is an AI tool that helps write code. It gave code ideas, finished code we
            started, and helped write small helper functions. This made development faster.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          By using these AI tools, we wanted to make repetitive tasks easier. We also wanted to
          solve problems faster. This way, we could spend more time making the main user experience
          good and finishing the important MMMM project goals.
        </p>
      </section>

      <div className={styles.centeredButton}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}
