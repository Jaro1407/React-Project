import React from 'react'
import '../stylesheet/Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>TechPlayground</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggle-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 text-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={"/Productos"}>Productos</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link active" to={"/Portal"}>Portal</Link>
                    </li> 
                </ul>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Menu