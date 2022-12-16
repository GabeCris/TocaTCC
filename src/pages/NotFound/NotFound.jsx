import React from "react";
import "./not-found.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="not-found">
            <img src="../assets/icons/not-found.svg" alt="" />
            <section className="buttons-container">
                <Button>
                    <Link to="/">Voltar</Link>
                </Button>
            </section>
        </section>
    );
};

export default NotFound;
