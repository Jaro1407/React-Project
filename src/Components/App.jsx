import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Portal from "./Portal";
import Productos from "./Productos";
import NotFound from "./NotFound";
import Celulares from "./Celulares";
import CelularesForm from "./CelularesForm";
import Juegos from "./Juegos"
import JuegosForm from "./JuegosForm";


function App (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Productos" element={<Productos/>} />
                <Route path="/Portal" element={<Portal/>} />
                <Route path="/Celulares" element={<Celulares/>} />
                <Route path="/Celulares/new" element={<CelularesForm />} />
                <Route path="/Celulares/edit/:id" element={<CelularesForm />} />
                <Route path="/Celulares/delete/:id" element={<CelularesForm del={true} />} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/Juegos" element={<Juegos/>} />
                <Route path="/Juegos/new" element={<JuegosForm />} />
                <Route path="/Juegos/edit/:id" element={<JuegosForm />} />
                <Route path="/Juegos/delete/:id" element={<JuegosForm del={true} />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App