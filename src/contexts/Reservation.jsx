import React, { createContext } from "react";
import { useState } from "react";

export const Reservation = createContext({});

const ContextProvider = ({ children }) => {
    const [filterSelect, setFilterSelect] = useState("");
    const [typeReservation, setTypeReservation] = useState("court");
    const [currentUser, setCurrentUser] = useState(null);
    const [logado, setLogado] = useState(false);
    const [reservationListCourt, setReservationListCourt] = useState({
        event: "soccer",
        type: "court",
        amount: 10,
        participants: "students",
        responsible_type: "student",
        description: "",
        title: "",
        date: "",
        initialHour: 7,
        initialMinute: 0,
        endHour: 8,
        endMinute: 0,
        responsible: "",
        amount_type: "students",
        status: "wait",
        uid: "",
    });

    const [reservationListMaterial, setReservationListMaterial] = useState({
        event: "ball",
        type: "material",
        amount: 1,
        participants: "students",
        responsible_type: "student",
        title: "",
        description: "",
        date: "",
        initialHour: 7,
        initialMinute: 0,
        endHour: 8,
        endMinute: 0,
        responsible: "",
        amount_type: "students",
        status: "wait",
        uid: "",
    });

    const clearArray = () => {
        setReservationListCourt({
            event: "soccer",
            type: "court",
            amount: 10,
            participants: "students",
            responsible_type: "student",
            description: "",
            title: "",
            date: "",
            initialHour: 7,
            initialMinute: 0,
            endHour: 8,
            endMinute: 0,
            responsible: "",
            amount_type: "students",
            status: "wait",
            uid: "",
        });
        setReservationListMaterial({
            event: "ball",
            type: "material",
            amount: 1,
            participants: "students",
            responsible_type: "student",
            title: "",
            description: "",
            date: "",
            initialHour: 7,
            initialMinute: 0,
            endHour: 8,
            endMinute: 0,
            responsible: "",
            amount_type: "students",
            status: "wait",
            uid: "",
        });
    };
    return (
        <Reservation.Provider
            value={{
                filterSelect,
                setFilterSelect,
                reservationListCourt,
                setReservationListCourt,
                reservationListMaterial,
                setReservationListMaterial,
                typeReservation,
                setTypeReservation,
                currentUser,
                setCurrentUser,
                logado,
                setLogado,
                clearArray
            }}
        >
            {children}
        </Reservation.Provider>
    );
};

export default ContextProvider;
