import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import InputText from "../../components/InputText/InputText";
import "./login.scss";
import Button from "../../components/Button/Button";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { Reservation } from "../../contexts/Reservation";
import { Navigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loader from "../../components/Loader/Loader";

const Login = () => {
    const { setLogado, logado, setCurrentUser } = useContext(Reservation);
    const [email, setEmail] = useState("");
    const [hide, setHide] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [signInWithEmailAndPassword, error] =
        useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleSignIn = () => {
        signInWithEmailAndPassword(email, password);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogado(true);
                setCurrentUser(user);
            } else {
                setLogado(false);
            }
        });
    };
    document.body.requestFullscreen();

    return (
        <Layout title="Home">
            {loading && <Loader />}
            {logado && <Navigate to="/" />}
            <section className="login_content">
                {
                    <span
                        className={`${hide ? "input-focus" : "input-disfocus"}`}
                    />
                }
                <h1 className="section-title">Login</h1>
                <div className="input-container">
                    <InputText
                        type="email"
                        placeholder={"Informe seu email"}
                        change={(e) => setEmail(e.target.value)}
                        focus={() => setHide(true)}
                        disfocus={() => setHide(false)}
                    />
                    <InputText
                        type="password"
                        placeholder={"Informe sua senha"}
                        change={(e) => setPassword(e.target.value)}
                        focus={() => setHide(true)}
                        disfocus={() => setHide(false)}
                    />
                    {error && "EMAIL OU SENHA INVALIDOS"}
                </div>
            </section>
            <section className="buttons-container buttons-login">
                <Button
                    change={handleSignIn}
                    status={email && password ? true : false}
                >
                    <Link to={"#"}>Entrar</Link>
                </Button>
                <SecondaryButton>
                    <Link to="/register">Cadastrar-se</Link>
                </SecondaryButton>
            </section>
        </Layout>
    );
};

export default Login;
