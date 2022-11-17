import React, { useState, useContext, useEffect } from "react";
import { Reservation } from "../../../contexts/Reservation";

import CardOption from "../../../components/CardOption/CardOption";
import Data from "./data";
import "./material.scss";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";

const Sport = () => {
    const { setReservationListMaterial, reservationListMaterial } = useContext(Reservation);
    const [selected, setSelected] = useState(reservationListMaterial.material);
    const changeOption = (e) => {
        const option = e.target.value;
        setSelected(option);
        setReservationListMaterial({ ...reservationListMaterial, material: option });
    };

    return (
        <section className="step-container">
            <h1 className="section-title">Qual material?</h1>
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
                    <Link to="/scheduling/material/step3">Próximo</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/step1">Voltar</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Sport;
