import "../assets/styles/registro.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();

  const verificar = () => {
    if (JSON.parse(localStorage.getItem(userName)) == null) {
      return false;
    } else {
      return true;
    }
  };
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (ev) => {
    let respuesta;
    ev.preventDefault();
    const newUser = {
      name: name,
      lastName: lastName,
      userName: userName,
      password: password,
    };
    respuesta = verificar();
    if (respuesta) {
      console.log("el usuario ya existe");
    } else {
      localStorage.setItem(userName, JSON.stringify(newUser));
      console.log("usuario creado");
      alert("usuario creado con exito");
      navigate("/");
    }
  };

  return (
    <div className="main">
      <div className="caja-registro">
        <div>
          <h1 className="ban">Registro</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nombre:</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="* Escribe Nombres"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
          <label htmlFor="">Apellido:</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="* Escribe Apellidos"
            name="lastName"
            value={lastName}
            onChange={handleChangeLastName}
          />
          <label htmlFor="">Nombre de usuario:</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="* Escribe Nombre de usuario"
            name="userName"
            value={userName}
            onChange={handleChangeUserName}
          />
          <label htmlFor="">Contraseña:</label>
          <input
            type="password"
            placeholder="* Escribe contraseña"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button id="enviar" type="submit">
            REGISTRARSE
          </button>
          <div>
            <label htmlFor="">¿Ya tienes cuenta?</label>
            <Link to="/">Iniciar sesión</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
