import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";


function Productos() {

    return (
        <div>
            <Menu />
            <div className='wrapper'>
                
                <div className="content-container">
                    <div className="texto-container">
                        <span className='grey-span'>Telefonos </span>
                        <p>
                        ¡Bienvenido a nuestra sección de productos de teléfonos móviles! <br />
                        Si estás buscando un teléfono móvil de última generación, te recomendamos echar un vistazo a nuestros dispositivos más populares, como el iPhone 13, el Samsung Galaxy S21, el Google Pixel 6, el OnePlus 10, y muchos más. Estos dispositivos ofrecen características avanzadas, cámaras de alta calidad, pantallas impresionantes, y mucho más.
                        </p>
                    </div>
                    <div className="img-container">

                    </div>  
                </div>
                <div className="content-container">
                    <div className="img-container">

                    </div>
                    <div className="texto-container">
                        <span className='grey-span'>Video Juegos</span>
                        <p>
                        En nuestra tienda, estamos comprometidos a ofrecer la mejor selección de juegos y consolas para que puedas disfrutar al máximo de tu experiencia de juego. <br />
                        En cuanto a juegos, tenemos un amplio catálogo que incluye los últimos lanzamientos y los clásicos favoritos de todos los tiempos. Ofrecemos juegos para todas las edades y géneros, desde aventuras emocionantes hasta juegos de deportes y carreras. Entre nuestros juegos más populares se encuentran FIFA 23, Call of Duty: Vanguard, Grand Theft Auto V, Super Smash Bros. Ultimate y muchos más.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Productos