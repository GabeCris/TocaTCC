import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Calendario from "react-calendar";
import { useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import "react-calendar/dist/Calendar.css";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";
import CardEvent from "../../components/CardEvent/CardEvent";
import "./calendar.scss";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState(true);
    const [users, setUsers] = useState([]);
    const [itemDate, setItemDate] = useState();
    const [newUsers, setNewUsers] = useState();
    const usersCollectionsRef = collection(db, "reservation");
    let dataFormatada =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        (date?.getDate() < 10 ? `0${date.getDate()}` : date.getDate());

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

    useEffect(() => {
        const getUsers = async () => {
            const dataBD = await getDocs(usersCollectionsRef);
            setUsers(
                dataBD?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setView(false);
        };
        getUsers();
    }, []);

    useEffect(() => {
        changeUsers();
    }, [date]);

    useEffect(() => {
        changeDates();
    }, [view]);

    const changeUsers = () => {
        setNewUsers(
            users
                ?.filter((user) => user.status == "ok")
                ?.filter((user) => user.date == dataFormatada)
                ?.sort((a, b) => {
                    if (a.initialHour < b.initialHour) {
                        return -1;
                    } else {
                        return true;
                    }
                })
        );
    };

    const changeDates = () => {
        setItemDate(
            users
                ?.filter((user) => user.status === "ok")
                ?.map((user) => user.date)
        );
    };

    console.log(newUsers);

    return (
        <Layout title="Calendário">
            <Calendario
                className={"react-calendar"}
                onChange={setDate}
                value={date}
                calendarType={"US"}
                tileContent={({ date }) => {
                    if (
                        itemDate?.find(
                            (x) =>
                                x ==
                                date.getFullYear() +
                                    "-" +
                                    (date.getMonth() + 1) +
                                    "-" +
                                    (date?.getDate() < 10
                                        ? `0${date.getDate()}`
                                        : date.getDate())
                        )
                    ) {
                        return <span></span>;
                    }
                }}
            ></Calendario>
            <h2 className="title-date">
                {`${date.getDate()} de ${
                    monthNames[date.getMonth()]
                } de ${date.getFullYear()}`}
            </h2>
            <div className="cards-container">
                {view && Array.from(Array(1)).map(() => <SkeletonCard />)}
                {newUsers?.map((user, index) => (
                    <>
                        <CardEvent
                            event={user.event}
                            title={user.title}
                            date={user.date}
                            initialHour={user.initialHour}
                            initialMinute={user.initialMinute}
                            endHour={user.endHour}
                            endMinute={user.endMinute}
                            amount={user.amount}
                            index={index + 1}
                            id={user.id}
                        />
                    </>
                ))}
            </div>
        </Layout>
    );
};

export default Calendar;
