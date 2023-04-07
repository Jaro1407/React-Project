import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from '../assets/Json/users.json';
import Imagenes from './Imagenes';
import Store from '../assets/Imagenes/store-svg.svg';
import '../stylesheet/Login.css';

function Login () {

    const navigate = useNavigate();

    // This variable is to store the user input values
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    })
        
    // This function is to handle the inpput changes and update the state
    // handleInputChange will be call when the user types into the login form  
    const handleInputChange = (e) => {
            // use destructuring to extract the name and value properties from the event.target object.
            // name = name of the input field
            // value = what the user types
            const { name, value } = e.target;

            // use setFormValues function to update the state of the formValues object declared above
            // use spread operator to create a new object that contains all the properties of the formValues object
            setFormValues({ ...formValues, [name]: value });
        };

    // This function is to handle the form submission and check the user credentials 
    // This function receives an event object as a parameter, which contains information about the submit event
    const handleSubmit = (e) => {
            // This is to avoid reload the page
            e.preventDefault();
            // extracting the username and password from the formValues state variable
            const { username, password } = formValues;

            // Use the find method on the users.users array to find the username and password on the users.json file
            // store it on a variable
            const user = users.users.find(user => user.username === username && user.password === password);

            // use truthy statement to check if the result of the find method is undefined login will fail otherwise login success
            if (user) {
                console.log('Logged in successfully!');
                navigate('/celulares');
            } else {
                console.log('Invalid username or password.');
            }
        }; 
        


    return (

        <div className="login-container d-flex">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center mx-4">
                    <div className="col-lg-6 col-md-8 login-left">
                        <div className="login-header mb-5">
                            <h2>Bienvenido al Portal de Empleados</h2>
                            <p>Inicia Sesion para acceder a la plataforma</p>
                        </div>
                        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                            <div className="form-group mb-5">
                                <label htmlFor="username">Username:</label>
                                <input type="text" name="username" required autoComplete="off" value={formValues.username} onChange={handleInputChange} />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" required value={formValues.password} onChange={handleInputChange} />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-4 d-none d-md-block login-right">
                        <Imagenes
                            imagen={Store}
                            width='325'
                            heigth='100'
                            alt='Store'
                        />
                    </div>
                </div>
            </div>
        </div>       

    )
};

export default Login