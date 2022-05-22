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
        <section class="inicio2" id="inicio2">
            
        <div class="image2">
                    <img src="/matriculando.png"/>
                </div>
            <div class="content">
                <h3>Descripción del <span>problema</span></h3>
                <p>
                    Cada año cuando las instituciones y colegios realizan los procesos de inscripción y matrículas se 
                    presentan múltiples dificultades para poder llevarse a cabo, iniciando desde los extensos 
                    procedimientos los cuales no están automatizados, sino que son realizados por medio de un formato escrito 
                    que en muchas ocasiones es tedioso y generan grandes dificultades al momento de rellenarlos, 
                    ya que estos tienden a saltarse alguna información importante, no entenderse o simplemente como son documentos
                    físicos estos tienden a extraviarse y recibir algunos daños.
                </p>
            </div>
        </section>
        </>
    )
}

export default Home;