import React, { createContext } from "react";
import { useState } from "react";

export const Reservation = createContext({});

const ContextProvider = ({ children }) => {
    const [reservationList, setReservationList] = useState({
        icon: "soccer",
        event: "soccer",
        type: "court",
        amount: 10,
        participants: "students",
        responsible_type: "student",
        description: "",
        title: "",
        date: "",
        start: "11",
        end: "12",
        responsible: "",
        amount_type: "",
    });
    return (
        <Reservation.Provider value={{ reservationList, setReservationList }}>
            {children}
        </Reservation.Provider>
    );
};

export default ContextProvider;
