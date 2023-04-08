import React from "react";
// import Menu from "./Menu";
import { Link } from 'react-router-dom';
import '../stylesheet/NotFound.css';

function NotFound(){

    return(
        <div className='not-found-container d-flex flex-column align-items-center pt-4 mt-3'>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <p>Sorry, an error occurred, Requested page not found</p>
            <Link to={'/'}>
                <button className='btn btn-outline-primary btn-lg'>
                Take Me Home!
                </button>
            </Link>
        </div>
    )
}

export default NotFound