import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

function Header() {
const [isNavActive, setIsNavActive] = useState(false);

const toggleNav = () => {
    setIsNavActive(!isNavActive);
};

return (
    <header id="header">
        {}
        <button className="menu-hamburguer" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </button>
        <div className="header">
            <div className="headerlogo">
                {}
                <img src="/Imagens/cansat_logo 1.png" alt="Logo CamSat" />
            </div>
            {}
            <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                {}
                <Link to="/" className="link-home" onClick={() => setIsNavActive(false)}>Home</Link>
                <Link to="/sobre" className="link-sobre" onClick={() => setIsNavActive(false)}>Sobre</Link>
                <Link to="/times" className="link-times" onClick={() => setIsNavActive(false)}>Times</Link>
                <Link to="/contato" className="link-contato" onClick={() => setIsNavActive(false)}>Contato</Link>
            </nav>
        </div>
    </header>
);
}

export default Header;