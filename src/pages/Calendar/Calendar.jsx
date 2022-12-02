import React from "react";
import Layout from "../../components/Layout/Layout";
import Calendario from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import CardEvent from "../../components/CardEvent/CardEvent";
import "./calendar.scss";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    let dataFormatada =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const teste = [1]

    return (
        <Layout title="Calendário">
            <Calendario
                className={"react-calendar"}
                onChange={setDate}
                value={date}
            ></Calendario>
            <h2 className="title-date">
                {`${date.getDate()} de ${monthNames[date.getMonth()]}`}
            </h2>
            <div className="cards-container">
              {
                teste.map((item, index) => (
                  <CardEvent
                      index={index+1}
                      event={"soccer"}
                      title={"Futebol"}
                      date={dataFormatada}
                      start={5}
                      end={6}
                      amount={15}
                  />
                ))
              }
            </div>
        </Layout>
    );
};

export default Calendar;
