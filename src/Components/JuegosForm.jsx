import React, {useEffect, useState} from 'react'
import Menu from './Menu'
import MenuPortal from './MenuPortal'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const JuegosForm = ({del}) =>{

    let p = useParams()

    const[titulo, setTitulo] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[plataforma, setPlataforma] = useState("")
    const[precio, setPrecio] = useState("")


    const navigate = useNavigate()
  
    useEffect(() =>{
        getJuego()
        if(del != true)
            del = false
    }, [])

    async function getJuego(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/juegos/"+p.id)
            let data = res.data

            setTitulo(data.titulo)
            setDescripcion(data.descripcion)
            setPlataforma(data.plataforma)
            setPrecio(data.precio)
            
        }
        catch(error){
            alert(error)
            if(error.response.status === 404)
                navigate("/Juegos")
        }
    }

    function enviar(e){
        let form = document.querySelector("#formulario")

        e.preventDefault()
        e.stopPropagation()

        if(!form.checkValidity()){

            form.classList.add('was-validated')
        }
        else{
            if(p.id === undefined)
                guardar()
            else if(del != true)
                editar()
            else
                eliminar()
        }
    }

    async function eliminar(){
        try{
            let res = await axios.delete("https://denny2023.azurewebsites.net/api/juegos?id="+p.id)
            let data = await res.data

            alert(data.message)

            if(data.status === 1)
                navigate("/Juegos")
        }
        catch(error){
            alert(error)

            if(error.response.status === 404)
                navigate("/Juegos")
        }
    }

    async function editar(){
        try{
            let juego = {
                juegoId: p.id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                
            }
            let res = await axios.put("https://denny2023.azurewebsites.net/api/juegos", juego)
            let data = res.data

            alert(data.message)

            if(data.status === 1)
                navigate("/Juegos")
        }
        catch(error){
            alert(error)
        }
    }

    async function guardar(){
        try{
            let juego = {
                juegoId: p.id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                
              }

            let res = await axios.post("https://denny2023.azurewebsites.net/api/juegos", juego)
            let data = await res.data

            alert(data.message)

            if(data.status === 1)
              navigate("/Juegos")
        }
        catch(error){
            alert(error)
        }

        
 

    }


    return(
        <div>
        <Menu />
        <MenuPortal />
        
            
            <form id="formulario" className="needs-validation" noValidate>
                {
                    p.id != undefined ?
                    <div className="form-group mb-3">
                        <label className="form-label"></label>
                        <input className="form-control" type="text" value={p.id} readOnly disabled />
                    </div>
                    :
                    ""
                }
                
                <div className="form-group mb-3">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Ingrese el titulo del juego" />
                    <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Ingrese la descripción" />
                    <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={plataforma} onChange={(e) => setPlataforma(e.target.value)}  placeholder="Ingrese la plataforma" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={precio} onChange={(e) => setPrecio(e.target.value)}  placeholder="Ingrese el precio" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>

                <div className="form-group">
                    <input type="submit" onClick={(e) => enviar(e)} className={`btn btn-${p.id === undefined ? "success" : del === true ? "danger" : "primary"}`} value={p.id === undefined ? "Guardar" : del === true ? "Eliminar" : "Editar"} />
                    <button className="btn btn-warning" onClick={() => navigate("/libros")}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default JuegosForm