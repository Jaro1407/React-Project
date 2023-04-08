import React, {useEffect, useState} from 'react'
import MenuPortal from './MenuPortal'
import FooterForm from "./FooterForm"
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"



const CelularesForm = ({del}) =>{

    const[marca, setMarca] = useState("")
    const[modelo, setModelo] = useState("")
    const[color, setColor] = useState("")
    const[precio, setPrecio] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[operadora, setOperadora] = useState("")

    let p = useParams()
    const navigate = useNavigate()
  
    useEffect(() =>{
        if(p.id !== undefined)
            cargarCelulares()

        if(del !== true)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            del = false
    }, [])

    async function cargarCelulares(){
        try{
            let res = await axios("https://denny2023.azurewebsites.net/api/celulares/"+p.id)
            let data = await res.data

            setMarca(data.marca)
            setModelo(data.modelo)
            setColor(data.color)
            setPrecio(data.precio)
            setDescripcion(data.descripcion)
            setOperadora(data.operadora)
            
        }
        catch(error){
            alert(error)

            if(error.response.status === 404)
                navigate("/Celulares")
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
            let res = await axios.delete("https://denny2023.azurewebsites.net/api/celulares?id="+p.id)
            let data = await res.data

            alert(data.message)

            if(data.status === 1)
                navigate("/Celulares")
        }
        catch(error){
            alert(error)

            if(error.response.status === 404)
                navigate("/Celulares")
        }
    }

    async function editar(){
        try{
            let celular = {
                celularId: p.id,
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora,
            }
            let res = await axios.put("https://denny2023.azurewebsites.net/api/celulares", celular)
            let data = res.data

            alert(data.message)

            if(data.status === 1)
                navigate("/Celulares")
        }
        catch(error){
            alert(error)
        }
    }

    async function guardar(){
        try{
            let celular = {
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora,
              }

            let res = await axios.post("https://denny2023.azurewebsites.net/api/celulares", celular)
            let data = await res.data

            alert(data.message)

            if(data.status === 1)
              navigate("/Celulares")
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
                
                <div className="form-group mb-4">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Ingrese la marca del celular" />
                    <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Ingrese el modelo" />
                    <div className="valid-feedback">Correcto</div>
                <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={color} onChange={(e) => setColor(e.target.value)}  placeholder="Ingrese el color" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={precio} onChange={(e) => setPrecio(e.target.value)}  placeholder="Ingrese el precio" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={descripcion} onChange={(e) => setDescripcion(e.target.value)}  placeholder="Ingrese la descripcion" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>
                <div className="form-group mb-4">
                    <label className="form-label"></label>
                    <input className="form-control" required type="text" disabled={del} value={operadora} onChange={(e) => setOperadora(e.target.value)}  placeholder="Ingrese la operadora" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Complete el campo</div>
                </div>

                <div className="form-group">
                    <input type="submit" onClick={(e) => enviar(e)} className={`btn btn-${p.id === undefined ? "success" : del === true ? "danger" : "primary"}`} value={p.id === undefined ? "Guardar" : del === true ? "Eliminar" : "Editar"} />
                    <button className="btn btn-warning" onClick={() => navigate("/Celulares")}>Cancelar</button>
                </div>
            </form>
        
        <FooterForm/>
        </div>
    )
}

export default CelularesForm