import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-1">
                <a href="/" className="brand-logo">React TS</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to='/todos'>Todo</Link></li>
                    <li><Link to='/'>About Us</Link></li>
                </ul>
            </div>
        </nav>
    )
    
}