import { createElement } from "react";
import { createRoot } from "react-dom/client";

// This is an old way to do things, JSX is the syntactic sugar of this thing

const Challenge3 = () => {
    const root = createRoot(document.getElementById('root'))
    const renderedThing = root.render(
        createElement("h1", null, "Hello from createElement!")
    )

    return renderedThing
};
    
export default Challenge3;