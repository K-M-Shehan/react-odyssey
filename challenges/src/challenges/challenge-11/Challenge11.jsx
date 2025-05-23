import { createRoot } from "react-dom/client";
import "./styles.css";

/**
 * Challenge:
 * 
 * - Add a nav > ul > li (x3). The 3 items should say:
 *   "Pricing", "About", "Contact"
 */
function Header() {
    return (
        <header>
            <img src="/src/assets/react.svg" width="40px" alt="React logo"/>
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's fun</li>
                <li>Second reason</li>
                <li>Third reason</li>
                <li>Final reason...</li>
            </ol>
        </main>
    )
} 

function Footer() {
    return (
        <footer>
            <small>
                © 2025 Supremestrawhat developement. All rights reserved.
            </small>
        </footer>
    )
}

function Page() {
    return (
        /* the below element would just create a fragment, but without importing the fragment lib*/
        <> 
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    )
}

const Challenge11 = () => {
    const root = createRoot(document.getElementById('root'))

    const renderedThing = root.render(
        <Page/>
    )
    return renderedThing
};
    
export default Challenge11;