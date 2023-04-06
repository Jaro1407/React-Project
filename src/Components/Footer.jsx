import React from 'react'
import '../stylesheet/Footer.css'

function Footer(){

    return(
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h4>Nuestra Tienda</h4>
              <p>Dirección de la tienda</p>
              <p>Teléfono: 555-555-5555</p>
              <p>Email: info@tutienda.com</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <h4>Horario de atención</h4>
              <p>Lunes a Viernes: 9am - 7pm</p>
              <p>Sábado: 10am - 5pm</p>
              <p>Domingo: Cerrado</p>
            </div>
 
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">© 2023 - Tienda de teléfonos y videojuegos</p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer