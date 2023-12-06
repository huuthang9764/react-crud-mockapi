import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/"className="navbar-brand">
                Navbar
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-links"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/users"
                                className="nav-links"
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0">
                        <li className="nav-item fs-16">
                            <NavLink to="/"className="nav-link">
                                Xin chào: username
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;