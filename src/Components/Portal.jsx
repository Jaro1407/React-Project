import React from "react";
import Menu from "./Menu";
import Login from "./Login";
import Footer from "./Footer";

function Portal(){
    return(
        <div>
            <Menu />

            <div>
                <Login/>
            </div>


            
            <Footer/>
        </div>
    )
}

export default Portal