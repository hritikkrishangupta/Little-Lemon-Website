import React, { useState } from "react";

import "../App.css";
// import "../css/nav.css";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return <nav class={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="" class="logo">
            <img src="../assets/Logo.svg" alt="Little Lemon Logo"></img>
        </a>

        <div class="menu-icon" onClick={toggleMenu}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <ul class={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>

            </li>
            <li>
                <a href="">Menu</a>
            </li>
            <li>
                <a href="">Reservations</a>
            </li>
            <li>
                <a href="">Order Online</a>
            </li>
            <li>
                <a href="">Login</a>
            </li>
        </ul>


    </nav>;
}

export default Nav;