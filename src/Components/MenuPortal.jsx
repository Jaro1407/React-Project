import React from "react";
import '../stylesheet/Menu.css'
import { Link } from 'react-router-dom'

const MenuPortal = () =>{

    return(

        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 text-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to={"/Celulares"}><b>Celulares</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={"/Juegos"}><b>Viedojuegos</b></Link>
                    </li> 
                </ul>
                </div>
            </div>
        </nav>
        
    </div>

    )
}

export default MenuPortal