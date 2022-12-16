import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./finish.scss";
import { db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Reservation } from "../../../contexts/Reservation";

const Finish = () => {
    const {
        setReservationListCourt,
        setReservationListMaterial,
        reservationListCourt,
        reservationListMaterial,
        typeReservation,
        currentUser,
    } = useContext(Reservation);
    const usersCollectionsRef = collection(db, "reservation");
    const [insertDB, setInsertDB] = useState();


    useEffect(() => {
        (async () => {
            setReservationListCourt({
                ...reservationListCourt,
                uid: currentUser?.uid,
            });
            setReservationListMaterial({
                ...reservationListMaterial,
                uid: currentUser?.uid,
            });
            typeReservation === "court"
                ? setInsertDB(
                      await addDoc(usersCollectionsRef, {
                          ...reservationListCourt,
                      })
                  )
                : setInsertDB(
                      await addDoc(usersCollectionsRef, {
                          ...reservationListMaterial,
                      })
                  );
        })();
        return () => {};
    }, []);

    return (
        <section className="step-container step-container_finish">
            <h1 className="section-title">Pronto!</h1>
            <div className="content-finish">
                <img src="../../assets/icons/confirm.svg" />
                <p className="text">Dados preenchidos</p>
            </div>
            <div className="content-finish">
                <img src="../../assets/icons/confirm.svg" />

                <p className="text">Formulário enviado</p>
            </div>
            <div className="content-finish">
                <img src="../../assets/icons/wait.svg" />
                <p className="text">Aguardando aprovação</p>
            </div>
            <section className="buttons-container">
                <Button>
                    <Link to="/scheduling/step1">Nova reserva</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/notification">Minhas reservas</Link>
                </SecondaryButton>
            </section>
        </section>
    );
};

export default Finish;
