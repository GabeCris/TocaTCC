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
    const { setReservationListMaterial, reservationListMaterial } =
        useContext(Reservation);
    const [status, setStatus] = useState(true);

    let date = new Date();
    let dataFormatada =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    useEffect(() => {
        setDateSelected(dataFormatada);
        setReservationListMaterial({
            ...reservationListMaterial,
            date: dataFormatada,
        });
    }, []);

    useEffect(() => {
        validateTime();
    });

    const changeDate = (e) => {
        const option = e.target.value;
        setDateSelected(option);
        setReservationListMaterial({
            ...reservationListMaterial,
            date: option,
        });
    };

    const validateTime = () => {
        if (
            reservationListMaterial.initialHour >
            reservationListMaterial.endHour
        ) {
            setStatus(false);
        } else if (
            reservationListMaterial.initialHour ===
                reservationListMaterial.endHour &&
            reservationListMaterial.initialMinute >
                reservationListMaterial.endMinute
        ) {
            setStatus(false);
        } else if (
            reservationListMaterial.initialHour ===
                reservationListMaterial.endHour &&
            reservationListMaterial.initialMinute ===
                reservationListMaterial.endMinute
        ) {
            setStatus(false);
        } else if (
            reservationListMaterial.initialHour + 2 <
            reservationListMaterial.endHour
        ) {
            setStatus(false);
        } else if (
            reservationListMaterial.initialHour + 2 ===
                reservationListMaterial.endHour &&
            reservationListMaterial.endMinute === 30
        ) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };

    return (
        <section className="step-container date-container">
            <h1 className="section-title">Para quando?</h1>
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
            <div className="time-container">
                <SelectInput
                    list={initialHour}
                    label={"Início"}
                    id={1}
                    type={"material"}
                />
                <span>:</span>
                <SelectInput list={initialMinute} id={2} type={"material"} />
            </div>
            <div className="time-container">
                <SelectInput
                    list={endHour}
                    label={"Fim"}
                    id={3}
                    type={"material"}
                />
                <span>:</span>
                <SelectInput list={endMinute} id={4} type={"material"} />
            </div>
            {!status && <span className="error">*Horário inválido</span>}
            <section className="buttons-container">
                <Button status={status}>
                    <Link to={status && "/scheduling/material/step5"}>
                        Próximo
                    </Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/material/step3">Voltar</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default DateTime;
