import Head from "next/head";
import Profile from "../Components/Profile";
import { useSpring, animated } from "react-spring";

export default function About() {
  const animation = useSpring({
    to: {
      opacity: 1,
      translateX: "0",
    },
    from: { opacity: 0, translateX: "-40px" },
    delay: 100,
  });
  const styles = {
    hr: {
      backgroundColor: "#4C3575",
      width: "160px",
      maxWidth: "180px",
      height: "10px",
      marginLeft: 0,
    },
  };
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

      <animated.div style={{...animation, padding: 10}} className="poppins">
        <hr style={styles.hr} />
        <p>Hey 👋 Welcome</p>
        {/* <p>
                    Saya seorang freelance developer yang berfokus ke dalam website frontend maupun backend.
                    Awal mula saya menjadi programmer itu karena saya suka mempelajari hal yang berbau IT Sejak SMP,
                    dimana mempelajari hardware komputer, jaringan dan design. Namun saya bertemu dengan hal yang benar - benar saya ingin fokus
                    dan saya sukai yaitu Developer. Menjadi developer seperti hal yang magic bagi saya, melakukan hal yang mustahil menjadi tidak mustahil.
                    Saya mempelajari bahasa pemprogramman sejak tahun 2019 sampai sekarang.  Stack yang saya gunakan itu javascript, css dan php.
                    Framework yang saya gunakan pada saat membuat website itu react, karena framework yang mudah dan modern untuk website jaman now
                </p> */}

        {/* <p>
                    Saya Ardi, seorang undergraduate jurusan sistem informasi yang berfokus ke bidang IT Developer Aplikasi.
                    Awal mula saya menjadi minat dengan Developer itu karena saya suka mempelajari hal yang berbau IT Sejak SMP,
                    dimana mempelajari hardware komputer, jaringan dan design. Namun saya bertemu dengan hal yang benar - benar saya ingin fokus
                    dan saya sukai yaitu Developer ntah itu Frontend, Backend, Fullstack, Android, Cloud Computing.
                    Menjadi Developer aplikasi seperti hal yang magic bagi saya, melakukan hal yang mustahil menjadi tidak mustahil.
                    Stack yang saya gunakan itu Javascript, Python, dan PHP.
                    Kegiatan saya sehari - hari adalah mengerjakan project freelancer jika ada, berkolaborasi dengan temean atau team, serta belajar hal baru dan traveling.
                </p> */}
        <p
          style={{
            textAlign: "justify",
          }}
        >
          My name is Ardi, an undergraduate student majoring in Information
          Systems with a focus on IT Application Development.
        </p>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          My interest in becoming a Software Developer began when I started learning
          about IT-related topics during middle school. I was fascinated by
          computer hardware, networks, and design. However, I discovered my true
          passion and interest in becoming a Developer, whether it's in
          Frontend, Backend, Fullstack, Android, or Cloud Computing.
        </p>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          Being an application Developer feels like magic to me, as it allows me
          to turn the impossible into possible. The programming languages I
          primarily use are Javascript, Python, and PHP.
        </p>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          On a daily basis, I work on freelance projects if available,
          collaborate with peers or teams, and continuously learn new things.
          Additionally, I enjoy traveling as it broadens my horizons and
          provides inspiration for my work.
        </p>
        <a
          className="see-cv"
          target={"_blank"}
          href="https://docs.google.com/document/d/1ECLPOYc9qPrZGlNNiBPpXkHmfjmWRezIPJ63Cq9ocw8/edit?usp=sharing"
          rel="noreferrer"
        >
          📋 See CV
        </a>
      </animated.div>
    </>
  );
}
