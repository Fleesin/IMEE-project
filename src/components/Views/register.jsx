import React, {useState} from "react";
import axios from 'axios';
import './register.css';

const Register = ({}) => {
    const baseURL="https://imee-app-backend.herokuapp.com/profile/"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
		axios.post( baseURL, {
            email,
            password
        })
        .then(res=>{
			console.log(res);
			console.log(res.data);
            window.location = "/user_type"
        })
	}

    return (
        <><body class="lrbody">
            <div class="register-box">
                <h1>Registrate</h1>
                <form action="/user_type" onSubmit={handleSubmit}>
                    <div class="input-container">
                        <i class="fa-solid fa-envelope" />
                        <input type="email" name="email" placeholder="Correo Electrónico *" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-key" />
                        <input type="password" name="password" placeholder="Contraseña *"  onChange={(e)=> setPassword(e.target.value)}  required/>
                    </div>

                    <div class="input-container">
                        <i class="fa-solid fa-arrow-rotate-right" />
                        <input type="password" placeholder="Verificar contraseña *"  required/>
                    </div>
                   <input class="boton" type="submit" value="Siguiente" on/><br /><br />

                    
                    <a href="/login">¿Ya tiene una Cuenta? Inicia Sesión</a>
                </form>
            </div>
        </body>
        </>
  )
}

export default Register

