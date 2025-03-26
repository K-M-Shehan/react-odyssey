/**
 * Challenge: Starting from scratch, build and render the HTML for 
 * our section project. Check the Google slide for what you're trying 
 * to build.
 * 
 * We'll be adding more styling to it later.
 * 
 * Hints:
 * + The React logo is a file in the project tree, so you can access it by
 *   using 'src="react-logo.png"' in your image element
 * + You can also set the 'width' attribute of the image element just like in HTML.
 *   In the slide , I have it set to 40px
 * 
 * Challenge: Project setup
 * 
 * - Create an App component in a separate App,jsx file which is a sibling to this main.jsx file.
 * - Create a components folder
 * - Create the following compoenents in separate files inside the components folder. 
 *   In each one, just render an h1 with the name of he component (eg. return <h1>Navbar goes here</h1>):
 *      - Navbar
 *      - Main
 * - Have App component import and render the Navbar and Main components
 * - Import and redner the App component inside of main.jsx using ReactDOM
 *      - At this point you should have your "Navbar goes here" etc. showing up in the browser
 * - Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
 *   Put the <links/> to those fonts ABOVE the style.css link in index.html.
 *   You may need to do some extra research to figure out how this works if you haven't done it before.  
*/

import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.getElementById('root'))

root.render(
  <App/>
)