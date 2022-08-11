import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TelaInicial from './pages/tela-inicial.js';
import Home from './pages/home.js'
import Cadastro from './pages/tela-cadastro.js'
import Login from './pages/tela-login.js'
import NavBar from './components/navBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    );
  }
}

export default App;