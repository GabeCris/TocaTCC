import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import "./card-details.scss";

const CardDetails = ({ id }) => {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);
    const [favorite, setFavorite] = useState(false);
    const usersCollectionsRef = collection(db, "reservation");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionsRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
    useEffect(() => {
        users.filter((sla) => sla.id === id).map((sla) => setData(sla));
    });

    return (
        <section className="card-details">
            <section className="card-info">
                <div className="card-image_container">
                    <img src={`../assets/events/${data.event}.svg`} />
                </div>
                <div className="card-info_title">{data.title}</div>
            </section>

            <nav className="card-nav">
                <div className="card-nav_item">
                    <img src="../assets/events/details/calendar.svg" alt="" />
                    <p className="card-nav_text">
                        {data.date?.split("-").reverse().join("/")}
                    </p>
                </div>
                <div className="card-nav_item">
                    <img src="../assets/events/details/time.svg" alt="" />
                    <p className="card-nav_text">
                        {data.start}h às {data.end}h
                    </p>
                </div>
            </nav>
            <nav className="card-nav">
                <div className="card-nav_item">
                    <img src="../assets/events/details/person.svg" alt="" />
                    <p className="card-nav_text">{data.amount} pessoas</p>
                </div>
                <div className="card-nav_item">
                    <img
                        src="../assets/events/details/responsible.svg"
                        alt=""
                    />
                    <p className="card-nav_text">{data.responsible}</p>
                </div>
            </nav>
            <nav className="card-nav">
                <div className="card-nav_item card-nav_description">
                    <img
                        src="../assets/events/details/description.svg"
                        alt=""
                    />
                    <p className="card-nav_text">{data.description}</p>
                </div>
            </nav>
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
        </section>
    );
};

export default CardDetails;
