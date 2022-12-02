import React from "react";
import "./date.scss";
import { useState, useEffect } from "react";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Reservation } from "../../../contexts/Reservation";
import SelectInput from "../../../components/SelectInput/SelectInput";
import { initialMinute, initialHour, endHour, endMinute } from "./timeList";

const DateTime = () => {
    const [dateSelected, setDateSelected] = useState("2022-11-3");
    const { setReservationListCourt, reservationListCourt } =
        useContext(Reservation);
    const [status, setStatus] = useState(true);

    let date = new Date();
    let dataFormatada =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    useEffect(() => {
        setDateSelected(dataFormatada);
        setReservationListCourt({
            ...reservationListCourt,
            date: dataFormatada,
        });
    }, []);

    useEffect(() => {
        validateTime();
    });

    const changeDate = (e) => {
        const option = e.target.value;
        setDateSelected(option);
        setReservationListCourt({ ...reservationListCourt, date: option });
    };

    const validateTime = () => {
        if (reservationListCourt.initialHour > reservationListCourt.endHour) {
            setStatus(false);
        } else if (
            reservationListCourt.initialHour == reservationListCourt.endHour &&
            reservationListCourt.initialMinute > reservationListCourt.endMinute
        ) {
            setStatus(false);
        } else if (
            reservationListCourt.initialHour == reservationListCourt.endHour &&
            reservationListCourt.initialMinute == reservationListCourt.endMinute
        ) {
            setStatus(false);
        } else if (
            reservationListCourt.initialHour + 2 <
            reservationListCourt.endHour
        ) {
            setStatus(false);
        } else if (
            reservationListCourt.initialHour + 2 ==
                reservationListCourt.endHour &&
            reservationListCourt.endMinute == 30
        ) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };

    return (
        <section className="step-container date-container">
            <h1 className="section-title">Quando vai ser?</h1>
            <label className="date-input label-input">
                <input
                    type="date"
                    value={dateSelected}
                    placeholder={"teste"}
                    max="2024-01-01"
                    min="2022-01-01"
                    onChange={(e) => changeDate(e)}
                    onClick={(e) => changeDate(e)}
                />
                <span className="span-input">Data</span>
            </label>
            <div className="time-container">
                <SelectInput list={initialHour} label={"Início"} type={1} />
                <span>:</span>
                <SelectInput list={initialMinute} type={2} />
            </div>
            <div className="time-container">
                <SelectInput list={endHour} label={"Fim"} type={3} />
                <span>:</span>
                <SelectInput list={endMinute} type={4} />
            </div>
            {!status && <span className="error">*Horário inválido</span>}
            <section className="buttons-container">
                <Button status={status}>
                    <Link to={status && "/scheduling/court/step5"}>
                        Próximo
                    </Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/court/step3">Voltar</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default DateTime;
