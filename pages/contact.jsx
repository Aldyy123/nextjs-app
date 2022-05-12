import Head from "next/head"
import Image from 'next/image'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="M. Ardi Trisnaldi - Contact" />
                <meta name="og:description" content="M. Ardi Trisnaldi - Contact" />
                <meta name="og:title" content="Contact - M. Ardi Trisnaldi" />
                <meta name="og:type" content="website" />
            </Head>
            <section style={{ display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10, color: 'white' }}>
                <p>Jika anda ada waktu untuk membahasa hal yang penting bisa hubungi saya</p>
                <a style={{ background: '#3b525c', padding: '5px 50px', color: 'white' }} href="mailto:mohammad.aldyy@gmail.com" rel="noreferrer">
                    Talk me
                </a>
                <div style={{
                    display: 'flex',
                    gap: 15
                }}>
                    <a href="https://www.facebook.com/maldyy23/" rel='noreferrer' target='_blank'>
                        <Image width="35px" height="35px" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="fb" />
                    </a>
                    <a href="https://github.com/Aldyy123" rel='noreferrer' target={'_blank'}>
                        <Image width="35px" height="35px" src="https://img.icons8.com/fluency/48/000000/github.png" alt="github" />
                    </a>
                    <a href="https://www.instagram.com/aldyy231/" rel='noreferrer' target={'_blank'}>
                        <Image width="35px" height="35px" src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="ig" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-ardi-trisnaldi/" rel='noreferrer' target={'_blank'}>
                        <Image width="35px" height="35px" src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="Linkeding" />
                    </a>
                </div>
                <p>
                    Icon by
                    <a target="_blank" rel='noreferrer' style={{
                        color: '#F2FA5A'
                    }} href="https://icons8.com/icon"> Icons8</a>
                </p>
            </section>
        </>
    )
}