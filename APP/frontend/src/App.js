import * as React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import './App.css';
import { telaInicial } from './pages/tela-inicial';

function App() {
  return (
    <div className="App">
       <h1>CAVALO</h1>
       <Router>
        <Routes>
           <Route exact path='/boi' element={<telaInicial />} />
        </Routes>
       </Router>
       
    </div>
  );
}

export default App;
