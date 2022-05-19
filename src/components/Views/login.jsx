import React from 'react';
import './login.css';


const Login = () =>{
    return(
        <>
            <body class="lrbody">
                <div class="login-box">
                <img className="icono" src="user-icon.png" />
                    <h1>Iniciar Sesión</h1><br/>
                    <form action="/home">
                        <label for="username">Usuario</label>
                        <input type="text" placeholder="Ingresar nombre de Usuario" required/><br/>

                        <label for="password">Contraseña</label>
                        <input type="password" placeholder="Ingresar contraseña" required/>

                        <input  type="submit" value="Ingresar" /><br/><br/>
                        
                        <a href="#">¿Ha olvidado su contraseña?</a><br/>
                        <a href="/register">¿No está Registrado todavía?</a>

                    </form>
                </div>
            </body>
        <footer>
            <p>
                IMEE (Inscripción de Matrículas Estudiantiles Escolares) <br/>
                Universidad de Cartagena<br/>
                Ivonne Núñez / Jean Quintana / Camilo Mendoza
            </p>
        </footer>
        </>
    )
}

export default Login;