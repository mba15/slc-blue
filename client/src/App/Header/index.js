import React from "react";
import NavBar from "./NavBar";



function Header() {
    return (
        <div>
        
            <NavBar />
           
            <div>
                <div className="header-slogan">
                    <p className="quote">Salt Lake City</p>
                    <p className="quote"> Will Be Blue </p>
                    <p className="quote"> 11/17/2018 </p>
                    <div>
                        <button> Anomaly Registration </button> 
                        <button> Local Community </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;