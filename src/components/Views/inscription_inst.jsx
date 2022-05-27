import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './inscription_inst.css';
import '../Views/register.css';


const Inscription_inst =()=>{
    baseURL = "https://imee-app-backend.herokuapp.com/instituciones"
    const [idCol, setId] = useState("");
	const [nombreInsti, setnombreInsti] = useState("");
    const [descripcionInsti, setdescripcionInsti] = useState("");
	const [direccionInsti, setdireccionInsti] = useState("");
	const [barrioInsti, setbarrioInsti] = useState("");
	const [localidadInsti, setlocalidadInsti] = useState("");
    const [correoInsti, setcorreoInsti] = useState("");
	const [telefonoInsti, settelefonoInsti] = useState("");
    const [telefonoFijoInsti, settelefonoFijoInsti] = useState("");
	const [nit, setnit] = useState("");
	const [codigoDANE, setcodigoDANE] = useState("");
	const [tipoZona, settipoZona] = useState("");
	const [sectorInsti, setsectorInsti] = useState("");
	const [nombreRector, setnombreRector] = useState("");
	const [usuario, setusuario] = useState("");

    function POST(){
		axios.post( baseURL, {
			idCol, 
            nombreInsti,
            descripcionInsti,
            direccionInsti,
            barrioInsti,
            localidadInsti, 
            correoInsti, 
            telefonoInsti,
            telefonoFijoInsti, 
            nit, 
            codigoDANE,
            tipoZona,
            sectorInsti,
            nombreRector,
            usuario
		})
		.then((res =>{
			setPost(res.data)
		}))
	}
	
    return(
        <body class="lrbody">
            <div class="form-regInst">
                <h1>Formulario de Registro Institución</h1>
                <form method='POST' onSubmit={(e) => onSubmit(e, idCol, nombreInsti,descripcionInsti,direccionInsti,barrioInsti,localidadInsti, correoInsti, telefonoInsti,telefonoFijoInsti, nit, codigoDANE,tipoZona,sectorInsti,nombreRector,usuario)}>
                    <div class="form">
                        <div class="text">
                            
                            <input type="text" placeholder="Nombre Institucional *" onChange={(e) => setnombreInsti(e.target.value)} required/>
                            <label>Sector:</label>
                            <select name="lista-selec" onChange={(e) => setsectorInsti(e.target.value)}>
                                <option >...</option>
                                <option value="1">Privado</option>
                                <option value="2">Oficial</option>
                            </select>
                        </div>
                        
                        <div class="text">
                            <input type="text" placeholder="Direccion Sede *" onChange={(e) => setdireccionInsti(e.target.value)} required/> 
                            <input type="text" placeholder="Barrio *" onChange={(e) => setbarrioInsti(e.target.value)} required/>
                            <input type="text" maxlength="4" onChange={(e) => setTotalEst(e.target.value)} placeholder="Total Estudiantes *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
                        <div class="text">
                            <input type="text" placeholder="Nombre del Rector *" onChange={(e) => setnombreRector(e.target.value)} required/>
                            <input type="text" maxlength="10" placeholder="Número Fijo *" onChange={(e) => settelefonoFijoInsti(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                            <input type="text" maxlength="10" placeholder="Celular *" onChange={(e) => settelefonoInsti(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
            
                        
                        <input type="email" placeholder="Correo Electrónico *" onChange={(e) => setcorreoInsti(e.target.value)} required/>
                        <div class="text">
                            <input type="text" placeholder="Localidad *" onChange={(e) => setlocalidadInsti(e.target.value)} required/>
                            <label>Tipo de Zona:</label>
                            <select name="lista-selec" onChange={(e) => settipoZona(e.target.value)}>
                                <option >...</option>
                                <option value="1">Urbano</option>
                                <option value="2">Rural</option>
                            </select>
                        </div>
                        
                        <div class="text">
                            <input type="text" placeholder="Unalde *" onChange={(e) => set(e.target.value)} required/>
                            <input type="text" maxlength="5" onChange={(e) => setId(e.target.value)} placeholder="Identificación Colegio (Id_Col) *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
                        <div class="text">
                            <input type="text" maxlength="14" onChange={(e) => setcodigoDANE(e.target.value)} placeholder="Código Dane Principal *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                            <input type="text" maxlength="10" placeholder="NIT / RUT *" onChange={(e) => setnit(e.target.value)} class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
                        
                        
                        <div class="sub-label">
                            <label>Seleccione aquellos niveles de aprendizaje que posee la institución: </label><br/>
                            <input type="checkbox" onChange={(e) => setusuario(e.target.value)}  value="Preescolar"/>
                            <label>Preescolar</label><br/>
                            <input type="checkbox" onChange={(e) => setusuario(e.target.value)} value="Primaria" id='Primaria'/>
                            <label>Primaria</label><br/>
                    
                            
                            <input type="checkbox" onChange={(e) => setusuario(e.target.value)} value="Bachillerato"/>
                            <label>Bachillerato</label><br/>
                            <input type="checkbox" onChange={(e) => setusuario(e.target.value)} value="Media"/>
                            <label>Media</label>  
                        </div>
                        <br/>
                        
                    </div>
                    <input class="boton" type="submit" value="Terminar Registro" /><br /><br />
                </form>
            </div>
        </body>
    )
}


export default Inscription_inst;