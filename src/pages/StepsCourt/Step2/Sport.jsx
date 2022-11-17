import React, { useState, useContext, useEffect } from "react";
import { Reservation } from "../../../contexts/Reservation";

import CardOption from "../../../components/CardOption/CardOption";
import Data from "./data";
import "./sport.scss";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";

const Sport = () => {
    const { setReservationListCourt, reservationListCourt } = useContext(Reservation);
    const [selected, setSelected] = useState(reservationListCourt.event);
    const changeOption = (e) => {
        const option = e.target.value;
        setSelected(option);
        setReservationListCourt({ ...reservationListCourt, event: option });
    };

    return (
        <section className="step-container">
            <h1 className="section-title">Qual esporte?</h1>
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
            <section className="buttons-container">
                <Button>
                    <Link to="/scheduling/court/step3">Próximo</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/step1">Voltar</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Sport;
