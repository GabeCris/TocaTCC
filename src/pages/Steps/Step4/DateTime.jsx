import React from "react";
import "./date.scss";
import { useState, useEffect } from "react";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Reservation } from "../../../contexts/Reservation";

const DateTime = () => {
    const [dateSelected, setDateSelected] = useState('2022-11-3');
    const { setReservationList, reservationList } = useContext(Reservation);

    let date = new Date();
    let dataFormatada = (date.getFullYear() + "-" + ((date.getMonth() + 1)) + "-" + (date.getDate() )) ;                 

    useEffect(() => {
        setDateSelected(dataFormatada);
        setReservationList({ ...reservationList, date: dataFormatada });
    }, []);
    console.log(dateSelected);

    const changeDate = (e) => {
        const option = e.target.value;
        console.log(option);
        setDateSelected(option);
        setReservationList({ ...reservationList, date: option });
    };

    return (
        <section className="step-container">
            <h1 className="section-title">Quando vai ser?</h1>
            <label className="date-input label-input">
                <input
                    type="date"
                    value={dateSelected}
                    max="2024-01-01"
                    min="2022-01-01"
                    onChange={(e) => changeDate(e)}
                    onClick={(e) => changeDate(e)}
                />
                <span className="span-input">Data</span>
            </label>
            <section className="buttons-container">
                <Button>
                    <Link to="/scheduling/step5">Próximo</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/step3">Voltar</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default DateTime;
