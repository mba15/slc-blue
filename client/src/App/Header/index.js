import React from "react";
import NavBar from "./NavBar";



function Header() {
    return (
        <div className="logo">
        
            <NavBar />
            <h1 className="h1">Utah Resistance</h1>
           
            <div className="header">
                <div className='theLogo'>
                    <p className="quote">Salt Lake City</p>
                    <p className="quote"> will be blue </p>
                 
                </div>
            </div>
        </div>
    )
}

export default Header;