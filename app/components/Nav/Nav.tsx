import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
        <span className={styles.span}>Fitness World</span>
        <ul className={styles.list}>
            <Link className={styles.link} href={'/'}>Home</Link>
            <Link className={styles.link} href={'../../Rutinas'}>Rutinas</Link>
            <Link className={styles.link} href={''}>Calculadora</Link>
        </ul>
    </div>
  )
}

