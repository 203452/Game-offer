import "../assets/styles/compra.css";
import { useNavigate  } from "react-router-dom";
import fotogta from "../assets/images/accion/gta.jpeg";

function Compra() {
    const navigate= useNavigate();
  const accion = {
    nombre: ["God of War", "GTA V"],
    precio: ["110", "300", "113"],
    descripcion: [
      "Hollow Knight es un videojuego perteneciente al género metroidvania desarrollado y publicado por Team Cherry.",
      "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games.",
      "Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, ​ y posteriormente desarrollado por su empresa, Mojang Studios.",
    ],
    imagen: [
      "./src/images/foto1.jpeg",
      "./src/images/foto2.jpeg",
      "./src/images/foto3.jpg",
    ],
  };

  return (
    <div className="caja-compra">
      <div className="container-compra">
        <div className="compra_left">
          <div className="opciones-compra">
            <select name="" id="">
              <option value="">{accion.nombre[0]}</option>
              <option value="">{accion.nombre[1]}</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Cantidad:</label>
            <input type="number" id="cantidad"/>
            <button id="add" className="boton_compra">Agregar</button>
          </div>

          <div className="tabla">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody id="nota"></tbody>
              {/* <tr>
                  <th>gta v</th>
                  <th>12</th>
                  <th>3</th>
                  <th>123</th>
                </tr> */}
              <tfoot>
                <tr>
                  <th colspan="3">SubTotal: </th>
                  <th id="sub"></th>
                </tr>
                <tr>
                  <th colspan="3">IVA 16%: </th>
                  <th id="iva"></th>
                </tr>
                <tr>
                  <th colspan="3">Total: </th>
                  <th id="total"></th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <button id="buy" className="boton_compra">Comprar</button>
            <button id="clear" className="boton_compra">Borrar</button>
          </div>

          <div>
            <button id="back" className="boton_compra" onClick={() => window.location.reload()}>Back</button>
          </div>
        </div>

        <div className="compra_right">
          <div className="informacion">
            <div id="imagen">
                <img src={fotogta} alt="" />
            </div>
            <div id="description">
                <h4>Nombre:</h4>
                gta
                <h4>Precio:</h4>
                12
                <h4>Descripción:</h4>
                Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compra;
