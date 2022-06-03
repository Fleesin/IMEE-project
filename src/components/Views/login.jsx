import React, {useState} from 'react';
import './login.css';


const Login = () =>{
    const baseURL="https://imee-app-backend.herokuapp.com/estudante/"
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
            window.location = "/my-profile"
        })
	}
    
    return(
        <>
            <body class="lrbody">
                <div class="login-box">
                    <img className="icono" src="user-icon.png" />
                    <h1>Iniciar Sesión</h1><br/>
                    <form action="/my-profile" onSubmit={handleSubmit}>
                        <div class="sub-label">
                            <label for="username">Usuario</label>
                        </div>
                        
                        <input type="text" placeholder="Ingresar nombre de Usuario" onChange={(e) => setEmail(e.target.value)} required/><br/>
                        <div class="sub-label">
                            <label for="password">Contraseña</label>
                        </div>
                        
                        <input type="password" placeholder="Ingresar contraseña" onChange={(e)=> setPassword(e.target.value)} required/>

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