import React from "react";
import "./institution.css";

const Institution = ()=>{
    return(
        <div class="wrapper">
            <Card
            img="Anunciación.jpeg"
            tittle="Colegio La Anunciación - Cartagena"
            description="El colegio La Anunciación de Cartagena es un colegio católico 
            de carácter privado, tiene como misión brindar una educación 
            integral de calidad teniendo en cuenta la formación de líderes 
            con valores encausados con una educación liberadora que 
            oriente a los niños y jóvenes en los principios de trascendencia 
            espiritual, social, académica y tecnológica, donde se 
            comprometan con la justicia, el respeto y la dignidad humana."
            cel="6690584"/>

            <Card
            img="Recreo.jpeg"
            tittle="Centro de educación el Recreo"
            description="El Centro de Educación el Recreo es una Institución 
            Educativa con fundamentos cristianos que ofrece educación integral 
            a la población en edad escolar de Cartagena; promoviendo los valores 
            universalmente establecidos para una mejor convivencia social, desarrollando 
            un alto nivel de excelencia académica, científica, tecnológica y humanística, 
            a través de una formación con un alto grado de responsabilidad, disciplina y excelencia."
            cel="6903987"/>

            <Card
            img="Madre Laura.jpeg"
            tittle="INSTITUCIÓN EDUCATIVA MADRE LAURA"
            description="La institución educativa Madre Laura es una entidad de carácter oficial 
            que ofrece una educación de calidad, promueve actitudes investigativas , culturales, 
            deportivas y tecnológicas, con principios  y  valores,  que  forman integralmente estudiantes 
            constructores de una sociedad más justa."
            cel="6752359"/>
        </div>
    )
}

function Card(props){
    return(
        <div class="card">
            <img src={props.img} class="card_img"/>
            <div class="card_body">
                <h2 class="card_tittle">{props.tittle}</h2>
                <p class="card_description">{props.description}</p>
                <h3>{props.cel}</h3>
            </div>
        </div>
    )
}

export default Institution;