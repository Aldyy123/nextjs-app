import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import profile from '../public/profile.jpg'
import { useSpring, animated } from 'react-spring'

export default function Profile(){
    const animation = useSpring({
        to: {
            opacity: 1, translateX: '0',
        }, 
        from: { opacity: 0, translateX: '-40px' }, delay: 100,
    })
    return(
        <>
            <animated.div style={animation} className={styles.profile}>
                <div className={styles['img-profile']}>
                    <Image layout="responsive" src={profile} alt="user" />
                </div>
                <div className={styles['name-profile']}>
                    <h2 className="mouse-memoirs">M. Ardi Trisnaldi</h2>
                    <h3 className="poppins">Web Developer Enthusiast</h3>
                </div>
            </animated.div>
        </>
    )
}