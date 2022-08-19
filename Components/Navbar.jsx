import Link from "next/link"
import styles from '../styles/Navbar.module.css'
import { useRouter } from "next/router";
import { useState } from "react";
import { useSpring, animated } from 'react-spring'


export default function Navbar() {
    const router = useRouter()
    const [show, setShow] = useState(false)
    
    const props = useSpring({ 
        to: { opacity: 1, translateX: '0' }, from: { opacity: 0, translateX: '-40px' } , delay: 400,
        onRest: () => setShow(!show)
    })
    return (
        <>
            <div className={`mouse-memoirs ${styles['title-navbar']}`}>
                <h2>My Portfolio</h2>
                <animated.hr style={props} />
            </div>
            <section className={styles.section}>
                <li className={`${router.pathname === '/' ? styles.active : ''} poppins`}>
                    <Link href={'/'}>About me</Link>
                </li>
                <li className={`${router.pathname === '/project' ? styles.active : ''} poppins`}>
                    <Link href={'/project'}>Project</Link>

                </li>
                <li className={`${router.pathname === '/contact' ? styles.active : ''} poppins`}>
                    <Link href={'/contact'}>Contact</Link>

                </li>
            </section>
        </>
    )
}