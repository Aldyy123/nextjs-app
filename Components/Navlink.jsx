import Link from "next/link"
import { memo, useCallback, useState, useMemo } from "react"
import { Spring, animated } from "react-spring"
import styles from '../styles/Navbar.module.css'

function Navlink({ href, title, pathname }) {
    const [isHover, setIsHover] = useState(false)
    const HoverEnter = useCallback(() => {
        setIsHover(true)
    }, [setIsHover])
    
    const HoverLeave = useCallback(() => {
        setIsHover(false)
    }, [setIsHover])
    return (
        <>
            <li className={`poppins`}
                onMouseEnter={() => HoverEnter()}
                onMouseLeave={() => HoverLeave()}
            >
                <Link href={href} passHref>
                    <a className={pathname === href ? styles.active : ''}>
                        {title}
                    </a>
                </Link>
                <Spring to={{
                    opacity: isHover || pathname === href ? 1 : 0,
                    translateX: isHover || pathname === href ? '0px' : '-40px',
                }}>
                    {stylesSpring => (
                        <animated.hr style={{ ...stylesSpring, height: '3px!important', backgroundColor: '#371B58', width: '100px',}} />
                    )}
                </Spring>
            </li>
        </>
    )
}

export default memo(Navlink)