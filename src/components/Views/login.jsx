import React from 'react';
import './login.css';


const Login = () =>{
    
    return(
        <>
            <body class="lrbody">
                <div class="login-box">
                    <img className="icono" src="user-icon.png" />
                    <h1>Iniciar Sesión</h1><br/>
                    <form action="/my-profile">
                        <div class="sub-label">
                            <label for="username">Usuario</label>
                        </div>
                        
                        <input type="text" placeholder="Ingresar nombre de Usuario" required/><br/>
                        <div class="sub-label">
                            <label for="password">Contraseña</label>
                        </div>
                        
                        <input type="password" placeholder="Ingresar contraseña" required/>

                        <input type="submit" value="Ingresar"/><br/><br/>
                      
                        
                        <a href="#">¿Ha olvidado su contraseña?</a><br/>
                        <a href="/register">¿No está Registrado todavía?</a>

                    </form>
                    
                </div>
            </body>
        </>
    )
}



export default Login;