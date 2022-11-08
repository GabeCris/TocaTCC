import React, { useEffect } from "react";
import "./layout.scss";
import { NavLink, Link } from "react-router-dom";
import Data from "./data";
import { useLocation } from "react-router-dom";

const Layout = ({ children, title }) => {
    const location = useLocation();
    return (
        <section className="layout-container">
            {location.pathname === "/scheduling/step6" ? (
                <section className="appbar_finish">
                    <img src="../assets/icons/logo-full.svg" />
                </section>
            ) : (
                <section className="appbar">
                    <h1 className="title">{title}</h1>
                    <Link to="/">
                        <img src="../assets/icons/logo.svg" />
                    </Link>
                </section>
            )}
            <main className="content">{children}</main>
            <nav className="navbar">
                {Data.map((item) => (
                    <NavLink to={item.route} className="navlink">
                        <img src={item.path} className="image" />
                        <p className="text">{item.text}</p>
                    </NavLink>
                ))}
            </nav>
        </section>
    );
};

export default Layout;
