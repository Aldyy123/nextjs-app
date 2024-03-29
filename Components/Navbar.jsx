import styles from '../styles/Navbar.module.css'
import { useRouter } from "next/router";
import { useSpring, animated } from 'react-spring'
import Navlink from "./Navlink";
import { useMemo } from 'react';

export default function Navbar() {
    const routerNext = useRouter()

    const props = useSpring({
        to: { opacity: 1, translateX: '0' }, from: { opacity: 0, translateX: '-40px' }, delay: 400,
    })

    const router = useMemo(() => routerNext, [routerNext])

    return (
        <>
            <div className={`mouse-memoirs ${styles['title-navbar']}`}>
                <h2>My Portfolio</h2>
                <animated.hr style={props} />
            </div>
            <section className={styles.section}>
                <Navlink href={'/'} title="About me" pathname={router.pathname} />
                <Navlink href={'/project'} title="Project" pathname={router.pathname} />
                <Navlink href={'/contact'} title="Contact" pathname={router.pathname} />
            </section>
        </>
    )
}