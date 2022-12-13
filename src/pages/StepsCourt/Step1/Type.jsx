import React, { useEffect } from "react";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Data from "./data";
import CardOption from "../../../components/CardOption/CardOption";
import { Reservation } from "../../../contexts/Reservation";
import { useState, useContext } from "react";
import InputText from "../../../components/InputText/InputText";
import "./type.scss";

const Type = () => {
    const {
        currentUser,
        setReservationListCourt,
        reservationListCourt,
        setTypeReservation,
        typeReservation,
    } = useContext(Reservation);
    const [selected, setSelected] = useState(typeReservation);
    const [inputNull, setInputNull] = useState(false);
    const [typeResponsible, setTypeResponsible] = useState(
        reservationListCourt.responsible_type
    );
    const [responsibleName, setResponsibleName] = useState(
        reservationListCourt.responsible
    );

    const [buttonActive, setButtonActive] = useState(false);

    useEffect(() => {
        setButtonActive(responsibleName ? true : false);
    });

    const changeResponsibleName = (e) => {
        const option = e.target.value;
        option === "" ? setInputNull(true) : setInputNull(false);
        const textRefactor = option.replace(/[\d]/g, "");
        setResponsibleName(textRefactor);
        setReservationListCourt({
            ...reservationListCourt,
            responsible: option,
        });
    };

    const changeTypeResponsible = (e) => {
        const option = e.target.id;
        setTypeResponsible(option);
        setReservationListCourt({
            ...reservationListCourt,
            responsible_type: option,
        });
    };

    const changeOption = (e) => {
        const option = e.target.value;
        setSelected(option);
        setTypeReservation(option);
        setReservationListCourt({ ...reservationListCourt, type: option });
    };
    return (
        <section className="step-container type-container">
            <h1 className="section-title">O que vai reservar?</h1>
            <div className="options-container">
                {Data.map((item) => (
                    <CardOption
                        path={item.path}
                        text={item.text}
                        click={changeOption}
                        value={item.value}
                        selected={selected}
                    ></CardOption>
                ))}
            </div>
            <label className="label-input">
                <InputText
                    classname="input-responsable"
                    placeholder="Nome do responsável"
                    change={changeResponsibleName}
                    value={responsibleName}
                    maxLength={20}
                    inputNull={inputNull}
                />
                {responsibleName && (
                    <span className="span-input">Responsável</span>
                )}
            </label>
            <div className="type-input">
                <label>
                    <input
                        type="radio"
                        name="type"
                        id="student"
                        onClick={changeTypeResponsible}
                        checked={typeResponsible === "student" ? true : false}
                    />
                    <span></span>
                    Aluno
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        id="server"
                        onClick={changeTypeResponsible}
                        checked={typeResponsible === "server" ? true : false}
                    />
                    <span></span>
                    Servidor
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        id="guest"
                        onClick={changeTypeResponsible}
                        checked={typeResponsible === "guest" ? true : false}
                    />
                    <span></span>
                    Convidado
                </label>
            </div>
            <section className="buttons-container">
                <Button status={buttonActive}>
                    <Link
                        to={
                            buttonActive &&
                            (reservationListCourt.type == "court"
                                ? "/scheduling/court/step2"
                                : "/scheduling/material/step2")
                        }
                    >
                        Próximo
                    </Link>
                </Button>
                <SecondaryButton>
                    <Link to="/">Sair</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Type;
