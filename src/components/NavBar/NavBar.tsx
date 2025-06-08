'use client'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { useTheme } from '../../stores/theme-context'
import { useRef, useState } from 'react'

export default function NavBar() {
  const { theme, changeTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value)
  }
  const menuRef = useRef<HTMLDivElement | null>(null)
  const themes = [
    'dark',
    'light',
    'forest',
    'cyberpunk',
    'sunset',
    'pastel',
    'arsenal',
    'chelsea',
    'liverpool',
    'manUtd',
  ]
  const navLinks: Array<{ href: string; label: string }> = [
    { href: '/museum', label: 'Museum' },
    { href: '/documentation', label: 'Documentation' },
    { href: '/about-us', label: 'About Us' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ]
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setIsOpen(false)}>
          Museum of Football
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.show : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >{`\u2261`}</button>

        <div className={`${styles.menu} ${isOpen ? styles.show : ''}`} ref={menuRef}>
          <nav className={styles.links}>
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
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
      </div>
    </header>
  )
}
