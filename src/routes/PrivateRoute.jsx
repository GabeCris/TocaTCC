import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { Reservation } from "../contexts/Reservation";

const PrivateRoute = ({ children }) => {
    const { logado } = useContext(Reservation);
    return logado ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
