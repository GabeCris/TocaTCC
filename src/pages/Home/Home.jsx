import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import CardEvent from "../../components/CardEvent/CardEvent";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import "./home.scss";
import Filter from "../../components/Filter/Filter";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";

const Home = () => {
    const { filterSelect } = useContext(Reservation);

    const [users, setUsers] = useState([]);
    const usersCollectionsRef = collection(db, "reservation");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionsRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
        console?.log(users);
    }, []);

    return (
        <Layout title="Home">
            <Filter />
            <section className="cards-container-home">
                {users
                    .filter((user) => user.event == filterSelect || !filterSelect)
                    .map((user, index) => (
                        <>
                            <CardEvent
                                event={user.event}
                                title={user.title}
                                date={user.date}
                                start={user.start}
                                end={user.end}
                                amount={user.amount}
                                index={index + 1}
                                id={user.id}
                            />
                        </>
                    ))}
            </section>
        </Layout>
    );
};

export default Home;
