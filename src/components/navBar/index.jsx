import React from "react";
import CartWidget from "../cartWidget";
import './styles/navBar.css';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navBar">
            <NavLink className="navbar-brand" to='/'>bruhMoments</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navBar__list">
                    <li className="nav-item">
                        <NavLink className="navBar__items" to='/category/flicks'>Flicks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navBar__items" to='/category/films'>Films</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navBar__items" to='/cart'>
                            <CartWidget/>
                        </NavLink>
                    </li>            
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
