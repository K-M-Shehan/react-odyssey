import { createRoot } from "react-dom/client";

/**
 * Challenge (part 1)
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're excited to be learning React
 * 
 * Render the Page component
 */

function Page() {
    return (
        <ol>
            <li>It's fun</li>
            <li>Second reason</li>
            <li>Third reason</li>
            <li>Go away...</li>
        </ol>
    )
}

const Challenge7 = () => {
    const root = createRoot(document.getElementById('root'))

    const renderedThing = root.render(
        <Page/>
    )
    return renderedThing
};
    
export default Challenge7;