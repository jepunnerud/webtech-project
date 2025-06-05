import styles from './page.module.css'
import StandardButton from '@/components/StandardButton'

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
          This page shows how we use color, spacing, careful design, and AI in our work. This helps us make all parts of the website easy and good to use.
        </p>
      </header>

      {/* ---------- Design Philosophy ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Design Philosophy</h2>
        <p>Our styling is not random. It follows clear rules. These rules come from the project description. The rules make sure that everything you see has a purpose. This makes the website connected, easy to understand, and look good. Our main ideas are: &apos;deliberate design&apos; (we choose things for a reason), &apos;multimedia narratives&apos; (we use different media like text and pictures to tell stories), and using a clear system for spacing and sizes to make things look balanced. A famous architect, Le Corbusier, once said that good planning is the start of good design. We agree with this idea.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Consistent Spacing System:</strong> We use a set system for all spacing. This system helps us decide how much space to put around elements (this is called margins and padding). It also helps with the shape of pictures and boxes (this is called aspect ratios) and how big text should be. When we use a system, things look balanced. For example, if a small space is 8 pixels, the next bigger space might be 12 or 16 pixels. This follows a scale based on our starting unit (often 4px, or 1rem which is usually 16 pixels). This is a main part of our design system.
          </li>
          <li>
            <strong>Modular Scale & Typographic Hierarchy:</strong> This is a system for sizes of text and space. We start with a base font size, which is <code>1rem</code> (usually 16 pixels). Then, we find other sizes, like for headings or spaces, by multiplying or dividing this <code>1rem</code> by numbers from our chosen scale (for example, 1.25, 1.5, 2.0). So, a heading might be 1.5rem, and smaller text might be 0.8rem. These numbers are chosen to make text easy to read and show what is most important. This makes all sizes related and look good together. It helps make the design consistent.
          </li>
          <li>
            <strong>Multimedia & Narratives:</strong> The website shows different kinds of information, like text, pictures, and maybe videos. The design should change to fit what the user wants. We have different &apos;themes&apos; (these are different looks for the site). We also have ways to see information called &apos;metadata views&apos; (metadata is data about data, like information about a picture). And we have different styles of text. These can change based on how much detail the user wants, or what information they look for. For example, some users want short text, others want long text. Our design tries to help with this.
          </li>
          <li>
            <strong>Deliberate Choices & Justification:</strong> We do not choose a style just because &quot;it looked nicer.&quot; Every choice, like a color or a size, has a reason. We write down these reasons. Often, the reason is connected to our main ideas, like our spacing system and type scale, or making the site easy to use for everyone (this is called accessibility). This makes it easier to work on the site later. It also helps everyone on the team understand why things are as they are. This is a very important rule for our project.
          </li>
          <li>
            <strong>Theming:</strong> We have six different looks, or &apos;themes&apos;, for the website: dark, light, forest, sunset, cyberpunk, and pastel. Users can switch between them. These themes are made using CSS Variables. CSS Variables are like placeholders for style values, for example, a color. When you change a theme, these placeholders get new values. Each theme changes colors and maybe some fonts, but they all should be easy to read and use.
          </li>
        </ul>
      </section>

      {/* ---------- Global Styles ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Global Styles</h2>
        <p>
          All basic style rules are in one file called <code>globals.css</code>. This makes sure that all pages look similar. This helps keep things consistent and easier to manage. Every choice here has a reason, as our project guidelines say.
        </p>
        <ul className={styles.list}>
          <li>
            <strong><code>:root</code> Theme Palettes & Font Families:</strong> In CSS, <code>:root</code> is the main part of the HTML document. We define our theme colors and basic fonts here using CSS variables. We have six themes, like light and dark. For each theme, we pick colors so that text is easy to read on the background. This is called contrast. We follow rules called WCAG AA to make sure it is good for people with vision problems. Our main colors for accents, <code>--secondary</code> and <code>--tertiary</code>, are about 20 degrees different in hue (hue is a property of color). This makes them look different but related. This is good for showing when you move your mouse over a button, for example.
          </li>
          <li>
            <strong>CSS Reset (<code>html, body</code>):</strong> We set <code>margin: 0;</code> and <code>height: 100%;</code> for <code>html</code> and <code>body</code> elements. Browsers often have their own default margins. These defaults can make sites look different in different browsers. By setting margin to 0, we get a clean start. The <code>height: 100%;</code> helps if we want a background to cover the whole screen. It also stops some scrollbars that we do not want.
          </li>
          <li>
            <strong>Default Link Styling:</strong> Links (<code>&lt;a&gt;</code> tags) are styled to use the <code>var(--background)</code> color for their text. This means if the page background is light, the link text will be light. This makes links stand out. When you move your mouse over a link, the color changes in 0.25 seconds. This is a <code>transition</code> effect.
          </li>
          <li>
            <strong><code>.global-container</code> Flex Layout:</strong> We often use a class named <code>.global-container</code> for the main part of the page. We style it with <code>display: flex; flex-direction: column; min-height: 100vh;</code>. Flexbox (<code>display: flex</code>) is a CSS tool to arrange items. <code>flex-direction: column;</code> stacks items on top of each other. <code>min-height: 100vh;</code> means it will be at least as tall as the screen (vh stands for viewport height). This is useful to make sure the footer (the bottom part of the page) stays at the bottom, even if there is not much content.
          </li>
          <li>
            <strong>Main Content Offset for Fixed Navigation:</strong> The navigation bar at the top is fixed. This means it stays visible when you scroll. It has a height of <code>64px</code>. So, the main content below it needs some space at the top, called padding. Otherwise, the navbar would cover the content. We use <code>padding-top: calc(64px + 1rem);</code>. The <code>1rem</code> (16px) is extra space. This 16px is a common spacing unit and fits our 4px grid system (a system where many sizes are multiples of 4px).
          </li>
          <li>
            <strong>Rhythmic Spacing (Margins, Gaps, Line-Height):</strong> We want the spaces between things to be consistent. This creates a visual rhythm. So, for margins (space outside elements), padding (space inside elements), gaps (space between grid or flex items), and often line-height (space between lines of text), we use a scale of values. These values come from our base size (<code>1rem</code>). They are usually multiples of 4px (like 4px, 8px, 12px, 16px, 24px, 32px, 40px, 64px). This system makes proportions look good. It also helps things line up on a grid, making the layout clean.
          </li>
        </ul>
      </section>

      {/* ---------- Navigation Bar ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Navigation Bar</h2>
        <p>
          The navigation bar (navbar) is important. It helps users find their way on the site. It stays at the top of the screen when you scroll, so it is always there. Its height is 64px. This is a key size in our design system. It also uses our main theme colors.
        </p>
        <ul className={styles.list}>
          <li>
            <strong><code>.navbar</code> Positioning & Sizing:</strong> We use <code>position: fixed; inset: 0 0 auto 0;</code>. This CSS makes the navbar stick to the top of the screen. The <code>height</code> is <code>64px</code>. This size is a key value in our design (it is 4 times our base unit of 16px). The <code>z-index: 100;</code> makes sure the navbar is on top of other things on the page. So, it does not get hidden.
          </li>
          <li>
            <strong>Background & Shadow:</strong> The navbar&apos;s background color is <code>var(--secondary)</code>. This is one of our main theme accent colors. This makes it stand out. It also has a small shadow (<code>box-shadow: 0 2px 6px rgba(0 0 0 /.25);</code>). This makes it look a bit lifted from the page.
          </li>
          <li>
            <strong><code>.inner</code> Container:</strong> Inside the navbar, there is an <code>.inner</code> div. It has <code>max-width: 960px;</code>. This means on wide screens, the content inside the navbar (like logo and links) will not be too wide. It will stay in the center. It also has <code>padding: 0 0.75rem;</code>. This 0.75rem (12px) gives space on the sides and fits our 4px grid system.
          </li>
          <li>
            <strong><code>.brand</code> Styling:</strong> The site logo or name (<code>.brand</code>) is styled to be important. It uses <code>font-weight: 700;</code> (this makes it bold) and <code>font-size: 1.2rem;</code> (this is 1.2 times our base font size, so 19.2px). The <code>letter-spacing: 0.02em;</code> adds a small space between letters. This can make it easier to read. It has a 2px border and 0.5rem (8px) rounded corners, like our buttons. This makes it feel like something you can click.
          </li>
          <li>
            <strong><code>.links</code> Spacing:</strong> The navigation links inside <code>.links</code> are arranged using flexbox. The space between them is <code>gap: 1.25rem;</code> (20px). This 20px is chosen from our spacing scale to give good space between links and fits our 4px grid. The text for links has <code>font-weight: 500;</code>. This is less bold than the brand, so they look different.
          </li>
          <li>
            <strong><code>.links a</code> Interaction:</strong> Each link has <code>padding-block:.25rem;</code> (4px of padding on top and bottom). This makes the clickable area bigger. This is good for touch screens. When you move your mouse over a link, the color changes. This change takes 0.2 seconds. The hover color is <code>var(--tertiary)</code>, another theme accent color.
          </li>
          <li>
            <strong><code>.links a::after</code> Underline Animation:</strong> We use an animated underline for links. The <code>::after</code> is a CSS way to add something after the link text. This &quot;something&quot; is an underline. It starts at 0% width and grows to 100% width in 0.25 seconds when you move your mouse over it. This shows which link you are pointing at. It also helps meet accessibility rules for links (rules to make websites usable by everyone).
          </li>
          <li>
            <strong>Responsive Adjustments:</strong> On small screens (less than <code>640px</code> wide, like on many phones), the space between links (<code>.links</code> gap) gets smaller to <code>0.85rem</code> (about 14px). This size is chosen from our responsive spacing scale to fit better. The font size also gets a bit smaller, to <code>0.92rem</code>. This is so the links do not look too crowded on small screens. We also show a &quot;hamburger&quot; icon (three lines) to open or close the menu on small screens.
          </li>
          <li>
            <strong><code>.themeSelector</code> Styling:</strong> The dropdown menu to choose a theme (<code>.themeSelector</code>) also uses flexbox with a small space (<code>gap:.5rem;</code> or 8px) between the label and the dropdown. The dropdown (<code>select</code> element) has some padding (<code>.25rem</code>) and rounded corners (<code>.25rem</code>) to look like other elements. Its background (<code>var(--background)</code>) and text color (<code>var(--primary)</code>) change with the theme. This way, it always looks correct and is easy to read.
          </li>
        </ul>
      </section>

      {/* ---------- CSS Variables (Themes) ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>CSS Variables (Themes)</h2>
        <p>
          Our themes use CSS Custom Properties, also called CSS Variables. They are like nicknames for style values, especially colors. We define a set of these nicknames (like <code>--background</code> for the page background color, or <code>--primary</code> for main text color). Then, for each of our six themes (light, dark, forest, sunset, cyberpunk, pastel), we give these nicknames different actual color values. This makes it easy to change the whole look of the site. We just change which set of variable definitions is active. This is how the theme switcher in the navbar works. This is a key part of the project.
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
          When we picked the actual colors for each theme, we thought about how they work together. We used tools that help with color choices and type scales (like <a href="https://typescale.com/" target="_blank" rel="noopener noreferrer">Type Scale</a> or the <a href="https://m2.material.io/design/color/the-color-system.html" target="_blank" rel="noopener noreferrer">Material Design color tool</a>). This was to make sure that text is always easy to read. This is important for people who have difficulty seeing some colors (this is called WCAG AA accessibility). The fonts we picked are easy to read on many different screens. All these choices were made carefully.
        </p>
      </section>

      {/* ---------- About Us Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>About Us Page Styling</h2>
        <p>The &apos;About Us&apos; page shows information about the people who made the project. It uses cards for each person. The cards lift up a bit when you move your mouse over them. We wanted it to look clean.</p>
        <ul className={styles.list}>
          <li>
            <strong><code>.container</code> Padding:</strong> The main area of the About Us page has <code>padding-top: 50px;</code>. This 50px space is a choice from our spacing scale. It gives enough room and makes sure the content does not start too close to the navigation bar.
          </li>
          <li>
            <strong><code>.aboutCardContainer</code> Gap:</strong> The container that holds all the person-cards has a <code>gap: 1rem;</code> (16px). 16px is our base spacing unit, and it fits our 4px grid. This ensures the cards have an even space between them. So it does not look too crowded or too empty.
          </li>
          <li>
            <strong><code>.card</code> Visuals:</strong> The cards have rounded corners (<code>border-radius: 0.5rem;</code> which is 8px). They also have a shadow made of two layers. This makes them look a bit lifted from the page, but not too much.
          </li>
          <li>
            <strong>Card Hover States:</strong> When you move your mouse over a card, it lifts up by <code>4px</code> (using <code>transform: translateY(-4px);</code>). This 4px lift is a small step from our spacing scale. It gives clear visual feedback. The change happens smoothly (<code>transition: 0.3s ease-out;</code>).
          </li>
          <li>
            <strong><code>.imageWrapper</code> Styling:</strong> The pictures of people are usually in a circle shape, <code>160px</code> wide. There is a <code>4px</code> border around the circle. When you move your mouse over the card, this border might change color (for example, to <code>var(--secondary)</code>). This gives more feedback.
          </li>
        </ul>
      </section>

      {/* ---------- Documentation Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Documentation Page Styling (This Page)</h2>
        <p>The styles for this page you are reading now are made to be clear and easy to read. It is important that technical information is shown well.</p>
        <ul className={styles.list}>
          <li>
            <strong><code>.container</code> Width:</strong> The main content area has a <code>max-width: 1000px;</code>. We picked this width because it makes lines of text not too long. If lines are too long, it is hard to read. Good line length is usually 60 to 75 characters.
          </li>
          <li>
            <strong><code>.sectionTitle</code> Styling:</strong> The titles for each section (like the one above) have a <code>font-size: 1.5rem;</code> (24px, usually 1.5 times our base 1rem font size). This fits our 4px grid for visual consistency. There is a <code>2px</code> line under the title (<code>border-bottom</code>). This line is made with the main text color but only 8% visible (<code>rgba(var(--primary-rgb-components), 0.08)</code>). So, it is very light and just helps to separate the title from the text.
          </li>
          <li>
            <strong><code>.list</code> Padding:</strong> For lists like this one, there is <code>padding-left: 1.2rem;</code> (about 19px). This moves the bullet points or numbers in a bit. We picked this value so they line up well with our spacing system and create a clear visual structure for list content.
          </li>
          <li>
            <strong>Inline Code & Code Blocks:</strong> When we write code in the text, like <code>&lt;code&gt;</code>, it has a light background (<code>var(--code-bg)</code>) and a little padding (<code>0.2rem 0.4rem;</code>). For bigger blocks of code (like in <code>&lt;pre&gt;</code> tags), there is more padding, usually <code>1rem</code>. This gives the code space. Both use a special font for code (<code>var(--font-family-monospace)</code>).
          </li>
          <li>
            <strong>Mobile Responsiveness:</strong> On small screens (like phones, around <code>600px</code> wide), the section titles might get a bit smaller (e.g., to <code>1.35rem</code>). This size is chosen from our typographic scale to keep readability on smaller screens. The page might also get extra padding on the sides (<code>1rem</code>). This is so the text is not right against the edge of the screen. This makes it easier to read and use with your thumb.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Team Listing Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Team Page Styling</h2>
        <p>The &apos;Museum: Team Page&apos; shows a list of players from a team, or different items in a category. It usually uses a grid of cards. The style needs to be flexible for different numbers of items and give clear signs for interaction.</p>
        <ul className={styles.list}>
          <li>
            <strong><code>.playersGrid</code> Layout:</strong> This grid uses <code>display: flex; flex-wrap: wrap;</code>. This means if there is not enough space for all cards in one row, they will wrap to the next line. The space between cards is <code>gap: 2rem;</code> (32px). This 32px is a larger value from our spacing scale, which gives the cards good room. Because it wraps, the cards will not overlap on small or very wide screens.
          </li>
          <li>
            <strong><code>.playerCard</code> Dimensions & Accents:</strong> Each card could be <code>300px</code> wide. This size is good for showing a standard picture (maybe 250px wide) and some text next to or below it. Sometimes, we might add a special border, like <code>border-left: 4px solid var(--brand-blue);</code> (or a theme color like <code>var(--accent-feature)</code>). This border can show that a card belongs to a special group or is the main item.
          </li>
          <li>
            <strong>Card Hover Effects (Museum):</strong> When you move your mouse over these cards, they might lift up by <code>5px</code> and get a stronger shadow, like <code>box-shadow: 0 10px 20px rgba(0,0,0,0.2);</code>. This 5px lift and darker shadow are more noticeable than on smaller elements because these cards are larger. This effect uses a clear step from our spacing scale and makes the card feel more interactive.
          </li>
          <li>
            <strong>Image Zoom on Hover:</strong> Pictures inside the cards might zoom in a little bit (e.g., <code>transform: scale(1.05);</code>) when you move your mouse over them. This happens over <code>0.3s</code>. This small zoom makes the picture stand out and adds a dynamic feeling. It goes back to normal smoothly when you move the mouse away.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Player Detail Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Player Detail Page Styling</h2>
        <p>The &apos;Player Detail Page&apos; shows all information about one player or item. On big screens, it often has two columns (like picture on one side, text on the other). On small screens, these columns stack on top of each other. Buttons and stats tables have their own special styles.</p>
        <ul className={styles.list}>
          <li>
            <strong>Responsive Layout:</strong> It uses a two-column layout until the screen is <code>720px</code> wide. This 720px width (called a breakpoint) is chosen to ensure both image and text blocks are easy to read and have good proportions before stacking for smaller screens. Below 720px, the layout changes to one column. This is better for reading on phones.
          </li>
          <li>
            <strong>Pill Buttons in <code>.buttonGroup</code>:</strong> Buttons that are grouped together (in a <code>.buttonGroup</code>) might have very rounded ends. This makes them look like pills. We do this with <code>border-radius: 100vmax;</code> (or a big number like <code>9999px</code>). This makes them look different from square cards or input fields. It clearly shows they are buttons for actions.
          </li>
          <li>
            <strong>Stats Table Styling:</strong> If there is a table with statistics, the lines between rows are very light. For example, <code>1px solid rgba(var(--primary-rgb-components), 0.06);</code>. This is the main text color but only 6% visible. This separates the data clearly but does not make the table look too heavy.
          </li>
          <li>
            <strong><code>.externalLink</code> Styling:</strong> Links to other websites might be centered on the page. When you move your mouse over them, an underline might fade in over <code>0.25s</code>. This small animation makes it clear it is a link and encourages people to click.
          </li>
        </ul>
      </section>

      {/* ---------- Museum: Root Index Page ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Museum: Index Page Styling</h2>
        <p>The &apos;Museum: Index Page&apos; is like the main entrance or map to the museum. It might have big clickable boxes or &apos;doors&apos; that lead to different parts of the museum. The style here should have a lot of space and make it very clear what you can click on.</p>
        <ul className={styles.list}>
          <li>
            <strong>Grid Layout (<code>.grid</code>):</strong> It might use a 2x2 grid (a grid with two rows and two columns). For this, we can use CSS Grid (<code>display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;</code>) or Flexbox. The space between the grid items (the &apos;doors&apos;) could be very big, like <code>80px</code>. This large gap, a big value from our spacing scale, gives each &apos;door&apos; its own space and makes the page feel open.
          </li>
          <li>
            <strong>Box/Panel Styling (<code>.box</code>):</strong> Each clickable box or panel could have a set height, for example <code>250px</code>, so they all look the same size. They might have a <code>3px</code> border. To make them look like a museum frame or a door, we might add small <code>4px</code> gaps or indents using padding or other CSS tricks.
          </li>
          <li>
            <strong>Image Hover Effect (Index):</strong> Pictures inside these boxes might zoom in a bit when you move your mouse over them (like <code>transform: scale(1.1);</code>). This would happen over <code>0.3s</code>. This makes it clear you can click on it and draws you into that part of the museum.
          </li>
          <li>
            <strong>Floating Labels (<code>.text</code>, <code>.centerText</code>):</strong> The names or labels for these boxes might look like they are floating. We do this by positioning them with CSS (<code>position: absolute;</code>). For example, text could be at <code>bottom: 15%; left: 10%;</code> inside the box. Or, if we want text in the exact center, we can use <code>top: 50%; left: 50%; transform: translate(-50%, -50%);</code>. The <code>transform</code> property here helps to perfectly center the element. This helps make the page look more like a map with labels.
          </li>
        </ul>
      </section>

      {/* ---------- Home Hero ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Home Hero Styling</h2>
        <p>
          The Home Hero is the big section you see first on the main page. It should get your attention. It often takes up the whole screen height. The background might be a radial gradient. This is a type of gradient where colors fade out from a center point. This gradient can change with the theme. The text is big, and the sizes are based on our typographic scale. Buttons here are usually styled as &apos;pills&apos; (very rounded).
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Headline Typography:</strong> The main title here uses a flexible font size. We use <code>clamp()</code> in CSS for this. For example, <code>font-size: clamp(2rem, 5vw, 3.5rem);</code>. This means the font size will be at least <code>2rem</code>. It will be at most <code>3.5rem</code>. In between, it will be <code>5vw</code> (5% of the viewport width; viewport is the visible area of the web page). This way, the title looks good on small phone screens and big desktop screens. It does not get too small or too big.
          </li>
          <li>
            <strong>Subhead Typography:</strong> Smaller text under the main title (subheads) are also sized based on our typographic scale. For example, <code>1.125rem</code> (which is 18px). This size is chosen from our typographic scale to create a clear visual step down from the main headline. This ensures a clear hierarchy (order of importance). This makes a clear difference between the main title and the subhead. This helps people quickly understand the information.
          </li>
          <li>
            <strong>CTA Button Styling (<code>.primary</code> & <code>.secondary</code>):</strong> The main buttons (Call To Action buttons, or CTAs) are styled like pills (fully rounded ends). They have consistent padding, for example, <code>padding: 0.75rem 1.25rem;</code>. The padding values are selected from our spacing scale to ensure they are easy to click and look balanced. When you move your mouse over them, they lift up by <code>2px</code> (<code>transform: translateY(-2px);</code>). This shows they are clickable.
          </li>
          <li>
            <strong>Decorative &quot;Ball&quot; Element:</strong> Sometimes we add a small decorative circle or &quot;ball&quot;. This might have a shadow like <code>box-shadow: 0 6px 10px rgba(0,0,0,0.15);</code>. This makes it look like it is floating a bit off the page. This just adds some visual interest. Its size and placement would also follow our spacing and sizing rules for visual harmony.
          </li>
        </ul>
      </section>

      {/* ---------- Content Organization and Narratives ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Content Organization and Narratives</h2>
        <p>
          How we organize content and use stories (&apos;narratives&apos;) is very important for this MMMM project. The idea is not just to let people look around randomly. We want to guide them with a clear story. This is based on the project guidelines.
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Item Presentation (15-20 Items):</strong>
            The project is about showing 15-20 real things (in our case, football players). These items have a common theme (football legends). Each item is shown with:
            <ul>
              <li>
                <strong>Images:</strong> There is a main picture for each player on their card (this is the <code>PlayerCard</code> component) and on their detail page (this is the <code>PlayerDetailPage</code> component). This is a project requirement.
              </li>
              <li>
                <strong>QR Codes:</strong> On the <code>PlayerDetailPage</code>, there is a QR code. A QR code is a type of barcode you can scan with your phone. If you scan this, it can take you to more information. This is also a project requirement.
              </li>
              <li>
                <strong>Metadata:</strong> This is data about the player. For example, their position, country, birthday, and statistics for their teams. You see this on the <code>PlayerCard</code> and more detailed on the <code>PlayerDetailPage</code>. This information comes from a file called <code>players.json</code>. This is the &quot;appropriate metadata&quot; the project asked for.
              </li>
            </ul>
            These items are arranged in a virtual museum. You can explore this museum using the Museum Index Page (this is like a &apos;map&apos;). Then you can go into specific &quot;Room Pages.&quot;
          </li>
          <li>
            <strong>Narrative Implementation and Purpose:</strong>
            The website uses different narratives. Narratives are like different ways to tell a story or organize information. They change how you see the museum. You can see this on the Museum Index Page (file path <code>app/museum/page.tsx</code>) and the Museum Room Page (file path <code>app/museum/[narrative]/[room]/page.tsx</code>).
            <ul>
              <li>
                <strong>Available Narratives:</strong>
                <ul>
                  <li><strong>Teams:</strong> You can explore players based on the football club they played for (like Arsenal or Chelsea). Many fans like to see players this way.</li>
                  <li><strong>Position:</strong> This groups players by the position they played (like Midfielder or Forward). This gives a different view, maybe more about game tactics.</li>
                  <li><strong>Debut Decade:</strong> This groups players by the 10-year period when they started playing professionally (like 1990s or 2000s). This is like a historical timeline. This was a required narrative.</li>
                </ul>
              </li>
              <li>
                <strong>Guiding the Visitor Experience:</strong> The chosen narrative changes many things:
                <ul>
                  <li>Which items are shown (this is the <code>filteredPlayers</code> variable on the RoomPage).</li>
                  <li>Which &quot;rooms&quot; you can choose on the Museum Index Page.</li>
                  <li>How &quot;Next/Previous&quot; buttons work (they would take you to the next player in the current story or group).</li>
                  <li>The titles and introduction texts (the titles on the RoomPage change with the narrative).</li>
                </ul>
                This makes sure the visit follows a clear story, not just random clicks.
              </li>
            </ul>
          </li>
          <li>
            <strong>Adaptive Descriptive Texts:</strong>
            The <code>PlayerDetailPage</code> is a good example of content that changes for the user. It has controls for:
            <ul>
              <li>
                <strong>Text Complexity (<code>textLevel</code>):</strong> You can choose &apos;easy&apos;, &apos;medium&apos;, or &apos;advanced&apos; text.
              </li>
              <li>
                <strong>Text Length (<code>textLength</code>):</strong> You can choose &apos;short&apos; or &apos;extended&apos; text.
              </li>
            </ul>
            A function called <code>getDescription()</code> picks the right text from the <code>players.json</code> file (for example, <code>player.short_easy_description</code>). This is what our project guidelines asked for: &quot;several descriptive texts according to two separate and independent axes: age, competency... and level of detail&quot;. It also meets the rule about having &quot;3-9 texts for each item&quot;. This helps different kinds of users. For example, Alice (a teacher), Bruno (a businessman), and Carla (a student), who all have different needs. The buttons for these controls are the &quot;buttons as necessary to pass from one type of text to the other&quot; from the project specifications.
          </li>
        </ul>
      </section>

      {/* ---------- Addressing Qualitative Requirements (ABCD & RSTU) ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Addressing Qualitative Requirements</h2>
        <p>
          The project was made to follow specific quality rules. These rules come from the project description. They are called &quot;ABCD&quot; properties for how things look and work. And &quot;RSTU&quot; properties for the information about the items (this is the metadata).
        </p>
        <ul className={styles.list}>
          <li>
            <strong>ABCD Properties of the Display:</strong> These are about how the website looks and works.
            <ul>
              <li>
                <strong>Automatic:</strong> This means things happen by themselves, without the user doing much.
                <ul>
                  <li><strong>Theme Switching:</strong> When you pick a theme from the dropdown in the navbar, the whole site changes its look (colors, fonts, etc.) right away. You do not need to do anything else. This happens because all parts use CSS variables that update automatically.</li>
                  <li><strong>Narrative Selection:</strong> When you choose a narrative on the Museum Index Page, the &quot;rooms&quot; (categories) change automatically. Also, on the Player Detail Page, when you pick a different text complexity or length, the description text updates by itself.</li>
                </ul>
              </li>
              <li>
                <strong>Believable:</strong> This means the website feels real and makes sense.
                <ul>
                  <li><strong>Narrative Cohesion:</strong> The Museum Index Page looks like a map with &quot;doors.&quot; The titles and content in the rooms match the story you picked. This makes the experience feel like a real guided tour in a museum.</li>
                  <li><strong>Aesthetic Principles:</strong> We used known design principles. For example, a consistent modular scale for text sizes and a clear spacing system (e.g., based on a 4px grid). The themes (like &quot;Forest&quot; or &quot;Cyberpunk&quot;) are designed to look good and fit the content. All styles are chosen carefully to look professional.</li>
                </ul>
              </li>
              <li>
                <strong>Complete:</strong> This means everything looks finished and works.
                <ul>
                  <li><strong>Comprehensive Styling:</strong> Everything on the page is styled. This includes the main page structure, small buttons, and text. Nothing looks broken or unfinished.</li>
                  <li><strong>Content Handling:</strong> The themes and components are made to work with different kinds of content: short text, long text, pictures, and tables (like the stats table on the Player Detail Page). The design also works on different screen sizes (this is called responsive design).</li>
                </ul>
              </li>
              <li>
                <strong>Deliberate:</strong> This means every choice has a clear reason.
                <ul>
                  <li><strong>Justified Choices:</strong> Every style choice has a reason. For example, the navbar is 64px high for a reason. The space between player cards is 2rem for a reason. The 1000px width for content is to make reading easy. These reasons are based on our design philosophy (our typographic scale, 4px grid spacing system, responsive needs, etc.) or the project rules.</li>
                  <li><strong>Conceptual Grounding:</strong> The whole site structure, like choosing narratives and changing text styles, is based on the MMMM ideas from the project guidelines. For example, the text controls on the Player Detail Page are there because the project requirements asked for different text presentations.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>RSTU Properties of the Metadata:</strong> This is about the data in <code>players.json</code> and how we show it.
            <ul>
              <li>
                <strong>Rich:</strong> This means the data has a lot of detail.
                <ul>
                  <li>The <code>players.json</code> file has a lot of information for each player. For example: ID, name, picture, position, country, birthday, many different descriptions, QR code links, Wikipedia links, and detailed team information (club, games played, goals, debut date). This is rich information about the player and their history.</li>
                </ul>
              </li>
              <li>
                <strong>Systematic:</strong> This means the data is organized in a consistent way.
                <ul>
                  <li>All players in <code>players.json</code> have mostly the same kind of information. Important facts like name, position, picture, and team stats are there for everyone. This makes it easy to show the information in a consistent way, like on the <code>PlayerCard</code> or in the stats table. The different description texts also have systematic names (like <code>length_complexity_description</code>).</li>
                </ul>
              </li>
              <li>
                <strong>Tailored:</strong> This means the data can be specific to each item, even if the structure is similar.
                <ul>
                  <li>Even though the structure is similar, some information can be different for different players. For example, the &quot;goals&quot; field for a team might not be there if the player is a defender and did not score goals. The different description texts are also tailored for different needs. The TypeScript `Player` type (a way to define data structure in code) helps define this tailored structure.</li>
                </ul>
              </li>
              <li>
                <strong>Uniform:</strong> This means all items use the same basic data structure.
                <ul>
                  <li>All players use the same basic data model. This is the structure in <code>players.json</code> and the `Player` type in TypeScript. This uniformity makes it easy to process and show the data. For example, the <code>PlayerCard</code> can always find <code>player.name</code> and <code>player.image_url</code> for any player. When we filter players for a narrative, we use this uniform structure. It also means we can show lists of players (like all players of a certain position) easily.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* ---------- Our Use of AI in Development ---------- */}
      <section>
        <h2 className={styles.sectionTitle}>Our Use of AI in Development</h2>
        <p>
          In this project, we used Artificial Intelligence (AI) in some areas. This helped us with our work, making content, and solving some problems. This let us focus on the main project tasks. Here is how we used AI:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Initial Data Generation (<code>players.json</code>):</strong> To get data for our museum quickly, we used AI. We asked AI to make an first <code>players.json</code> file. We told AI to create 20 football players. We asked for things like position, country, game numbers, and different texts (short/long, easy/hard). This saved time. Making this data by hand was not a main part of the project, but we needed it to show how the website works.
          </li>
          <li>
            <strong>Assistance with Complex Functions:</strong> AI helped us think about solutions for some hard problems in coding. For example, we used AI to help plan functions for placing players in a virtual room. This included thinking about Euclidean distance (a way to measure straight-line distance between two points) to put players far from doors.
          </li>
          <li>
            <strong>Theme and Color Scheme Generation:</strong> AI helped us create the six different looks (themes like Light, Dark, Forest) and their colors. We used AI tools to try different color sets. This helped us find colors that look good together and are easy to see (this is part of accessibility). This made the design process faster.
          </li>
          <li>
            <strong>General Troubleshooting and Debugging:</strong> AI was a help when we had problems with code. It gave ideas for fixing errors and explained why some code might not work. Debugging means finding and fixing errors in code.
          </li>
          <li>
            <strong>GitHub Copilot Integration:</strong> We used GitHub Copilot during development. GitHub Copilot is an AI tool that helps write code. It gave code ideas, finished code we started, and helped write small helper functions. This made development faster.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          By using these AI tools, we wanted to make repetitive tasks easier. We also wanted to solve problems faster. This way, we could spend more time making the main user experience good and finishing the important MMMM project goals.
        </p>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
        <StandardButton label="← Return Home" href="/" />
      </div>
    </div>
  )
}