import Link from 'next/link'
import styles from './StandardButton.module.css'

type StandardButtonProps = {
  variant?: 'primary' | 'secondary'
  label?: string
  onClick?: () => void
  href?: string
  size?: 'small' | 'large'
}

const StandardButton: React.FC<StandardButtonProps> = ({
  variant = 'primary',
  label,
  onClick,
  href,
  size = 'small',
}) => {
  if (href) {
    return (
      <Link className={`${styles[variant]} ${styles[size]}`} href={href}>
        {label}
      </Link>
    )
  }

  return (
    <div className={`${styles[variant]} ${styles[size]}`} onClick={onClick}>
      {label}
    </div>
  )
}

export default StandardButton
