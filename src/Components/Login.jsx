import React from "react";
import '../stylesheet/Login.css'

function Login () {

    return (

        <div className="cover">
            <h2>Ingresa tu usuario y contraseña</h2>
            
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password" />
            <button className="btn btn-success">Ingresar</button>
        </div>        

    )
};

export default Login