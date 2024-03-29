import Head from "next/head"
import { useSpring, animated } from 'react-spring'
import { MdEmail } from 'react-icons/md'
import { ImLinkedin, ImGithub } from 'react-icons/im'
import { RiInstagramFill } from 'react-icons/ri'
import styles from '../styles/contact.module.css'

export default function Contact() {
    const animation = useSpring({
        to: {
            opacity: 1, translateX: '0',
            display: "block",
        },
        from: { opacity: 0, translateX: '-40px' },
        delay: 100,
    })
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="M. Ardi Trisnaldi - Contact" />
                <meta name="og:description" content="M. Ardi Trisnaldi - Contact" />
                <meta name="og:title" content="Contact - M. Ardi Trisnaldi" />
                <meta name="og:type" content="website" />
            </Head>
            <animated.section style={animation}>
                <p className="mouse-memoirs" style={{ fontSize: '20px', textAlign: 'center' }}>Connect With Me</p>
                <ul className={`poppins ${styles.list}`}>
                    <li>
                        <a href="mailto:mohammad.aldyy@gmail.com">
                            <MdEmail style={{ fontSize: 35, color: "black" }} />
                            mohammad.aldyy@gmail.com
                        </a>
                    </li>
                    <li >
                        <a href="https://linkedin.com/in/mohammad-ardi-trisnaldi">
                            <ImLinkedin style={{ fontSize: 30, color: "black" }} />
                            linkedin.com/in/mohammad-ardi-trisnaldi
                        </a>
                    </li>
                    <li >
                        <a href="https://instagram.com/aldyy231">
                            <RiInstagramFill style={{ fontSize: 30, color: "black" }} />
                            instagram.com/aldyy231
                        </a>
                    </li>
                    <li >
                        <a href="https://github.com/Aldyy123">
                            <ImGithub style={{ fontSize: 30, color: "black" }} />
                            github.com/Aldyy123
                        </a>
                    </li>
                </ul>
            </animated.section>
        </>
    )
}