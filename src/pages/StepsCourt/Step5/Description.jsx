import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import InputText from "../../../components/InputText/InputText";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./description.scss";
import { Reservation } from "../../../contexts/Reservation";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const Description = () => {
    const { setReservationListCourt, reservationListCourt } =
        useContext(Reservation);
    const [buttonActive, setButtonActive] = useState(false);
    const usersCollectionsRef = collection(db, "reservation");

    useEffect(() => {
        setButtonActive(
            reservationListCourt.title && reservationListCourt.description
                ? true
                : false
        );
    }, [reservationListCourt.title, reservationListCourt.description]);

    const changeOption = (e, type) => {
        const option = e.target.value;
        if (type === "title")
            setReservationListCourt({ ...reservationListCourt, title: option });
        else if (type === "desc")
            setReservationListCourt({
                ...reservationListCourt,
                description: option,
            });
    };

    return (
        <section className="step-container">
            <h1 className="section-title">Para finalizar!</h1>
            <div className="inputs-container">
                <label className="label-input">
                    <InputText
                        maxLength={26}
                        classname="input-title"
                        value={reservationListCourt.title}
                        change={(e) => changeOption(e, "title")}
                        placeholder="Insira aqui um título"
                    />
                    {reservationListCourt.title && (
                        <span className="span-input">Título</span>
                    )}
                </label>
                <label className="label-input">
                    <textarea
                        maxLength={64}
                        className="input-description"
                        value={reservationListCourt.description}
                        onChange={(e) => changeOption(e, "desc")}
                        placeholder="Descrição da reserva"
                        name="description"
                    ></textarea>
                    {reservationListCourt.description && (
                        <span className="span-input">Descrição</span>
                    )}
                </label>
            </div>
            <section className="buttons-container">
                <Button status={buttonActive}>
                    <Link to={buttonActive && "/scheduling/step6"}>
                        Próximo
                    </Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/court/step4">Voltar</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Description;
