import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Reservation } from "../../../contexts/Reservation";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./amount.scss";

const Amount = () => {

    const { setReservationListMaterial, reservationListMaterial } = useContext(Reservation);

    const [amount, setAmount] = useState(reservationListMaterial.amount);

    const changeAmount = (e) =>{
        const value = e.target.value;
        setAmount(value);
        setReservationListMaterial({...reservationListMaterial, amount: value})
    }


    return (
        <div className="step-container">
            <h1 className="section-title">Quantos materiais?</h1>
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
            <section className="buttons-container">
                <Button>
                    <Link to="/scheduling/material/step4">Próximo</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/scheduling/material/step2">Voltar</Link>
                </SecondaryButton>
            </section>
        </div>
    );
};

export default Amount;
