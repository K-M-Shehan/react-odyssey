import { createElement } from "react";
import { createRoot } from "react-dom/client";

const Challenge2 = () => {
    const root = createRoot(document.getElementById('root'))
    const renderedThing = root.render(
        createElement("h1", null, "Hello from createElement!")
    )

    return renderedThing
};
    
export default Challenge2;