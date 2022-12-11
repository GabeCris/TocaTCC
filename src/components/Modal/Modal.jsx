import React from "react";
import "./modal.scss";
import { Link } from "react-router-dom";

const Modal = ({ click, current, status, update }) => {
    return (
        <div className="modal-container">
            <div className="modal-bg" onClick={click}></div>
            <div className="modal-box">
                <h2 className="title">
                    Tem certeza que deseja <span>{current}</span> evento?
                </h2>
                <section className="modal-options">
                    <div className="modal-reject" onClick={click}>
                        <p className="modal-text">Não, voltar</p>
                    </div>
                    <Link onClick={() => status(current)} to="/">
                        <div className="modal-accept">
                            <p className="modal-text">Sim, finalizar</p>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default Modal;
