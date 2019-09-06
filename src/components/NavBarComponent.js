import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>Simple Expenses App</h1>
            <ul className='header'>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/stuff'>Stuff</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default NavBar;