import React from 'react';
import './../css/tela-login.css';
import TelaLogin from '../imagens/icon-login.png'

const Login = () => {
    return (
        <div>
            <div>
                <img id="bk-ground"
                    src={TelaLogin}
                    alt="logoProjeto"/>
            </div>
            <div className="login-box">
                <div className="card-login">
                    <p className="login-title">Olá, faça seu login</p>
                    <div className="textfield">
                        <label className='labelTL' for="user">Usuário</label>
                        <input className='inputTL' type="text" name="user" placeholder="Digite seu Usuário"/>
                    </div>
                    <div className="textfield">
                        <label className='labelTL' for="password">Senha</label>
                        <input className='inputTL' type="password" name="password" Placeholder="Digite sua senha"/>
                    </div>
                    <div className='card-buttons'>
                        <button className="buttonTL">
                            <a href="/home">
                                <p>Login</p>
                            </a>
                        </button>
                        <button className="buttonTL">
                            <a href="/cadastro">
                                <p>Cadastre-se</p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
