import React from 'react';
import './perfil_est.css';


const Perfil_est = () =>{
    
    return(
        <>
            <body>
                <div class="perfil-Estud">
                <div class="sección-perfilE">
                    <div class="icon">
                        <img class="icono" src="user-icon.png" alt="Icono de Usuario"/>	
                    </div>
                </div>
                <div class="info-Nombre">
                    <label for="text">Apellidos del Estudiante:</label>
                    <label for="text">Nombres del Estudiante:</label>
                </div>
                <div class="info-General">
                    <div class="input-container">
                        <i class="fa-solid fa-circle-info"></i>
                        <label for="text">Tipo de Identificación:</label>
                    </div>
                    
                    <div class="input-container">
                        <i class="fa-solid fa-address-card"></i>
                        <label for="text">Identificación:</label>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-calendar-days"></i>
                        <label for="text">Fecha de Nacimiento:</label>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-flag"></i>
                        <label for="text">Nacionalidad:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-file-medical"></i>
                        <label for="text">Tipo de Sangre:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-venus-mars"></i>
                        <label for="text">Género:</label>
                    </div>
                </div>	
                <div class="info-Contacto">
                    <div class="input-container">
                        <i class="fa-solid fa-house-chimney"></i>
                        <label for="text">Dirección:</label>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-city"></i>
                        <label for="text">Barrio:</label>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-road"></i>
                        <label for="text">Localidad:</label>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-phone"></i>
                        <label for="text">Teléfono:</label>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-circle-info"></i>
                        <label for="text">Estrato:</label>
                    </div>
                </div>
                <div class="info-PadresAcudiente">
                    <div class="info-PM">
                        <div class="input-container">
                            <i class="fa-solid fa-user-group"></i>
                            <label for="text">Nombre del Padre:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-address-card"></i>
                            <label for="text">Número de la Cédula:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-envelope"></i>
                            <label for="text">Correo Electrónico:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-phone"></i>
                            <label for="text">Teléfono / Celular:</label>
                        </div>
                    </div>
                    
                    <div class="info-PM">
                        <div class="input-container">
                            <i class="fa-solid fa-user-group"></i>
                            <label for="text">Nombre de la Madre:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-address-card"></i>
                            <label for="text">Número de la Cédula:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-envelope"></i>
                            <label for="text">Correo Electrónico:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-phone"></i>
                            <label for="text">Teléfono / Celular:</label>
                        </div>
                    </div>
                </div>
                <div class="info-PadresAcudiente">
                    <div class="info-PM">
                        <div class="input-container">
                            <i class="fa-solid fa-user-group"></i>
                            <label for="text">Nombre del Acudiente Legal:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-address-card"></i>
                            <label for="text">Número de la Cédula:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-calendar-days"></i>
                            <label for="text">Fecha de Nacimiento del Acudiente:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-phone"></i>
                            <label for="text">Teléfono / Celular:</label>
                        </div>

                        <div class="input-container">
                            <i class="fa-solid fa-location-dot"></i>
                            <label for="text">Dirección:</label>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <label for="text">Observaciones:</label>
                </div>
            </div>
            </body>
        </>
    )
}

export default Perfil_est;