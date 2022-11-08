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
    const { setReservationList, reservationList } = useContext(Reservation);
    const [buttonActive, setButtonActive] = useState(false);
    const usersCollectionsRef = collection(db, "reservation");

    useEffect(() => {
        setButtonActive(
            reservationList.title && reservationList.description ? true : false
        );
        console.log(buttonActive);
    });

    const changeOption = (e, type) => {
        const option = e.target.value;
        console.log(option);
        if (type === "title")
            setReservationList({ ...reservationList, title: option });
        else if (type === "desc")
            setReservationList({ ...reservationList, description: option });
    };

    return (
        <section className="step-container">
            <h1 className="section-title">Para finalizar!</h1>
            <div className="inputs-container">
                <label className="label-input">
                    <InputText
                        classname="input-title"
                        value={reservationList.title}
                        change={(e) => changeOption(e, "title")}
                        placeholder="Insira aqui um título"
                    />
                    {reservationList.title && (
                        <span className="span-input">Título</span>
                    )}
                </label>
                <label className="label-input">
                    <textarea
                        className="input-description"
                        value={reservationList.description}
                        onChange={(e) => changeOption(e, "desc")}
                        placeholder="Descrição da reserva"
                        name="description"
                    ></textarea>
                    {reservationList.description && (
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
                    <Link to="/scheduling/step4">Voltar</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Description;
