import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      alert('Inicio de sesión exitoso, bienvenido¡')
    } catch (error) {
      console.error("Error iniciando sesión:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login:</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <fieldset className="form-fieldset">
          <label htmlFor="email">Email:</label>
          <input className="form-input" type="email" onChange={(e) => setEmail(e.target.value)} />
        </fieldset>
        <fieldset className="form-fieldset">
          <label htmlFor="password">Password:</label>
          <input className="form-input" type="password" onChange={(e) => setPassword(e.target.value)} />
        </fieldset>

        <button className="submit__btn" type="submit">Submit</button>
      </form>
      <p>Not registered yet? <NavLink to="/register">Register Here</NavLink></p>
    </div>
  );
};

export default LoginPage;