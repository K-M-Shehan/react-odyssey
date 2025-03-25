import { createRoot } from "react-dom/client";

/**
 * Mini-Challenge:
 * 
 * Move the header element from the Page component into its own component called Header.
 * 
 * Then render ana instance of the Header component insie the Page component where the header used to be.
 * 
 * 
 */
function Header() {
    return (
        <header>
            <img src="/src/assets/react.svg" width="40px" alt="React logo"/>
        </header>
    )
}

function Page() {
    return (
        /* the below element would just create a fragment, but without importing the fragment lib*/
        <> 
            <Header/>
            <main>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>It's fun</li>
                    <li>Second reason</li>
                    <li>Third reason</li>
                    <li>Final reason...</li>
                </ol>
            </main>
            <footer>© 2025 Supremestrawhat developement. All rights reserved.</footer>
        </>
    )
}

const Challenge8 = () => {
    const root = createRoot(document.getElementById('root'))

    const renderedThing = root.render(
        <Page/>
    )
    return renderedThing
};
    
export default Challenge8;