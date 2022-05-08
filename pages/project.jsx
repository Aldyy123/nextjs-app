import styles from '../styles/Project.module.css'
import Image from 'next/image'
import Head from 'next/dist/shared/lib/head'
import fileJson from '../data/projects.json'

export default function Project(props) {
    return (
        <>
            <Head>
                <title>Project</title>
                <meta name="description" content="M. Ardi Trisnaldi - Projects" />
                <meta name="og:description" content="M. Ardi Trisnaldi - Projects" />
                <meta name="og:title" content="Projects - M. Ardi Trisnaldi" />
                <meta name="og:type" content="website" />
            </Head>
            <div className={styles.projects}>
                {fileJson.map(value => (
                    <div key={value.id}>
                        <a href="">
                            <Image src={value.image} alt={value.title} width={500} height={200} />
                        </a>
                        <h2>{value.title}</h2>
                        <p>{value.text}</p>
                        <div>
                            {value.langs.map(lang => (
                                <div className={styles['stack-lang']} key={lang}>
                                    {lang}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles['github-section']}>
                <a href="https://github.com/Aldyy123" rel='noreferrer' target={'_blank'}>
                    Github &gt;
                </a>
            </div>
        </>
    )
}

