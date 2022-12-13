import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import CardEvent from "../../components/CardEvent/CardEvent";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import "./home.scss";
import Filter from "../../components/Filter/Filter";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";

const Home = () => {
    const { filterSelect, currentUser, setReservationListCourt, reservationListCourt } = useContext(Reservation);
    const [users, setUsers] = useState([]);
    const [view, setView] = useState(true);
    const [filterType, setFilterType] = useState("ok");
    const [newUsers, setNewUsers] = useState();
    const usersCollectionsRef = collection(db, "reservation");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionsRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setView(false);
            currentUser?.email == "admin@gmail.com"
                ? setFilterType("wait")
                : setFilterType("ok");
                setReservationListCourt({
                    ...reservationListCourt,
                    uid: currentUser?.uid,
                });
            };
        getUsers();
    }, []);


    useEffect(() => {
        changeUsers();
    }, [users, filterSelect]);

    const changeUsers = () => {
        setNewUsers(
            users
                .filter((user) => new Date(user.date) - new Date() > 0)
                .filter((user) => user.status === filterType)
                .filter((user) => user.event == filterSelect || !filterSelect)
                .sort((a, b) => {
                    if (a.date < b.date) {
                        return -1;
                    } else if (a.date > b.date) {
                        return true;
                    } else {
                        if (a.initialHour < b.initialHour) {
                            return -1;
                        } else {
                            return true;
                        }
                    }
                })
        );
    };
    console?.log(newUsers);

    return (
        <Layout title="Home">
            <Filter />
            <section className="cards-container-home">
                {view && Array.from(Array(8)).map(() => <SkeletonCard />)}
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
            </section>
        </Layout>
    );
};

export default Home;
