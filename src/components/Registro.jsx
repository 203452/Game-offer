import '../assets/styles/registro.css'
import {Link, useNavigate} from 'react-router-dom'

function Registro() {
  return (
    <div className="caja-registro">
      <div>
        <h1 className='ban'>Registro</h1>
      </div>
      <form>
        <label htmlFor="">Nombre:</label>
        <input
        autoComplete="off"
          type="text"
          placeholder="* Escribe Nombres"
          name="user"
        />
        <label htmlFor="">Apellido:</label>
        <input
        autoComplete="off"
          type="text"
          placeholder="* Escribe Apellidos"
          name="lastName"
        />
        <label htmlFor="">Nombre de usuario:</label>
        <input
            autoComplete="off"
          type="text"
          placeholder="* Escribe Nombre de usuario"
          name="userName"
        />
        <label htmlFor="">Contraseña:</label>
        <input
          type="password"
          placeholder="* Escribe contraseña"
          name="password"
        />
        <button id="enviar" type="submit">
          REGISTRARSE
        </button>
        <div>
            <label htmlFor="">¿Ya tienes cuenta?</label>
            <Link to="/">
                    Iniciar sesión
            </Link>
        </div>
      </form>
    </div>
  );
}

export default Registro;
