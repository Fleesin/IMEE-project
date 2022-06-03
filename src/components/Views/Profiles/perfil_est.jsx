import React , {useState, useEffect} from 'react';
import axios from 'axios';
import './perfil_est.css';


const Perfil_est = () =>{
    const baseURL="https://imee-app-backend.herokuapp.com/estudiante/"
    
    const [nombres, setNombre] = useState("");
    const [apellidos, setApellido] = useState("");
	const [identificacion, setId] = useState("");
	const [tipoIdent, setIdt] = useState("");
	const [fechaNacimiento, setDate] = useState("");
	const [nacionalidad, setNacionalidad] = useState("");
	const [direccion, setDireccion] = useState("");
	const [barrio, setBarrio] = useState("");
	const [localidad, setLocalidad] = useState("");
	const [telefono, setPhone] = useState("");
	const [estrato, setEstrato] = useState("");
	const [eps, setEps] = useState("");
	const [tipoSanguinio, setTsangre] = useState("");
	const [rh, setRh] = useState("");
	const [genero, setGender] = useState("");

	const [nomPadre, setNombreP] = useState("");
	const [IdePadre, setIdP] = useState("");
	const [correoPadre, setEmailP] = useState("");
	const [telPadre, setPhoneP] = useState("");
	const [nomMadre, setNombreM] = useState("");
	const [ideMadre, setIdM] = useState("");
	const [correoMadre, setEmailM] = useState("");
	const [telMadre, setPhoneM] = useState("");
	const [NomAcu, setNombreA] = useState("");
	const [IdeAcu, setIdA] = useState("");
	const [fechaNacAcu, setDateA] = useState("");
	const [telAcu, setPhoneA] = useState("");
	const [direccionAcu, setDireccionA] = useState("");
    

    const [id, setId2] = useState("");
    useEffect(() => {
        axios.get(`${baseURL}4/`, {
            nombres,
            id, 
            apellidos, 
            identificacion,
            tipoIdent,
            fechaNacimiento,
            nacionalidad,
            direccion,
            barrio,
            localidad,
            telefono,
            estrato,
            eps,
            tipoSanguinio,
            rh,
            genero,
            IdePadre,
            correoPadre,
            telPadre,
            nomPadre,
            nomMadre,
            ideMadre,
            correoMadre,
            telMadre,
            NomAcu,  	
            IdeAcu,
            fechaNacAcu,
            telAcu,
            direccionAcu
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            
        })
      }, [])

    
	
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
                    <label for="text" onChange ={() => setApellido(target.value)}>Apellidos del Estudiante: {apellidos}</label>
                    <label for="text" onChange ={() => setNombre(target.value)}>Nombres del Estudiante: {nombres}</label>
                </div>
                <div class="info-General">
                    <div class="input-container">
                        <i class="fa-solid fa-circle-info"></i>
                        <label for="text">Tipo de Identificación:</label>
                    </div>
                    
                    <div class="input-container">
                        <i class="fa-solid fa-address-card"></i>
                        <label for="text" >Identificación:</label>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-calendar-days"></i>
                        <label for="text" >Fecha de Nacimiento:</label>
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