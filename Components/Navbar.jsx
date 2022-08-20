import Link from "next/link"
import styles from '../styles/Navbar.module.css'
import { useRouter } from "next/router";
import { useSpring, animated } from 'react-spring'


export default function Navbar() {
    const router = useRouter()

    const props = useSpring({
        to: { opacity: 1, translateX: '0' }, from: { opacity: 0, translateX: '-40px' }, delay: 400,
    })

    return (
        <>
            <div className={`mouse-memoirs ${styles['title-navbar']}`}>
                <h2>My Portfolio</h2>
                <animated.hr style={props} />
            </div>
            <section className={styles.section}>
                <li className={`poppins`}>
                    <Link href={'/'} passHref>
                        <a className={`${router.pathname === '/' ? styles.active : ''}`}>
                            About me
                        </a>
                    </Link>
                </li>
                <li className={` poppins`}>
                    <Link href={'/project'}>
                        <a className={`${router.pathname === '/project' ? styles.active : ''}`}>
                            Project
                        </a>
                    </Link>
                </li>
                <li className={` poppins`}>
                    <Link href={'/contact'}>
                        <a className={`${router.pathname === '/contact' ? styles.active : ''}`}>
                            Contact
                        </a>
                    </Link>
                </li>
            </section>
        </>
    )
}