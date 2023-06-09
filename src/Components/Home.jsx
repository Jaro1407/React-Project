import React from "react";
import Menu from "./Menu";
import Footer from "./Footer"
import '../stylesheet/Home.css';
import Imagenes from './Imagenes';
import Start from '../assets/Imagenes/Start.jpg';
import Services from '../assets/Imagenes/Services.jpg';


function Home() {

    return (
        <div className='wrapper'>
            <Menu />
            <div className="container-fluid px-0">
                <div className="row content-container">
                    <div className="col-lg-6 col-sm-12 col-md-12 texto-container">
                        <span className='black-span'> </span> <span className='text-span'><b>¿Quienes Somos?</b></span> <span className='black-span'> </span>
                        <p>
                            Bienvenido a nuestra tienda de teléfonos y videojuegos. Somos un equipo de expertos apasionados por la tecnología y los videojuegos, y nos encanta compartir nuestra experiencia y conocimientos con nuestros clientes.
                            Nuestro objetivo es ofrecer una experiencia de compra única y satisfactoria a nuestros clientes. Por esta razón, contamos con un equipo de profesionales capacitados y amables que están siempre dispuestos a ayudar y asesorar a nuestros clientes en su elección de productos.
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center img-container">
                        <Imagenes
                            imagen={Start}
                            width='100%'
                            heigth='100%'
                            alt='Reunion'
                            style={{ borderRadius: 400 / 2 }}
                        />
                    </div>
                </div>
                <div className="row content-container">
                    <div className="col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center img-container">
                        <Imagenes
                            imagen={Services}
                            width='100%'
                            heigth='100%'
                            alt='Reunion'
                            style={{ borderRadius: 400 / 2 }}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 texto-container">
                        <span className='text-span'><b>Nuestros Servicios</b></span>
                        <p>
                            Venta de teléfonos móviles y videojuegos: Ofrecemos una amplia gama de dispositivos móviles y consolas de videojuegos de las marcas más reconocidas en el mercado. Todos nuestros productos son de alta calidad y están disponibles a precios competitivos. <br></br>
                            Servicios de reparación: Si tu teléfono móvil o consola de videojuegos tiene algún problema técnico, nuestro equipo de técnicos altamente capacitados puede ayudarte a solucionarlo. Ofrecemos servicios de reparación rápida y confiable para asegurarnos de que tu dispositivo esté funcionando correctamente.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Home