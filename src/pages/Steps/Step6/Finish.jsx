import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./finish.scss";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Reservation } from "../../../contexts/Reservation";

const Finish = () => {
    const { reservationList } = useContext(Reservation);
    const usersCollectionsRef = collection(db, "reservation");

    useEffect(() => {
        (async () => {
            const user = await addDoc(usersCollectionsRef, {
                ...reservationList,
            });
            console.log(user);
            console.log("entrou aqui mano");
        })();
        return () => {};
    }, []);

    return (
        <section className="step-container step-container_finish">
            <h1 className="section-title">Pronto!</h1>
            <div className="content-finish">
                <img src="../assets/icons/confirm.svg" />
                <p className="text">Dados preenchidos</p>
            </div>
            <div className="content-finish">
                <img src="../assets/icons/confirm.svg" />

                <p className="text">Formulário enviado</p>
            </div>
            <div className="content-finish">
                <img src="../assets/icons/wait.svg" />
                <p className="text">Aguardando aprovação</p>
            </div>
            <section className="buttons-container">
                <Button>
                    <Link to="/scheduling/step1">Nova reserva</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/">Sair</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Finish;
