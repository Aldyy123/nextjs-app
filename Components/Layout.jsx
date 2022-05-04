import Profile from "./Profile"
import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <>
            <main className="container">
                <Profile />
                <Navbar/>
                <section className='container-content'>
                    {children}
                </section>
            </main>
        </>
    )
}