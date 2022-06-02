import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './inscription_est.css';
import '../Views/register.css';


const Inscription_est = () =>{
	
	const baseURL = "https://imee-app-backend.herokuapp.com/estudiantes/"
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
	
	const handleSubmit = e =>{
		e.preventDefault();
		axios.post( baseURL, {
			nombres, 
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
			
		}, {
			headers: {
				Authorization: 'Token ${token}'
			}
		})
		.then(res=>{
			console.log(res);
			console.log(res.data);
			window.location = "/my-profile"
		})
	}
	

    return(
        <>
		<body class="lrbody">
            <div class="form-inscrip">
			<b><h1>Formulario de Inscripción</h1></b>
			<form onSubmit={handleSubmit}>
				{/* <!--------------Info Estudiante-----------> */}
				<div class="form-nombre">
					<input type="text" placeholder="Apellidos del Estudiante *" onChange={(e) => setApellido(e.target.value)} required/>
					<input type="text" placeholder="Nombres del Estudiante *" onChange={(e) => setNombre(e.target.value)} required/>
				</div>
				<div class="form-infoE">
					<label for="number">Identificación:</label>
					<select name="lista-selec" onChange={(e) => setIdt(e.target.value)}>
						<option >...</option>
						<option value="1">RC</option>
						<option value="2">TI</option>
						<option value="3">CC</option>
						<option value="4">Otro</option>
					</select>
					<input type="text" maxlength="10" placeholder="Número de Identificación *" onChange={(e) => setId(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
					
				</div>

				<div class="form-infoE">
				<label>Fecha de Nacimiento:</label>
					<input type="date" step="1" max="2018-03-31" min="2004-01-01" onChange={(e) => setDate(e.target.value)}/>
					<input type="text" placeholder="Nacionalidad *" onChange={(e) => setNacionalidad(e.target.value)} required/>
				</div>

				<div class="form-direccion">
					<input type="text" placeholder="Dirección *"  onChange={(e) => setDireccion(e.target.value)} required/>
					<input type="text" placeholder="Barrio *" required onChange={(e) => setBarrio(e.target.value)} />
					<input type="text" placeholder="Localidad *" onChange={(e) => setLocalidad(e.target.value)} required/>
					<input type="text" maxlength="10" placeholder="Teléfono *" onChange={(e) => setPhone(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>

				{/* <!--------------Info Estrato-----------> */}
				<div class="form-infoE2">
					<label for="number">Estrato:</label>
					<input type="number" min="1" max="6" onChange={(e) => setEstrato(e.target.value)} required/>
					{/* <label for="number">Nivel del Sisbén:</label>
					<input type="number" min="1" max="3" required/>
					<label for="number">Puntaje del Sisbén:</label>
					<input type="number" step="any" min="0" max="80"required/> */}
					<input type="text" placeholder="E.P.S. *" onChange={(e) => setEps(e.target.value)} required/>

				{/* <!--------------Info Sanguínea-----------> */}
					
				</div>
				<div class="form-infoE3">
						<label>Tipo Sanguíneo:</label>
						<select name="lista-selec" onChange={(e) => setTsangre(e.target.value)}>
							<option >...</option>
							<option value="1">O</option>
							<option value="2">A</option>
							<option value="3">B</option>
							<option value="4">AB</option>
						</select>
						<label>RH:</label>
						<select name="lista-selec" onChange={(e) => setRh(e.target.value)}>
							<option >...</option>
							<option value="1">+</option>
							<option value="2">-</option>
						</select>
						<label>Género:</label>
						<select name="lista-selec" onChange={(e) => setGender(e.target.value)}>
							<option >...</option>
							<option value="1">M</option>
							<option value="2">F</option>
						</select>
				</div>

				<div class="title"><b><h3>Información Familiar</h3></b></div>
				<br/>		
				{/* <!--------------Info del Padre-----------> */}
				<div class="sub-label">
					<label>Información del Padre:</label>
				</div>
				
				<div class="form-InfP">
					<input type="text" placeholder="Nombre *" onChange={(e) => setNombreP(e.target.value)} required/>
					<input type="text" maxlength="10" placeholder="Cédula *"  onChange={(e) => setIdP(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
					<input type="email" placeholder="E-mail*" onChange={(e) => setEmailP(e.target.value)} required/>
					<input type="text" maxlength="10" placeholder="Teléfono*" onChange={(e) => setPhoneP(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>
				<br/>

			{/* 	<!--------------Info de la Madre-----------> */}
				<div class="sub-label">
					<label>Información de la Madre:</label>
				</div>
				
				<div class="form-InfM">
					<input type="text" placeholder="Nombre *" onChange={(e) => setNombreM(e.target.value)} required/>
					<input type="text" maxlength="10" placeholder="Cédula *" onChange={(e) => setIdM(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
					<input type="email" placeholder="E-mail *" onChange={(e) => setEmailM(e.target.value)} required/>
					<input type="text" maxlength="10" placeholder="Teléfono*" onChange={(e) => setPhoneM(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>
				<br/>
				<div class="sub-label">
					<label>Información del Acudiente:</label>
				</div>
	
				<div class="form-InfA">
					<input type="text" placeholder="Nombre (Legalmente Establecido) *" onChange={(e) => setNombreA(e.target.value)}required/>
					<input type="text" maxlength="10" placeholder="Cédula *" class="form-control" onChange={(e) => setIdA(e.target.value)}required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
					<input type="text" maxlength="10" placeholder="Teléfono *" class="form-control" onChange={(e) => setPhoneA(e.target.value)} required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>
				<div class="form-InfA2">
					<input type="text" placeholder="Dirección *" onChange={(e) => setDireccionA(e.target.value)} required/>
					<label>Fecha de Nacimiento:</label>
					<input type="date" step="1" max="2004-01-01" onChange={(e) => setDateA(e.target.value)}/>
				</div>

				<div class="form-Ob">
					<label>Observaciones:</label>
					<input onChange={(e) => setObservation(e.target.value)} type="text"/>
				</div>
				<input class="boton" type="submit" value="Terminar Registro" /><br /><br />
			</form>
			
		</div>
	
		</body>
        </>
    )
}

export default Inscription_est;