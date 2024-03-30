import React from 'react';
import logo from '../../img/logo-login.png';
import './styles.css';
import Input from '../../components/Input';

const TelaLogin = () => {
  return (
    <div className="card-container">
      <img src={logo} alt="Logo de Login" className="logo" />
      <div className="card">
        <div className="card-body">

          <h1>Login</h1>
          <hr className="blue-line" />

          <div className="inputs">
            <Input label="Usuário"/> 
            <Input label="Senha"/>
          </div>

          <button className="login-button">Entrar</button>

        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
