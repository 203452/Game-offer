import '../assets/styles/login.css'
import {Link, useNavigate} from 'react-router-dom'
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>;

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/principal");
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
                />
              </div>

              <div>
                <label htmlFor="user">Contraaseña:</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="*Escribe tu contrasena"
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