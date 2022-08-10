import React from "react";
import './../css/navbar.css';


 const NavBar = () =>{
    return (
        <div>
            <nav class="navigation">
            <a href="#" class="logo">CapibaLimpo</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#"></a></li>
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">Agendar uma data</a></li>
                <li class="nav-item"><a href="#">Parceiros</a></li>
                <li class="nav-item"><a href="#">Sobre nós</a></li>
                
                <i class='bx bx-search'></i>
            </ul>
            <div class="menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            </nav>
        </div>
    )
 
 }
export default NavBar;