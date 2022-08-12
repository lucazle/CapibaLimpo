import React from 'react';
import './../css/tela-cadastro.css';
import logoTela from '../imagens/icon-login.png';

// import bootstrap from './assets/bootstrap/css/bootstrap.css'

const TelaCadastro = () => {

    return (

        <div>
            <div>
                <img className='logo-cadastro'
                    src={logoTela}
                    alt="logo-projeto"/>
            </div>
            <div className="container">
                <div className='card-cadastro'>
                  <div className='box-cadastro'>
                    <h2>Crie sua conta</h2>
                    <form id="register-form">
                        <div className="user-box">
                            <input className="input-texto" type="text" placeholder="Digite seu nome completo" name="nome" id="nome"/>
                            <input className="input-texto" type="text" placeholder="Digite seu CPF ex: 000.000.000-00" name="cpf" id="cpf"/>
                            <input className="input-texto" type="email" placeholder="E-mail" name="email" id="email"/>
                            <input className="input-texto" type="text" placeholder="Digite seu telefone" name="telefone" id="telefone"/>
                            <input className="input-texto" type="date" placeholder="Data de Nascimento" name="data de nascimento" id="data de nascimento"/>
                            <input className="input-texto" type="password" placeholder="Senha" name="senha" id="senha"/>
                            <input className="input-texto" type="password" placeholder="Confirmar senha" name="senha" id="senha"/>
                        </div>
                        <div className="btn-cadastro">
                            <button type="submit" className="botao-submit">
                                <b>CONFIRMAR</b>
                            </button>
                            <button type="reset" className="botao-submit">
                                <b>Cancelar</b>
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TelaCadastro;
