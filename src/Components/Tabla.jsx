import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Tabla = ({ cols, controlador, lista }) => {
    // useEffect(() => {
    //     console.log(Object.values(lista[0]))
    // }, [])

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>
                            {/* This link will take you to the Celulares form */}
                            <Link to={`/${controlador}/new`} className='btn btn-success'>Nuevo</Link>
                        </th>
                        {
                            // we call the map method on the cols array to iterate over each element in the array
                            // for each iteration the map method calls the arrow function
                            // the arrow function takes two parameters, value and index
                            // value represents the current element being processed
                            // index represents the index of the current element in the array
                            // this will generate a th based on the cols prop dinamically
                        cols.map((value, index) => {
                            return <th key={index}>{value}</th>
                        })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((value, index) => {
                            return <tr key={index}>
                                {/* We use string interpolation on the link to construct a dynamic URL based on the controlador prop */}
                                <td>
                                    <Link to={`/${controlador}/edit/${Object.values(value)[0]}`} className='btn btn-success'>Editar</Link>
                                    <Link to={`/${controlador}/delete/${Object.values(value)[0]}`} className='btn btn-danger'>Eliminar</Link>
                                </td>
                                {/* Here we use the Object.values method to extract the values of the properties from the value object*/}
                                {/* this returns a td with each value as its child content */}
                                {Object.values(value).map((value2, index2) => {
                                    return <td key={index2}>{value2}</td>
                                })} 
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;