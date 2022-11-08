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
        description: "Jogo de fute da galerinha",
        title: "Futebol de Info19",
        date: "05/04",
        start: "11",
        end: "12",
        responsible: "Gabriel Crisanto",
        amount_type: "students",
    });
    return (
        <Reservation.Provider value={{ reservationList, setReservationList }}>
            {children}
        </Reservation.Provider>
    );
};

export default ContextProvider;
