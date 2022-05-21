import React from 'react';
import './user_type.css';


const User_type = () =>{
    return(
        
        <>
            <body class="lrbody">
            <h1>¿Qué tipo de usuario eres?</h1><br/>
                <div class="button_circle">
                    <div class="round-button"><div class="round-button-circle"><a href="/inscription_est" class="round-button"><i class="fa-solid fa-user-graduate fa-3x"/><br/><br/>Estudiante</a></div></div>
                    <div class="round-button"><div class="round-button-circle"><a href="/inscription_inst" class="round-button"><i class="fa-solid fa-school fa-3x"/><br/><br/>Institución</a></div></div>
                </div>
                <div class="button_circle_mobile">
                    <div class="round-button"><div class="round-button-circle"><a href="/inscription_est" class="round-button"><i class="fa-solid fa-user-graduate fa-3x"/><br/><br/>Estudiante</a></div></div>
                    <div class="round-button"><div class="round-button-circle"><a href="/inscription_inst" class="round-button"><i class="fa-solid fa-school fa-3x"/><br/><br/>Institución</a></div></div>
                </div>
            </body>
        </>
    )
}

export default User_type;