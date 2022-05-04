import Head from "next/head"
import Image from 'next/image'

export default function Contact() {
    return (
        <>
        <Head>
            <title>Contact</title>
        </Head>
            <section style={{ display: "flex", justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <p>Jika anda ada waktu untuk membahasa hal yang penting bisa hubungi saya</p>
                <a style={{ background: 'red', padding: '5px 50px', color: 'white' }} href="">
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
                </div>
                <a target="_blank" rel='noreferrer' href="https://icons8.com/icon/uLWV5A9vXIPu/facebook">icon by Icons8</a>
            </section>
        </>
    )
}