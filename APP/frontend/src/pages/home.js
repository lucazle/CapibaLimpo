import React from 'react';
import './../css/tela-home.css';
import logoHome from '../imagens/logo.png';
import NavBar from '../components/navBar'; 

const Home = () => {
    return (
        <div>
            <NavBar/>
            <main>
                <section class="home">
                    <div class="home-text">
                        <h4 class="text-h4">Fazendo a diferença</h4>
                        <h1 class="text-h1">Torne o mundo um lugar sustentável</h1>
                        <p></p>
                        <a href="#" class="home-btn">Saiba mais</a>
                    </div>
                    <div class="home-img">
                        <img src={logoHome}
                            alt="Logo"/>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Home;
