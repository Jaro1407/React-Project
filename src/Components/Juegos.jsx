import React, { useState, useEffect } from "react";
import axios from 'axios';
import Tabla from './Tabla';
import Menu from './Menu';
import MenuPortal from './MenuPortal'
import Footer from './Footer';


const Juegos = () => {

    // We first declare the variable that will change state and update the data pulled from the API
const [juegos, setJuegos] = useState();

useEffect(() => {
    cargarJuegos()
}, [])

// async function to call API 
async function cargarJuegos() {
    try {
        let res = await axios('https://denny2023.azurewebsites.net/api/juegos');
        let data = await res.data;

        setJuegos(data);
    }
    catch(error){
        alert(error)
        console.log(error.message)
    }
}

return (
    <div>
        <Menu />
        <MenuPortal/>
        <h1>Inventario Juegos</h1>
        {/* This ternary statement will show the loader until we have an API response */}

        {
            juegos === undefined ?
            <div>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h2>Cargando...</h2>
            </div>
            :
            <Tabla lista={juegos} controlador={'juegos'} cols={['juegoID', 'titulo', 'descripcion', 'plataforma', 'precio', 'categoria']} />
        }
        <Footer />
    </div>
)
}

export default Juegos