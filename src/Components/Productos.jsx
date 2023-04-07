import React from "react";
import Menu from "./Menu";
import Imagenes from "./Imagenes";
import iphone from "../assets/Imagenes/iphone.jpg"
import s21 from "../assets/Imagenes/s21.jpg"
import oneplus from "../assets/Imagenes/oneplus.jpeg"
import fifa23 from "../assets/Imagenes/fifa23.jpg"
import callofduty from "../assets/Imagenes/callofduty.jpg"
import smash from "../assets/Imagenes/smash.jpg"
import "../stylesheet/Productos.css"
import Footer from "./Footer";


function Productos() {

    return (
    <div>
        <Menu />
           
            
        <div className='bg wrapper'>
                
                <div className="content-container">
                    
                    <div className="texto-container">
                        <span className='text-span'><b>Telefonos</b></span>
                        <p>
                        ¡Bienvenido a nuestra sección de productos de teléfonos móviles! <br />
                        Si estás buscando un teléfono móvil de última generación, te recomendamos echar un vistazo a nuestros dispositivos más populares, como el iPhone 13, el Samsung Galaxy S21, el Google Pixel 6, el OnePlus 10, y muchos más. Estos dispositivos ofrecen características avanzadas, cámaras de alta calidad, pantallas impresionantes, y mucho más.
                        </p>
                    </div>
                    <div id="carouselExample" className="carousel slide">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                           <Imagenes
                            imagen={iphone}
                            width='500'
                            heigth='100'
                            alt='Iphone13'
                            style={{ borderRadius: 400 / 2 }}
                           />
                        </div>
                        <div className="carousel-item">
                           <Imagenes
                            imagen={s21}
                            width='500'
                            heigth='100'
                            alt='Galaxys21'
                            style={{ borderRadius: 400 / 2 }}
                           />    
                        </div>
                        <div className="carousel-item">
                            <Imagenes
                            imagen={oneplus}
                            width='500'
                            heigth='100'
                            alt='Oneplus'
                            style={{ borderRadius: 400 / 2 }}
                            />  
                        </div>  
                       </div>
                    
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                         </button>
                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                         </button>
                    
                    </div> 
                     
                </div>
           

                <div classNameName="content-container">
                    
                  <div id="carousel" className="carousel slide">
                   <div className="carousel-inner">
                    <div className="carousel-item active">
                            <Imagenes
                            imagen={fifa23}
                            width='500'
                            heigth='100'
                            alt='Fifa23'
                            style={{ borderRadius: 400 / 2 }}
                            />     
                    </div>
                    <div className="carousel-item">
                            <Imagenes
                            imagen={callofduty}
                            width='500'
                            heigth='100'
                            alt='Callofduty'
                            style={{ borderRadius: 400 / 2 }}
                            /> 
                    </div>
                    <div className="carousel-item">
                            <Imagenes
                            imagen={smash}
                            width='500'
                            heigth='100'
                            alt='Smash'
                            style={{ borderRadius: 400 / 2 }}
                            /> 
                    </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                 </div>  
                    <div classNameName="texto-container">
                        <span classNameName='text-span'><b>Video Juegos</b></span>
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