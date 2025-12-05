
import Header from "./Header"
import Aside from "./Aside"
import Section from "./Section"
import Footer from "./Footer"
import "./css/Layout.css"

const Layout = () => {
    return (
        <div className="wrapper">
            <Header />

            <main>
                <Aside />
                <Section />
            </main>

            <Footer />
        </div>
    )
}

export default Layout