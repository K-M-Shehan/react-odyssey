import { createRoot } from "react-dom/client";

/**
 * Challenge (part 2)
 * 
 * - Add a <header> element with an <img/> element with the image of the React Logo 
 *   inside (src="react-logo.svg") and make sure to set teh width to something more managable
 *   so it doesn't take up the whole screen.
 *   Also, as always, you should include some alt text on the image.
 * - Add an <h1> with some text describing the page. (E.g. "Reasons I'm excited to learn React").
 *   Place it above the ordered list , then weap the <h1> and <ol> inside a <main> element to keep our 
 *   semantic structure flowing well.
 * - Add a <footer> after the list that says:
 *     "© 20xx <last name here> developement. All rights reserved." 
 * 
 */

function Page() {
    return (
        <> /* this would just create a fragment, but without importing the fragment lib*/
            <header>
                <img src="/src/assets/react.svg" width="40px" alt="React logo"/>
            </header>
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