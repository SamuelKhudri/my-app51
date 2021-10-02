import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const navStyle = {
        fontWeight: "bold",
        color: "red",


    };
    return (
        <nav className="nav">
            <ul>
                <li><NavLink className="navlinkstyle" activeStyle={navStyle} to="/home" target="_blank">Home</NavLink></li>
                <li><NavLink className="navlinkstyle" activeStyle={navStyle} to="/about" target="_blank">About</NavLink></li>
                <li><NavLink className="navlinkstyle" activeStyle={navStyle} to="/friends" target="_blank">Friends</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;