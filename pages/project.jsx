import styles from '../styles/Project.module.css'
import Image from 'next/image'
import Head from 'next/dist/shared/lib/head'
import fileJson from '../data/projects.json'
import { useSpring, animated } from 'react-spring'
import { ImGithub } from 'react-icons/im'


export default function Project(props) {
    const animation = useSpring({
        to: { opacity: 1, translateX: '0' }, from: { opacity: 0, translateX: '-40px' }, delay: 100,
    })
    const convertToStrig = JSON.stringify(fileJson)

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
                {JSON.parse(convertToStrig).reverse().map(value => (
                    <a href={value.url} target="_blank" rel='noreferrer' key={value.id}>
                        <div>
                            <Image src={value.image} alt={value.title} width={500} height={200} />
                        </div>
                        <h2 className="mouse-memoirs">{value.title}</h2>
                        <p className="poppins">{value.text}</p>
                        <div>
                            {value.langs.map(lang => (
                                <div className={`${styles['stack-lang']} mouse-memoirs`} key={lang}>
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </a>
                ))}
            </animated.div>

            <div className={styles['github-section']}>
                <a href="https://github.com/Aldyy123" rel='noreferrer' target={'_blank'} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 10,
                    alignItems: 'center',
                }}>
                    Github <ImGithub style={{ fontSize: 30, color: "white" }} />
                </a>
            </div>
        </>
    )
}

