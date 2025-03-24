/*
import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementbyId('root'))

root.render(
    <h1>Hello, React!</h1>
)
*/

import { createElement } from "react";

/**
 * Challenge - recreate the above line of code in vannila JS by creating and 
 * appending an h1 to our div#root (without using innerHTML)
 * 
 * - Create a new h1 element (createElement)
 * - Give it some textContent
 * - Give it a class name of "header"
 * - append it as a child (using 'appendChild') of he div#root
 */

const Challenge5 = () => {
    const h1 = document.createElement("h1")
    h1.textContent = "This is imperative stuff"
    h1.className = "header"
    document.getElementsById('root').appendChild(h1)
    // not gonna return anything for this, it will be blank
};
    
export default Challenge5;