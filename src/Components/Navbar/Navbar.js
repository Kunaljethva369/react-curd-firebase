import React from 'react';
import './Navbar.css';

function Navbar(setPopup) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand">CURD</a>
                <li className='nav-item'>
                    <a className="nav-urls" onClick={setPopup.props.openPopUp}> Create User</a>
                </li>
            </nav>
        </>
    )
}

export default Navbar