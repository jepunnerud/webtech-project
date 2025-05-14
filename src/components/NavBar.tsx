"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { useTheme } from "../stores/theme-context";

export default function NavBar() {
  const { theme, changeTheme } = useTheme(); // No need for undefined handling

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value);
  };

  const themes = ["dark", "light", "forest", "cyberpunk", "sunset", "pastel"];

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Museum of Football
        </Link>

        <nav className={styles.links}>
          <Link href="/museum">Museum</Link>
          <Link href="/documentation">Documentation</Link>
          <Link href="/about-us">About&nbsp;Us</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </nav>

        <div className={styles.themeSelector}>
          <label htmlFor="theme-select">Theme:</label>
          <select id="theme-select" value={theme} onChange={handleThemeChange}>
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
