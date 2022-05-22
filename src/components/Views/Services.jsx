import { Button } from '../Button';
import React from 'react';
import './Home.css';



const Services = () =>{
    return(
        <>
        <section class="inicio2" id="inicio2">
            <div class="content">
                <h3>Para las <span><br/>Instituciones</span></h3>
                <p>
                    IMEE busca ayudar a los colegios e instituciones a que tengan la posibilidad 
                    de realizar matriculas de forma más ágil, y así disminuir la fatiga por todos los 
                    inconvenientes que se presentan en este proceso y a optimizarlo para que sea mucho 
                    más fácil y efectiva la inscripción en un colegio o institución de calidad dónde 
                    el estudiante pueda desarrollarse y aprender.  
                </p>
            </div>
            <div class="image2">
                <img src="/Institution.png"/>
            </div>
            
        </section>
        <section class="inicio2" id="inicio2">
            
        <div class="image2">
                    <img src="/form_digital.png"/>
                </div>
            <div class="content">
                <h3>Para el <span>estudiante</span> y <span>acudiente</span></h3>
                <p>
                Con IMEE los acudientes prodrán registrar al menor con sus datos, buscarán entre las instituciones 
                registradas, verán toda su información, el número de cupos para el curso y así realizarán una 
                pre-inscripción, de manera que se genere así una mayor solicitud de cupos a las escuelas, además 
                de la disminución de la desinformación de los datos de los estudiantes y la posibilidad de hacer
                todo esto desde la comodidad de sus hogares con lo que las instituciones recibirán la información.
                </p>
            </div>
        </section>
        </>
    )
}

export default Services;