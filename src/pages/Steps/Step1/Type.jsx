import React from "react";
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
    const { setReservationList, reservationList } = useContext(Reservation);
    const [selected, setSelected] = useState("court");
    const [typeResponsible, setTypeResponsible] = useState(reservationList.responsible_type);
    const [responsibleName, setResponsibleName] = useState(reservationList.responsible);

    const changeResponsibleName = (e) => {
        const option = e.target.value;
        setResponsibleName(option);
        setReservationList({ ...reservationList, responsible: option });
    };
    
    const changeTypeResponsible = (e) => {
        const option = e.target.id;
        setTypeResponsible(option);
        setReservationList({ ...reservationList, responsible_type: option });
    };

    const changeOption = (e) => {
        const option = e.target.value;
        setSelected(option);
        setReservationList({ ...reservationList, type: option });
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
            <InputText
                classname="input-responsable"
                placeholder="Nome do responsável"
                change={changeResponsibleName}
                value={responsibleName}
            />
             <div className="type-input">
                <label>
                    <input type="radio" name="type" id="student" onClick={changeTypeResponsible} checked={typeResponsible === 'student' ? true : false}/>
                    <span></span>
                    Aluno
                </label>
                <label>
                    <input type="radio" name="type" id="server" onClick={changeTypeResponsible} checked={typeResponsible === 'server' ? true : false}/>
                    <span></span>
                    Servidor
                </label>
                <label>
                    <input type="radio" name="type" id="guest" onClick={changeTypeResponsible} checked={typeResponsible === 'guest' ? true : false}/>
                    <span></span>
                    Convidado
                </label>
            </div>
            <section className="buttons-container">
                <Button>
                    <Link to="/scheduling/step2">Próximo</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/">Sair</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Type;
