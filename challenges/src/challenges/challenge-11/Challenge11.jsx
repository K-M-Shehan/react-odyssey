import { createRoot } from "react-dom/client";

/**
 * Challenge:
 * Move the main element into its own component called MainContent and render that component inside the Page component.
 * 
 * Do the same with the footer element, moving it into a new component called Footer.
 */
function Header() {
    return (
        <header>
            <img src="/src/assets/react.svg" width="40px" alt="React logo"/>
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