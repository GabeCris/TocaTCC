import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import InputText from "../../components/InputText/InputText";
import "./register.scss";
import Button from "../../components/Button/Button";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSignIn = () => {
        createUserWithEmailAndPassword(email, password);
    };
    return (
        <Layout title="Home">
            <section className="login_content">
                <h1 className="section-title">Cadastro</h1>
                <div className="input-container">
                    <InputText
                        placeholder={"Informe seu email"}
                        change={(e) => setEmail(e.target.value)}
                    />
                    <InputText
                        placeholder={"Informe sua senha"}
                        change={(e) => setPassword(e.target.value)}
                    />
                </div>
            </section>
            <section className="buttons-container buttons-login">
                <Button change={handleSignIn} status={false}>
                    <Link to="/login">Cadastrar</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/login">Voltar</Link>
                </SecondaryButton>
            </section>
        </Layout>
    );
};

export default Register;
