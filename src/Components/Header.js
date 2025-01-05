import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return <header className="header">
        {
            <section >
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
                <div className="banner-img">
                    <img src="../assets/restaurant.jpg" alt="restaurant food"></img>
                </div>
            </section>
        }
    </header>;
}

export default Header;