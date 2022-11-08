import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import CardEvent from "../../components/CardEvent/CardEvent";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import "./home.scss";

const Home = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionsRef = collection(db, "reservation");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionsRef);
            console.log(data);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        console.log('abriu')
        getUsers();
    }, []);

 

    return (
        <Layout title="Home">
            {/* <button onClick={createUser}>Criar</button> */}
            <section className="cards-container-home">
                {/* <button onClick={criarReservation}>clicar</button> */}
                {users.map((user, index) => (
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
