import React from 'react';
import './../css/tela-cadastro.css';
import logoTela from '../imagens/LOGOLATERAL.png';

// import bootstrap from './assets/bootstrap/css/bootstrap.css'

const TelaCadastro = () => {

  return (
   <div className="container">
     <div className="container-cadastro">
       <div className="wrap-cadastro">
         <form className="cadastro-form">

           <span className="cadastro-form-title"> Crie sua conta</span>

           <span className="cadastro-form-title">
             <img src={logoTela} alt="logoProjeto"/>
           </span>
            
            <div className="wrap-input">
              <input type="text"/>
               <span className="focus-input" data-placeholder="Nome Completo"/>
            </div>
            
            <div className="wrap-input">
              <input type="text"/>
               <span className="focus-input" data-placeholder="CPF ex: 000.000.000-00"/>
            </div>

            <div className="wrap-input">
              <input type="email"/>
               <span className="focus-input" data-placeholder="E-mail"/>
            </div>

            <div className="wrap-input">
              <input type="text"/>
               <span className="focus-input" data-placeholder="Digite seu telefone"/>
            </div>

            <div className="wrap-input">
              <input type="date"/>
               <span className="focus-input" data-placeholder="dd/mm/aaaa"/>
            </div>
           
            <div className="wrap-input">
              <input type="password"/>
               <span className="focus-input" data-placeholder="Senha"/>
            </div>

            <div className="wrap-input">
              <input type="password"/>
               <span className="focus-input" data-placeholder="Confirme sua senha"/>
            </div>

            <div> 
            <button className='btn-sm btn-success' type="submit"> Confirmar </button>
            </div>

            <div> 
            <button className='btn-sm btn-success' type="reset"> Cancelar </button>
            </div>


         </form>
       </div>
     </div>
   </div>
  );
}

export default TelaCadastro;
