import Link from "next/link"
import { memo, useCallback, useState, useMemo } from "react"
import { Spring, animated } from "react-spring"
import { useRouter } from "next/router";
import styles from '../styles/Navbar.module.css'

function Navlink({ href, title }) {
    const [isHover, setIsHover] = useState(false)
    const router = useRouter()
    const HoverEnter = useCallback(() => {
        setIsHover(true)
    }, [setIsHover])
    
    const HoverLeave = useCallback(() => {
        setIsHover(false)
    }, [setIsHover])
    
    const props = useMemo(() => { return { router, href, title } }, [router, title, href])
    return (
        <>
            <li className={`poppins`}
                onMouseEnter={() => HoverEnter()}
                onMouseLeave={() => HoverLeave()}
            >
                <Link href={href} passHref>
                    <a className={props.router.pathname === props.href ? styles.active : ''}>
                        {title}
                    </a>
                </Link>
                <Spring to={{
                    opacity: isHover || props.router.pathname === props.href ? 1 : 0,
                    translateX: isHover || props.router.pathname === props.href ? '0px' : '-40px',
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