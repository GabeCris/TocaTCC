import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import InputText from "../../components/InputText/InputText";
import "./register.scss";
import Button from "../../components/Button/Button";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [hide, setHide] = useState(false);
    const [logado, setLogado] = useState(false);
    const [messageError, setErrorMessage] = useState("");

    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSignIn = () => {
        if (validateEmail(email) && password.length > 5) {
            createUserWithEmailAndPassword(email, password);
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLogado(true);
                } else {
                    setErrorMessage("Usuário ou senha inválidos");
                }
            });
            setErrorMessage("");
        } else {
            setLogado(false);
            setErrorMessage("Usuário ou senha inválidos");
        }
    };
    return (
        <Layout title="Home">
            <section className="login_content">
                {
                    <span
                        className={`${hide ? "input-focus" : "input-disfocus"}`}
                    />
                }
                <h1 className="section-title">Cadastro</h1>
                <div className="input-container">
                    <label
                        className="label-input"
                        onChange={() => setErrorMessage("")}
                    >
                        <InputText
                            type="email"
                            placeholder={"Informe seu email"}
                            change={(e) => setEmail(e.target.value)}
                            focus={() => setHide(true)}
                            disfocus={() => setHide(false)}
                        />
                        {email && <span className="span-input">E-mail</span>}
                    </label>
                    <label
                        className="label-input"
                        onChange={() => setErrorMessage("")}
                    >
                        <InputText
                            type={showPass ? "text" : "password"}
                            placeholder={"Informe sua senha"}
                            change={(e) => setPassword(e.target.value)}
                            focus={() => setHide(true)}
                            disfocus={() => setHide(false)}
                        />
                        <label className="show-pass">
                            {!showPass ? "Mostrar" : "Ocultar"}
                            <input
                                type="checkbox"
                                onChange={() => setShowPass(!showPass)}
                            />
                        </label>
                        {password && <span className="span-input">Senha</span>}
                    </label>
                </div>
                {messageError && (
                    <span className="error-message">*{messageError}</span>
                )}
                {logado && <Navigate to="/login" />}
            </section>
            <section className="buttons-container buttons-login">
                <Button
                    change={handleSignIn}
                    status={email && password ? true : false}
                >
                    <Link to={logado ? "/login" : "#"}>Cadastrar</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/login">Voltar</Link>
                </SecondaryButton>
            </section>
        </Layout>
    );
};

export default Register;
