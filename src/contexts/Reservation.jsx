import React, { createContext } from "react";
import { useState } from "react";

export const Reservation = createContext({});

const ContextProvider = ({ children }) => {
    const [filterSelect, setFilterSelect] = useState("");
    const [typeReservation, setTypeReservation] = useState("court");
    const [currentUser, setCurrentUser] = useState(null);
    const [logado, setLogado] = useState(false);
    const [reservationListCourt, setReservationListCourt] = useState({
        icon: "soccer",
        event: "soccer",
        type: "court",
        amount: 10,
        participants: "students",
        responsible_type: "student",
        description: "Jogo de fute da galerinha",
        title: "Futebol de Info19",
        date: "05/04",
        initialHour: 7,
        initialMinute: 0,
        endHour: 8,
        endMinute: 0,
        responsible: "Gabriel Crisanto",
        amount_type: "students",
        status: "wait",
    });

    const [reservationListMaterial, setReservationListMaterial] = useState({
        icon: "soccer",
        material: "ball",
        type: "material",
        amount: 10,
        participants: "students",
        responsible_type: "student",
        description: "Jogo de fute da galerinha",
        title: "Futebol de Info19",
        date: "05/04",
        initialHour: 7,
        initialMinute: 0,
        endHour: 8,
        endMinute: 0,
        responsible: "Gabriel Crisanto",
        amount_type: "students",
    });
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
            }}
        >
            {children}
        </Reservation.Provider>
    );
};

export default ContextProvider;
