import styles from './nav.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
        <span className={styles.span}>Fitness World</span>
        <ul>
            <li>Home</li>
            <li>Rutinas</li>
            <li>Blog</li>
        </ul>
    </div>
  )
}

