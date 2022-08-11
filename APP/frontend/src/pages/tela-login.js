import React from 'react';
import './../css/tela-login.css';
import TelaLogin from '../imagens/icon-login.png'

const Login = () => {
    return (
        <div>
            <div>
                <img id= "bk-ground" src={TelaLogin} alt="logoProjeto"/>
            </div>
            <div className="main-login">
                <div className="login-box">
                    <div className="login-form">
                        <div className="left-login">
                            <div className="card-login">

                                <p className="left-login-title">Olá, faça seu login</p>

                                <div className="textfield">
                                    <label for="user">Usuário</label>
                                    <input type="text" name="user" placeholder="Digite seu Usuário"/>
                                </div>

                                <div className="textfield">
                                    <label for="password">Senha</label>
                                    <input type="password" name="password" Placeholder="Digite sua senha"/>
                                </div>

                                <button className="btn-login">
                                        <a href="/home">Login</a>
                                </button>

                                <button className="btn-register">
                                        <a href="/cadastro">Cadastrar-se</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
