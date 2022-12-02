import React, { useState} from "react";
import Layout from "../../components/Layout/Layout";
import InputText from "../../components/InputText/InputText";
import "./login.scss";
import Button from "../../components/Button/Button";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleSignIn = () => {
        signInWithEmailAndPassword(email, password);
    };
    return (
        <Layout title="Home">
            <section className="login_content">
                <h1 className="section-title">Login</h1>
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
                    Teste
                    {/* <Link to="/">Entrar</Link> */}
                </Button>
                <SecondaryButton>
                    <Link to="/register">Cadastrar-se</Link>
                </SecondaryButton>
            </section>
        </Layout>
    );
};

export default Login;
