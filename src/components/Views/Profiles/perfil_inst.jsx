import React from 'react';
import './perfil_inst.css';

const Perfil_inst = () =>{
    
    return(
        <>
            <body>
            <div class="perfil-Insti">
                <div class="sección-perfil">
                    <div class="icon">
                        <img class="icono" src="icon-institution.png" alt="Icono de Institución"/>	
                    </div>
                </div>
                <div class="info-Nombre">
                    <label for="text">Nombre Insitucional:</label>
                    <label for="text">Sector:</label>
                </div>
                <div class="info-General">
                    <div class="input-container">
                        <i class="fa-solid fa-circle-info"></i>
                        <label for="text">Nombre del Rector:</label>
                    </div>
                    
                    <div class="input-container">
                        <i class="fas fa-school"></i>
                        <label for="text">Identificación Colegio:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-info-circle"></i>
                        <label for="text">Código del DANE:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-id-card"></i>
                        <label for="text">NIT/RUT:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-user-graduate"></i>
                        <label for="text">Total Estudiantes:</label>
                    </div>
                </div>	
                <div class="info-Contacto">
                    <div class="input-container">
                        <i class="fas fa-map-marker-alt"></i>
                        <label for="text">Dirección:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-building"></i>
                        <label for="text">Barrio:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-phone-alt"></i>
                        <label for="text">Número Fijo:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-mobile-alt"></i>
                        <label for="text">Número Celular de Contacto:</label>
                    </div>

                    <div class="input-container">
                        <i class="fas fa-envelope"></i>
                        <label for="text">Correo Electrónico:</label>
                    </div>

                    <div class="input-container">
                            <i class="fas fa-briefcase"></i>
                            <label for="text">Niveles de aprendizaje que posee la institución:</label>
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

export default Perfil_inst;