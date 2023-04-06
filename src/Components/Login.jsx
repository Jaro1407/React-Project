import React, { useState } from "react";
import users from '../assets/Json/users.json';
import '../stylesheet/Login.css';

function Login () {

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
                } else {
                  console.log('Invalid username or password.');
                }
              }; 
        


    return (

        <div className="container login-container d-flex">
            <div className="row">
                <div className="col-lg-5 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center login-left">
                    <div className="login-header">
                        <h1>Bienvenido al Portal de Empleados</h1>
                        <p>Inicia Sesion para acceder a la plataforma</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" required autoComplete="off" value={formValues.username} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" required value={formValues.password} onChange={handleInputChange} />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className="col-lg-5 col-md-4 d-sm-none login-right">

                </div>
            </div>
        </div>       

    )
};

export default Login