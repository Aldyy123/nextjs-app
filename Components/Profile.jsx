import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import profile from '../public/profile.jpg'

export default function Profile(){
    return(
        <>
            <div className={styles.profile}>
                <div className={styles['img-profile']}>
                    <Image layout="responsive" src={profile} alt="user" />
                </div>
                <div className="name-profile">
                    <h2>M. Ardi Trisnaldi</h2>
                    <h3>Freelance Fullstack Dev</h3>
                </div>
            </div>
        </>
    )
}