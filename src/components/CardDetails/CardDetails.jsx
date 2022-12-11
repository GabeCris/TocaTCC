import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./card-details.scss";

const CardDetails = ({ props }) => {
    const [favorite, setFavorite] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [currentOption, setCurrentOption] = useState("aceitar");
    const formatHour = (value) => {
        const newValue = value < 10 ? "0" + value : value;
        return newValue;
    };

    const changeData = (option) => {
        const docRef = doc(db, "reservation", props.id);
        (async () => {
            await updateDoc(docRef, option);
        })();
        console.log("teste");
        return () => {};
    };

    const changeModal = (option) => {
        setCurrentOption(option);
        setOpenModal(!openModal);
    };

    const changeStatus = (option) => {
        option == "aceitar"
            ? changeData({ status: "ok" })
            : changeData({ status: "rejected" });
    };
    return (
        <>
            {openModal && (
                <Modal
                    click={() => setOpenModal(!openModal)}
                    current={currentOption}
                    status={changeStatus}
                />
            )}
            <section className="card-details">
                <section className="card-info">
                    <div className="card-image_container">
                        <img src={`../assets/events/${props.event}.svg`} />
                    </div>
                    <div className="card-info_title">{props.title}</div>
                </section>

                <nav className="card-nav">
                    <div className="card-nav_item">
                        <img
                            src="../assets/events/details/calendar.svg"
                            alt=""
                        />
                        <p className="card-nav_text">
                            {props.date?.split("-").reverse().join("/")}
                        </p>
                    </div>
                    <div className="card-nav_item">
                        <img src="../assets/events/details/time.svg" alt="" />
                        <p className="card-nav_text">
                            {formatHour(props.initialHour)}h
                            {props.initialMinute
                                ? formatHour(props.initialMinute)
                                : ""}{" "}
                            às {formatHour(props.endHour)}h
                            {props.endMinute ? formatHour(props.endMinute) : ""}
                        </p>
                    </div>
                </nav>
                <nav className="card-nav">
                    <div className="card-nav_item">
                        <img src="../assets/events/details/person.svg" alt="" />
                        <p className="card-nav_text">{props.amount} pessoas</p>
                    </div>
                    <div className="card-nav_item">
                        <img
                            src="../assets/events/details/responsible.svg"
                            alt=""
                        />
                        <p className="card-nav_text">{props.responsible}</p>
                    </div>
                </nav>
                <nav className="card-nav">
                    <div className="card-nav_item card-nav_description">
                        <img
                            src="../assets/events/details/description.svg"
                            alt=""
                        />
                        <p className="card-nav_text">{props.description}</p>
                    </div>
                </nav>
                {props.status != "wait" ? (
                    <section
                        className="card-favorite"
                        onClick={() => setFavorite(!favorite)}
                    >
                        {favorite ? (
                            <>
                                <img
                                    src="../assets/events/details/favorite-active.svg"
                                    alt=""
                                />
                                <p className="card-favorite_text">Favoritado</p>
                            </>
                        ) : (
                            <>
                                <img
                                    src="../assets/events/details/favorite.svg"
                                    alt=""
                                />
                                <p className="card-favorite_text">Favoritar</p>
                            </>
                        )}
                    </section>
                ) : (
                    <section className="card-options">
                        <div
                            className="card-reject"
                            onClick={() => changeModal("recusar")}
                        >
                            <img
                                src="../assets/events/details/close-details.svg"
                                alt=""
                            />
                            <p className="card-favorite_text">Recusar</p>
                        </div>
                        <div
                            className="card-accept"
                            onClick={() => changeModal("aceitar")}
                        >
                            <img
                                src="../assets/events/details/accept-details.svg"
                                alt=""
                            />
                            <p className="card-favorite_text">Aceitar</p>
                        </div>
                    </section>
                )}
            </section>
        </>
    );
};

export default CardDetails;
