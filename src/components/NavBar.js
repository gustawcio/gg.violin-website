import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    const isMenuActive = props.active ? "menu" : "menu off"

    return (
        <nav className={isMenuActive}>
            <ul className="menu__list">
                <li className="menu__item"><NavLink to="/news" className="menu__link">Home</NavLink></li>
                <li className="menu__item"><NavLink to="/about" className="menu__link" >About</NavLink></li>
                <li className="menu__item"><NavLink to="/video" className="menu__link" >Video</NavLink></li>
                <li className="menu__item"><NavLink to="/contact" className="menu__link" >Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;

