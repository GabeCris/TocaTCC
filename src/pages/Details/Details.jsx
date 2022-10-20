import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import CardDetails from "../../components/CardDetails/CardDetails";
import { Link } from "react-router-dom";
import './details.scss';

const Details = () => {
    const { id} = useParams();
    return (
        <Layout title="Home">
            <section className="step-container details-container">
            <h1 className="section-title">Detalhes</h1>
                {/* <h1>O ID dessa reserva é:</h1>
                <h2>{id}</h2> */}
                <CardDetails id={id}></CardDetails>
                <Link to="/">Voltar</Link>
            </section>
        </Layout>
    );
};

export default Details;
