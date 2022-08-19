import Head from "next/head"
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'

export default function Contact() {
    const animation = useSpring({
        to: {
            opacity: 1, translateX: '0',
            display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10, color: 'white'
        }, 
        from: { opacity: 0, translateX: '-40px' }, delay: 100,
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
                <p className="mouse-memoirs" style={{fontSize: '20px'}}>Connect With Me</p>
                
            </animated.section>
        </>
    )
}