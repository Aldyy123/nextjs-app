import styles from '../styles/Project.module.css'
import Image from 'next/image'
import Head from 'next/dist/shared/lib/head'
import fileJson from '../data/projects.json'
import { useSpring, animated } from 'react-spring'


export default function Project(props) {
    const animation = useSpring({ 
        to: { opacity: 1, translateX: '0' }, from: { opacity: 0, translateX: '-40px' } , delay: 100,
    })
    return (
        <>
            <Head>
                <title>Project</title>
                <meta name="description" content="M. Ardi Trisnaldi - Projects" />
                <meta name="og:description" content="M. Ardi Trisnaldi - Projects" />
                <meta name="og:title" content="Projects - M. Ardi Trisnaldi" />
                <meta name="og:type" content="website" />
            </Head>
            <animated.div style={animation} className={styles.projects}>
                {fileJson.map(value => (
                    <a href={value.url} target="_blank" rel='noreferrer' key={value.id}>
                        <div>
                            <Image src={value.image} alt={value.title} width={500} height={200} />
                        </div>
                        <h2>{value.title}</h2>
                        <p>{value.text}</p>
                        <div>
                            {value.langs.map(lang => (
                                <div className={styles['stack-lang']} key={lang}>
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </a>
                ))}
            </animated.div>

            <div className={styles['github-section']}>
                <a href="https://github.com/Aldyy123" rel='noreferrer' target={'_blank'}>
                    Github &gt;
                </a>
            </div>
        </>
    )
}

