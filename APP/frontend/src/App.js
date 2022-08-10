import React, { Component } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import './App.css';
import TelaInicial from './pages/tela-inicial.js';
import Home from './pages/home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CAVALO</h1>
        <Routes>
          <Route path='/' element={<TelaInicial />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;