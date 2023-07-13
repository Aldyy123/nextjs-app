import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <>
            <main className="container">
                <Navbar/>
                <section className='container-content'>
                    {children}
                </section>
                <hr />
                <p style={{
                    textAlign: 'center',
                    color: "#7858A6"
                }}>Copyright {new Date().getFullYear()} @aldyy</p>
            </main>
        </>
    )
}