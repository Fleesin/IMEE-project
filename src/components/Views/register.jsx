
import React from "react";
import './register.css';


const Register = () => {

    return (
    
        <><body class="lrbody">
            <div class="register-box">
                <h1>Registrate</h1>
                <form action="/user_type">
                    <div class="input-container">
                        <i class="fa-solid fa-envelope" />
                        <input type="text" placeholder="Correo Electrónico *"  required/>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-key" />
                        <input type="password" placeholder="Contraseña *"  required/>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-arrow-rotate-right" />
                        <input type="password" placeholder="Verificar contraseña *"  required/>
                    </div>
                   <input class="boton" type="submit" value="Siguiente" /><br /><br />

                    
                    <a href="/login">¿Ya tiene una Cuenta? Inicia Sesión</a>
                </form>
            </div>
        </body>
        
        </> 
    
  )
}

export default Register

