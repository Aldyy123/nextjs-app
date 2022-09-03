import Head from "next/head"
import Profile from "../Components/Profile"
import { useSpring, animated } from 'react-spring'

export default function About() {
    const animation = useSpring({
        to: {
            opacity: 1, translateX: '0',
        }, 
        from: { opacity: 0, translateX: '-40px' }, delay: 100,
    })
    const styles = {
        hr: {
            backgroundColor: "#4C3575",
            width: '160px',
            maxWidth: '180px',
            height: '10px',
            marginLeft: 0
        }
    }
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta name="description" content="M. Ardi Trisnaldi - About Me" />
                <meta name="og:description" content="M. Ardi Trisnaldi - About Me" />
                <meta name="og:title" content="About me - M. Ardi Trisnaldi" />
                <meta name="og:type" content="website" />
            </Head>
            <Profile />

            <animated.div style={animation} className="poppins">
                <hr style={styles.hr} />
                <p>Hai 👋 selamat datang.</p>
                <p>
                    Saya seorang freelance developer yang berfokus ke dalam website frontend maupung backend.
                    Awal mula saya menjadi programmer itu karena saya suka mempelajari hal yang berbau IT Sejak SMP,
                    dimana mempelajari hardware komputer, jaringan dan design. Namun saya bertemu dengan hal yang benar - benar saya ingin fokus
                    dan saya sukai yaitu Developer. Menjadi developer seperti hal yang magic bagi saya, melakukan hal yang mustahil menjadi tidak mustahil.
                    Saya mempelajari bahasa pemprogramman sejak tahun 2019 sampai sekarang.  Stack yang saya gunakan itu javascript, css dan php.
                    Framework yang saya gunakan pada saat membuat website itu react, karena framework yang mudah dan modern untuk website jaman now
                </p>
            </animated.div>
        </>
    )
}