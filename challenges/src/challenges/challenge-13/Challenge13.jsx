import { createRoot } from "react-dom/client";
import "./styles.css";
import Header from "./Header"; // you can name this whatever you want

/**
 * Challenge:
 * 
 * Move the width style off the JSX and into CSS with a dedicated className on the img element, and change the width to 55px instead
 */

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