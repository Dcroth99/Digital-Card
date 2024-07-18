import React from "react";
import About from "./components/About";
import Name from "./components/Name";
import Picture from "./components/Picture";


function App() {
    return(
        <>
        <body className="card">
            <Picture />
            <Name />
            <About />
        </body>
        </>

    ) 

}
export default App