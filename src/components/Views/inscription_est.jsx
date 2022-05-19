import React from 'react';
import './inscription_est.css';


const Inscription_est = () =>{
    return(
        <>
		<body class="lrbody">
            <div class="form-inscrip">
			<b><h1>Formulario de Inscripción</h1></b>
			<form>
				{/* <!--------------Info Estudiante-----------> */}
				<div class="form-nombre">
					<input type="text" placeholder="Apellidos del Estudiante *" required/>
					<input type="text" placeholder="Nombres del Estudiante *" required/>
				</div>
				<div class="form-infoE">
					<label for="number">Identificación:</label>
					<select name="lista-selec">
						<option >...</option>
						<option value="1">RC</option>
						<option value="2">TI</option>
						<option value="3">CC</option>
						<option value="4">Otro</option>
					</select>
					<input type="text" maxlength="10" placeholder="Número de Identificación *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
					<label>Fecha de Nacimiento:</label>
					<input type="date" step="1" max="2018-03-31" min="2004-01-01"/>
					<input type="text" placeholder="Nacionalidad *" required/>
				</div>

				<div class="form-direccion">
					<input type="text" placeholder="Dirección *" required/>
					<input type="text" placeholder="Barrio *" required/>
					<input type="text" placeholder="Localidad *" required/>
					<input type="text" maxlength="10" placeholder="Teléfono *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>

				{/* <!--------------Info Estrato-----------> */}
				<div class="form-infoE2">
					<label for="number">Estrato:</label>
					<input type="number" min="1" max="6" required/>
					{/* <label for="number">Nivel del Sisbén:</label>
					<input type="number" min="1" max="3" required/>
					<label for="number">Puntaje del Sisbén:</label>
					<input type="number" step="any" min="0" max="80"required/> */}
					<label>E.P.S:</label>
					<input type="text" placeholder="E.P.S. *" required/>

				{/* <!--------------Info Sanguínea-----------> */}
					
				</div>
				<div class="form-infoE3">
						<label>Tipo Sanguíneo:</label>
						<select name="lista-selec">
							<option >...</option>
							<option value="1">O</option>
							<option value="2">A</option>
							<option value="3">B</option>
							<option value="4">AB</option>
						</select>
						<label>RH:</label>
						<select name="lista-selec">
							<option >...</option>
							<option value="1">+</option>
							<option value="2">-</option>
						</select>
						<label>Género:</label>
						<select name="lista-selec">
							<option >...</option>
							<option value="1">M</option>
							<option value="2">F</option>
						</select>
				</div>

				<div class="title"><b><h3>Información Familiar</h3></b></div>

				{/* <!--------------Info del Padre-----------> */}
				<div class="sub_label">
					<b><label>Información del Padre:</label></b><br/>
				</div>
				
				<div class="form-InfP">
					<input type="text" placeholder="Nombre del Padre *" required/>
					<input type="text" maxlength="10" placeholder="Número de Cédula *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
					<input type="email" placeholder="Correo Electrónico *" required/>
					<input type="text" maxlength="10" placeholder="Teléfono / Celular*" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>

			{/* 	<!--------------Info de la Madre-----------> */}
				<div class="sub_label">
					<b><label>Información de la Madre:</label></b><br/>
				</div>
				
				<div class="form-InfM">
					<input type="text" placeholder="Nombre de la Madre *" required/>
					<input type="text" maxlength="10" placeholder="Número de Cédula *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
					<input type="email" placeholder="Correo Electrónico *" required/>
					<input type="text" maxlength="10" placeholder="Teléfono / Celular*" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>
				<div class="sub_label">
				<b><label>Información del Acudiente:</label></b><br/>
				</div>
				
				<div class="form-InfA">
					<input type="text" placeholder="Nombre del Acudiente (Legalmente Establecido) *" required/>
					<input type="text" maxlength="10" placeholder="Número de Cédula *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>
				<div class="form-InfA2">
					<input type="text" placeholder="Dirección *" required/>
					<label>Fecha de Nacimiento:</label>
					<input type="date" step="1" max="2004-01-01"/>
					<input type="text" maxlength="10" placeholder="Teléfono / Celular *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
				</div>

				<div class="form-Ob">
					<label>Observaciones:</label>
					<input type="text"/>
				</div>
				<div class="form-Au">
					<label>Autorización y concentimiento para la publicación de fotografías e imágenes con fines educativos</label>
					<select name="lista-selec">
						<option >...</option>
						<option value="1">Si</option>
						<option value="2">No</option>
					</select>
				</div>
			</form>
		</div>
		<div class="footer">	
			<footer>
				<p>
					IMEE (Inscripción de Matrículas Estudiantiles Escolares) <br/>
					Universidad de Cartagena<br/>
					Ivonne Núñez / Jean Quintana / Camilo Mendoza
				</p>
			</footer>
		</div>
		</body>
        </>
    )
}

export default Inscription_est;