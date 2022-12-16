import React, { useState } from "react";
import "./layout.scss";
import { NavLink, Link } from "react-router-dom";
import Data from "./data";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";

const SignLogin = () => {
    return (
        <nav className="navbar">
            {Data.map((item) => (
                <NavLink to={item.route} className="navlink">
                    <img src={item.path} className="image" />
                    <p className="text">{item.text}</p>
                </NavLink>
            ))}
        </nav>
    );
};

const Layout = ({ children, title }) => {
    const { currentUser, setCurrentUser } = useContext(Reservation);

    const location = useLocation();
    const [fullScreen, setFullScreen] = useState(false);

    const changeFullScreen = () => {
        fullScreen
            ? document.exitFullscreen()
            : document.body.requestFullscreen();
        setFullScreen(!fullScreen);
    };
    const appBar = () => {
        switch (location.pathname) {
            case "/scheduling/step6":
                return (
                    <section className="appbar_finish">
                        <img src="../assets/icons/logo-full.svg" />
                    </section>
                );
            case "/login":
            case "/register":
                return (
                    <section className="appbar_finish">
                        <img src="../assets/icons/logo-letters.svg" />
                    </section>
                );
            default:
                return (
                    <section className="appbar">
                        <h1 className="title">{title}</h1>
                        <img
                            src={`../assets/icons/logo-${
                                currentUser?.email === "admin@gmail.com"
                                    ? "admin"
                                    : "student"
                            }.svg`}
                            onClick={() => changeFullScreen()}
                        />
                    </section>
                );
        }
    };
    return (
        <section className="layout-container">
            {appBar()}
            <main className="content">{children}</main>
            {location.pathname != "/login" &&
                location.pathname != "/register" && <SignLogin />}
        </section>
    );
};

export default Layout;
