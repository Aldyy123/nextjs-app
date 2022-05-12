import Link from "next/link"
import styles from '../styles/Navbar.module.css'
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter()
    return (
        <>
            <section className={styles.section}>
                <li className={router.pathname === '/' ? styles.active : ''}>
                    <Link href={'/'}>About me</Link>
                </li>
                <li className={router.pathname === '/project' ? styles.active : ''}>
                    <Link href={'/project'}>Project</Link>
                </li>
                <li className={router.pathname === '/contact' ? styles.active : ''}>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </section>
        </>
    )
}