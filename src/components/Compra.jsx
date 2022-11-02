import "../assets/styles/compra.css";

function Compra() {
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
            <input type="number" />
            <button id="add">Agregar</button>
          </div>

          <div>
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
              <tfoot>
                <tr>
                  <th colspan="3">SubTotal</th>
                  <th id="sub"></th>
                </tr>
                <tr>
                  <th colspan="3">IVA 16%</th>
                  <th id="iva"></th>
                </tr>
                <tr>
                  <th colspan="3">Total</th>
                  <th id="total"></th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <button>Comprar</button>
            <button>Borrar</button>
          </div>
        </div>

        <div className="compra_right">
          <div className="info">
            <div id="imagen"></div>
            <div id="description"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compra;
