import React, {useEffect, useState} from 'react'
import MenuPortal from './MenuPortal'
import FooterForm from "./FooterForm"
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const JuegosForm = ({del}) =>{

    
    const[titulo, setTitulo] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[plataforma, setPlataforma] = useState("")
    const[precio, setPrecio] = useState("")
    const[categoria, setCategoria] = useState("")

    
    const navigate = useNavigate()
    const p = useParams()

  
    useEffect(() =>{
        if(p.id !== undefined)
            getJuego()

        if(del !== true)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            del = false
    }, [])

    async function getJuego(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/juegos/"+p.id)
            let data = await res.data

            setTitulo(data.titulo)
            setDescripcion(data.descripcion)
            setPlataforma(data.plataforma)
            setPrecio(data.precio)
            setCategoria(data.categoria)
            
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
            else if(del !== true)
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
                categoria: categoria
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
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
              }

            let res = await axios.post("https://denny2023.azurewebsites.net/api/juegos", juego)
            let data = await res.data

            alert(data.message)

            if(data.status === 1)
              navigate("/Juegos")
        }
        catch(error){
            alert(error)
            console.log(error)
        }

        
 

    }


    return(
        <div>
        <MenuPortal />
        
            
            <form id="formulario" className="needs-validation" noValidate>
                {
                    p.id !== undefined ?
                    <div className="form-group mb-4">
                        <label className="form-label"></label>
                        <input className="form-control" type="text" value={p.id} readOnly disabled />
                    </div>
                    :
                    ""
                }
                
                <div className="form-group mb-5">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Ingrese el titulo del juego" />
                    <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-5">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Ingrese la descripción" />
                    <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-5">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={plataforma} onChange={(e) => setPlataforma(e.target.value)}  placeholder="Ingrese la plataforma" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-5">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={precio} onChange={(e) => setPrecio(e.target.value)}  placeholder="Ingrese el precio" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-5">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={categoria} onChange={(e) => setCategoria(e.target.value)}  placeholder="Ingrese la categoria" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>

                <div className="form-group">
                    <input type="submit" onClick={(e) => enviar(e)} className={`btn btn-${p.id === undefined ? "success" : del === true ? "danger" : "primary"}`} value={p.id === undefined ? "Guardar" : del === true ? "Eliminar" : "Editar"} />
                    <button className="btn btn-warning" onClick={() => navigate("/Juegos")}>Cancelar</button>
                </div>
            </form>
        
        
        <FooterForm/>    
        </div>
    )
}

export default JuegosForm