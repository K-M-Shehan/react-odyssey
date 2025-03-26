import { createRoot } from "react-dom/client";
import "./styles.css";
import Header from "./Header"; // you can name this whatever you want
import MainContent from "./MainContent"
import Footer from "./Footer"

/**
 * Challenge:
 * 
 * Move the MainContent and Footer components to their own separate files.
 */

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

const Challenge12 = () => {
    const root = createRoot(document.getElementById('root'))

    const renderedThing = root.render(
        <Page/>
    )
    return renderedThing
};
    
export default Challenge12;