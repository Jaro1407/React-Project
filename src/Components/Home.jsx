import React from "react";
import Menu from "./Menu";
import '../stylesheet/Home.css';
import Imagenes from './Imagenes';
import Imagen4 from '../assets/Imagenes/image4.jpg';
import Imagen5 from '../assets/Imagenes/image5.jpg';


function Home() {

    return(
        <div className='wrapper'>
            <Menu />
            <div className="content-container">
                <div className="texto-container">
                    <span className='black-span'>¿ </span> <span className='grey-span'>Quienes Somos </span> <span className='black-span'> ?</span>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi dicta velit perferendis! Hic sapiente ullam illum inventore sunt illo aspernatur vel aliquam? Animi, consequuntur, minima sit eaque asperiores velit labore consequatur neque, odio aliquam est a. Ipsa excepturi iure, rerum adipisci, rem cum animi nisi doloremque aut eligendi, maxime repudiandae. Inventore molestiae soluta quam deserunt esse ut explicabo? Doloremque.
                    </p>
                </div>
                <div className="img-container">
                    <Imagenes 
                        imagen={Imagen4}
                        width='325'
                        heigth='100'
                        alt='Reunion'
                        style={{borderRadius: 400/ 2}}
                    />
                </div>
            </div>
            <div className="content-container">
                <div className="img-container">
                    <Imagenes 
                        imagen={Imagen5}
                        width='325'
                        heigth='100'
                        alt='Reunion'
                        style={{borderRadius: 400/ 2}}
                    />
                </div>
                <div className="texto-container">
                    <span className='grey-span'>Nuestros Servicios</span>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi dicta velit perferendis! Hic sapiente ullam illum inventore sunt illo aspernatur vel aliquam? Animi, consequuntur, minima sit eaque asperiores velit labore consequatur neque, odio aliquam est a. Ipsa excepturi iure, rerum adipisci, rem cum animi nisi doloremque aut eligendi, maxime repudiandae. Inventore molestiae soluta quam deserunt esse ut explicabo? Doloremque.
                    </p>
                </div>
            </div>
      </div>
    )
}

export default Home