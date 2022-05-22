import { Button } from '../Button';
import React from 'react';
import './Home.css';



const Home = () =>{
    return(
        <>
        <section class="inicio" id="inicio">
            <div class="content">
                <h3>Inscripción de Matriculas <span><br/>IMEE</span></h3>
                <p>
                    El sistema de Inscripción de Matrículas Estudiantiles Escolares (IMEE) es una herramienta que da apoyo al proceso de matrícula estudiantil.
                </p>
                <a href="#"><Button>Seguir</Button></a>
            </div>
            <div class="image">
                <img src="/IMEE-verde.png"/>
            </div>
        </section>
        </>
    )
}

export default Home;