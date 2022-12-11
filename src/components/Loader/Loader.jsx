import React from "react";
import "./loader.scss";

const Loader = () => {
    return (
        <div className="loader-container">
            <img src="../../assets/icons/logo-loader.svg" alt="" />
            <div className="loader-spinner"></div>
        </div>
    );
};

export default Loader;
