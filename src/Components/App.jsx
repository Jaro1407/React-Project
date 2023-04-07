import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Portal from "./Portal";
import Productos from "./Productos";
import NotFound from "./NotFound";
import Celulares from "./Celulares";
import Juegos from "./Juegos"


function App (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Productos" element={<Productos/>} />
                <Route path="/Portal" element={<Portal/>} />
                <Route path="/celulares" element={<Celulares/>} />
                <Route path="/Juegos" element={<Juegos/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App