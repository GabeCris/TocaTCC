import React from "react";
import Layout from "../../components/Layout/Layout";
import Calendario from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import CardEvent from "../../components/CardEvent/CardEvent";
import "./calendar.scss";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
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

    const teste = [1,2,3,4,5,6,7,8,1,1,1,1,1]


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
                      event={"futebol"}
                      title={"Futebol"}
                      date={25}
                      initial_time={5}
                      end_time={6}
                      people={12}
                  />
                ))
              }
            </div>
        </Layout>
    );
};

export default Calendar;
