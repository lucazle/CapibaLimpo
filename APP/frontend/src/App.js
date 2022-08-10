import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TelaInicial from './pages/tela-inicial.js';
import Home from './pages/home.js'
import Cadastro from './pages/tela-cadastro.js'
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </div>
    );
  }
}

export default App;