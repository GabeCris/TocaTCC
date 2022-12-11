import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import CardDetails from "../../components/CardDetails/CardDetails";
import { Link } from "react-router-dom";
import "./details.scss";
import { db } from "../../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import SkeletonDetails from "../../components/SkeletonDetails/SkeletonDetails";

const Details = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);
    const usersCollectionsRef = collection(db, "reservation");
    const [skeleton, setSkeleton] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionsRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setSkeleton(false);
        };
        getUsers();
    }, []);

    useEffect(() => {
        users.filter((sla) => sla.id === id).map((sla) => setData(sla));
    });

    return (
        <Layout title="Home">
            <section className="step-container details-container">
                <h1 className="section-title">Detalhes</h1>
                {skeleton ? (
                    <SkeletonDetails></SkeletonDetails>
                ) : (
                    <CardDetails props={data}></CardDetails>
                    )}

                <Link to="/">Voltar</Link>
            </section>
        </Layout>
    );
};

export default Details;
