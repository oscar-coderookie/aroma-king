import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './RegisterPage.scss';

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/login");
            alert('Usuario registrado correctamente')
        } catch (error) {
            console.error("Error registrando usuario:", error.message);
        }
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Register</h2>
            <form className="login-form" onSubmit={handleRegister}>
                <fieldset className="form-fieldset">
                    <label htmlFor="email">Email:</label>
                    <input className="form-input" type="email" required placeholder="Enter a valid email"  onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset className="form-fieldset">
                    <label htmlFor="password">Password:</label>
                    <input className="form-input" type="password" placeholder="At least 6 characters"  onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
                <button className="submit__btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;