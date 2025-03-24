import { createRoot } from "react-dom/client";

/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
*/

const Challenge2 = () => {
  const root = createRoot(document.getElementById('root'))
  
  const renderedThing = root.render(
    <ul>
      <li>A little thing</li>
      <li>Another thing</li>
      <li>One more thing</li>
    </ul>
  ) 
  return renderedThing
};
  
export default Challenge2;
  