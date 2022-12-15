import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import CardEvent from "../../components/CardEvent/CardEvent";
import "./notification.scss";

const Notification = () => {
    const [users, setUsers] = useState([]);
    const [view, setView] = useState(true);
    const [newUsers, setNewUsers] = useState();
    const usersCollectionsRef = collection(db, "reservation");
    const { currentUser } = useContext(Reservation);

    useEffect(() => {
        const getUsers = async () => {
            const dataBD = await getDocs(usersCollectionsRef);
            setUsers(
                dataBD?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setView(false);
        };
        getUsers();
        console.log(currentUser?.uid);
    }, []);

    useEffect(() => {
        changeUsers();
    }, [users]);

    const changeUsers = () => {
        setNewUsers(
            users
                ?.filter((user) => user?.uid == currentUser?.uid)
                ?.sort((a, b) => {
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

    return (
        <Layout title="Reservas Pessoais">
            <section className="cards-container-home cards-container-notification">
                <div className="personal-info-container">
                    <div className="personal-info">
                        <img
                            src="../assets/events/details/accept-details.svg"
                            alt=""
                        />
                        <p>
                            APROVADAS:{" "}
                            <span>
                                {
                                    newUsers?.filter((e) => e.status === "ok")
                                        ?.length
                                }
                            </span>
                        </p>
                    </div>
                    <div className="personal-info">
                        <img
                            src="../assets/events/details/close-details-white.svg"
                            alt=""
                        />
                        <p>
                            RECUSADAS:{" "}
                            <span>
                                {
                                    newUsers?.filter(
                                        (e) => e.status === "rejected"
                                    )?.length
                                }
                            </span>
                        </p>
                    </div>
                </div>
                <section className="personal-cards">
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
                                status={user.status}
                                type={user.type}
                            />
                        </>
                    ))}
                </section>
            </section>
        </Layout>
    );
};

export default Notification;
