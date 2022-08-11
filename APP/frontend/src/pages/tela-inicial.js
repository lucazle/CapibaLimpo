import React from 'react';


const TelaInicial = () => {
    
    return (
        <div>
            <section id="container">

                <section class="volun">
                    <img class="icon" alt="img-voluntario" src="assets/img/icon-vol.png" width="30%"/>
                    <button class="button">
                        <a id="link" href="../Tela de Login/Html.2.html">
                            <h2>Voluntário</h2>
                        </a>
                    </button>
                </section>

                <section class="apoia">
                    <img class="icon" alt="img-apoiador" src="assets/img/icon-apo.png" width="30%"/>
                    <button class="button">
                        <h2>Apoiador</h2>
                    </button>
                </section>
            </section>
        </div>
    )
}
export default TelaInicial;
