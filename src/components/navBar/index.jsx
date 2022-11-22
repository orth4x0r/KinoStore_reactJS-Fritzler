import React from "react";
import CartWidget from "../cartWidget";
import './styles/navBar.css';


export const NavBar = () => {
    return (
        <nav className="navBar">
            <a className="navbar-brand" href="#">bruhMoments</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navBar__list">
                    <li className="nav-item">
                        <a className="navBar__items" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="navBar__items" href="#">Cosas</a>
                    </li>
                    <li className="nav-item">
                        <a className="navBar__items" href="#">
                            <CartWidget/>
                        </a>
                    </li>            
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
