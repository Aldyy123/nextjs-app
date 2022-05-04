import styles from '../styles/Project.module.css'
import Image from 'next/image'
import Head from 'next/dist/shared/lib/head'
import fileJson from '../data/projects.json'

export default function Project(props) {
    return (
        <>
            <Head>
                <title>Project</title>
            </Head>
            <div className={styles.projects}>
                {fileJson.map(value => (
                    <div key={value.id}>
                        <a href="">
                            <Image style={{
                                borderRadius: '20px'
                            }} src={value.image} alt={value.title} width={500} height={200} />
                        </a>
                        <h2>{value.title}</h2>
                        <p>{value.text}</p>
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

