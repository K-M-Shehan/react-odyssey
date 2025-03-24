import {createRoot} from "react-dom/client"

const Challenge1 = () => {

  // 1. Create a root
const root = createRoot(document.getElementById("root"))
  // 2. Render a root
  const renderedThing = root.render(
    <h1>Hello, React!</h1>
  )
  
  return renderedThing
};
  
export default Challenge1;
  