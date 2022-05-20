import React from 'react';
import './inscription_inst.css';

const Inscription_inst =()=>{
    return(
        <body>
            <div class="form-regInst">
                <h1>Formulario de Registro Institución</h1>
                <form>
                    <div class="form">
                        <div class="text">
                            
                            <input type="text" placeholder="Nombre Institucional *" required/>
                            <label>Sector:</label>
                            <select name="lista-selec">
                                <option >...</option>
                                <option value="1">Privado</option>
                                <option value="2">Oficial</option>
                            </select>
                        </div>
                        
                        <div class="text">
                            <input type="text" placeholder="Direccion Sede *" required/> 
                            <input type="text" placeholder="Barrio *" required/>
                            <input type="text" maxlength="4" placeholder="Total Estudiantes *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
                        <div class="text">
                            <input type="text" placeholder="Nombre del Rector *" required/>
                            <input type="text" maxlength="10" placeholder="Número Fijo *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                            <input type="text" maxlength="10" placeholder="Celular *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
            
                        
                        <input type="email" placeholder="Correo Electrónico *" required/>
                        <div class="text">
                            <input type="text" placeholder="Localidad *" required/>
                            <label>Tipo de Zona:</label>
                            <select name="lista-selec">
                                <option >...</option>
                                <option value="1">Urbano</option>
                                <option value="2">Rural</option>
                            </select>
                        </div>
                        
                        <div class="text">
                            <input type="text" placeholder="Unalde *" required/>
                            <input type="text" maxlength="5" placeholder="Identificación Colegio (Id_Col) *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
                        <div class="text">
                            <input type="text" maxlength="14" placeholder="Código Dane Principal *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                            <input type="text" maxlength="10" placeholder="NIT / RUT *" class="form-control" required autocomplete="off" onkeypress="return (event.charCode >= 48 && event.charCode <= 57)" min="1" />
                        </div>
                        
                        
                        <div class="sub-label">
                            <label>Seleccione aquellos niveles de aprendizaje que posee la institución: </label><br/>
                            <input type="checkbox" value="Preescolar"/>
                            <label>Preescolar</label><br/>
                            <input type="checkbox" value="Primaria" id='Primaria'/>
                            <label>Primaria</label><br/>
                    
                            
                            <input type="checkbox" value="Bachillerato"/>
                            <label>Bachillerato</label><br/>
                            <input type="checkbox" value="Media"/>
                            <label>Media</label>  
                        </div>
                        <br/>
                        
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
    )
}


export default Inscription_inst;