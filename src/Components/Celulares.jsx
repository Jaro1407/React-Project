import React, { useState, useEffect } from "react";
import axios from 'axios';
import Tabla from './Tabla';
import MenuPortal from './MenuPortal'
import Footer from './Footer';
import '../stylesheet/Celulares.css';

const Celulares = () => {

        // We first declare the variable that will change state and update the data pulled from the API
    const [celulares, setCelulares] = useState();

    useEffect(() => {
        cargarCelulares()
    }, [])

    // async function to call API 
    async function cargarCelulares() {
        try {
            let res = await axios('https://denny2023.azurewebsites.net/api/celulares');
            let data = await res.data;

            setCelulares(data);
        }
        catch(error){
            alert(error)
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="main-container">
                <MenuPortal/>
                <fieldset className="border p-5">
                <legend><h1 className="text-center">Inventario Celulares</h1></legend>
                {/* This ternary statement will show the loader until we have an API response */}

                {
                    celulares === undefined ?
                    <div className="d-flex flex-column align-items-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <h2>Cargando...</h2>
                    </div>
                    :
                    <Tabla lista={celulares} controlador={'celulares'} cols={['ID', 'Marca', 'Modelo', 'Color', 'Precio', 'Descripcion', 'Operadora']} />
                    
                }
                </fieldset>
            </div>
            <Footer />
        </>
    )
}

export default Celulares