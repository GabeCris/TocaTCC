import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Reservation } from "../../../contexts/Reservation";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./amount.scss";

const Amount = () => {

    const { setReservationListCourt, reservationListCourt } = useContext(Reservation);

    const [selected, setSelected] = useState(reservationListCourt.participants);
    const [amount, setAmount] = useState(reservationListCourt.amount);

    const changeOption = (e) => {
        const option = e.target.id;
        setSelected(option);
        setReservationListCourt({ ...reservationListCourt, participants: option });
    };

    const changeAmount = (e) =>{
        const value = e.target.value;
        setAmount(value);
        setReservationListCourt({...reservationListCourt, amount: value})
    }


    return (
        <div className="step-container">
            <h1 className="section-title">Quantas pessoas?</h1>
            <div className="input-amount">
                <p className="input-value">
                    Aprox: {amount < 20 ? amount : `${amount}+`}
                </p>
                <input
                    type="range"
                    min={1}
                    max={20}
                    value={amount}
                    onChange={changeAmount}
                />
            </div>
            <div className="type-input">
                <label>
                    <input type="radio" name="type" id="students" onClick={changeOption} checked={selected === 'students' ? true : false}/>
                    <span></span>
                    Todos são alunos
                </label>
                <label>
                    <input type="radio" name="type" id="students_guests" onClick={changeOption} checked={selected === 'students_guests' ? true : false}/>
                    <span></span>
                    Haverá convidados
                </label>
                <label>
                    <input type="radio" name="type" id="guests" onClick={changeOption} checked={selected === 'guests' ? true : false}/>
                    <span></span>
                    Haverá apenas convidados
                </label>
            </div>
            <section className="buttons-container">
                <Button>
                    <Link to="/scheduling/court/step4">Próximo</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/court/step2">Voltar</Link>
                </SecondaryButton>
            </section>
        </div>
    );
};

export default Amount;
