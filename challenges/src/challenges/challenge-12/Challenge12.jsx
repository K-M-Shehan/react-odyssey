import { createRoot } from "react-dom/client";
import "./styles.css";

/**
 * Challenge:
 * 
 * Using flexbox, line up the li s horizontally and put then inline with the React logo.
 * 
 * NOTE: for practice's sake, don't select any elements, but use classes for all styling
 */
function Header() {
    return (
        <header className="header">
            <img src="/src/assets/react.svg" width="40px" alt="React logo"/>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
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

const Challenge12 = () => {
    const root = createRoot(document.getElementById('root'))

    const renderedThing = root.render(
        <Page/>
    )
    return renderedThing
};
    
export default Challenge12;