import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import "./settings.scss";

const Settings = () => {
    const { currentUser, setCurrentUser } = useContext(Reservation);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
        });
    }, []);
    console.log(currentUser)
    return (
        <Layout title="Minha Conta">
            <section className="step-container settings-container">
                <img src="../../assets/icons/user.svg" alt="" />
                <p className="settings-user">{currentUser?.email}</p>
                <span className="settings-disconnect" onClick={()=> signOut(auth)}>Desconectar</span>
            </section>
        </Layout>
    );
};

export default Settings;
