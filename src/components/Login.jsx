import '../assets/styles/login.css'
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;

function Login() {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");

    const verificar = () => {
        if(JSON.parse(localStorage.getItem(userName))==null){
            return false;
        }
        else{
            return true;
        }
        
      }

    const navigate = useNavigate();

    const handleUserName = (e) =>{
        setUserName(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleSubmit = (e) =>{
        let respuesta;
        let cadena;
        e.preventDefault();
        respuesta=verificar();
        if(respuesta){
            cadena=JSON.parse(localStorage.getItem(userName));
            if(pass.localeCompare(cadena.password)){
                alert("contraseña incorrecta")
            }
            else{
                navigate("compra");
                console.log("logeado")
            }
        }
        else{
            alert("usuario no registrado")
        }
    }

    return ( 
        <div className='main'>
          <div className="caja">
            <h2 className="ban">Login</h2>
            
            <form className='info' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="user">Nombre de usuario:</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="user"
                  placeholder="*Escribe tu usuario"
                  value={userName}
                  onChange={handleUserName}
                />
              </div>

              <div>
                <label htmlFor="user">Contraseña:</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="*Escribe tu contrasena"
                  value={pass}
                  onChange={handlePass}
                />
              </div>

              <div>
                <button id="enviar" type="submit">
                  Entrar
                </button>
                <div>
                <label>¿aún no tienes cuenta?</label>
                <Link to="/registro">
                    Registrarse
                </Link>
                </div>
              </div>
            </form>
            
          </div>
        </div>
     );
}

export default Login;