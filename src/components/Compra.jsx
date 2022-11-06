import "../assets/styles/compra.css";
import { useState, useEffect } from "react";



function Compra() {
  const [data, setData] = useState([]);
  const [nombre, setNombre] =useState('');
  const [descripcion, setDescripcion] =useState('');

  console.log(data);

  useEffect(() => {
    const getGames = () => {
      fetch("http://localhost:3000/api/games")
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => {
          console.log(err);
        });
    };
    getGames();
  }, []);

  const handleChangeNombre = (e) =>{
    setNombre(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="caja-compra">
      <div className="container-compra">
        <div className="compra_left">
          <div className="opciones-compra">
            <select  value={nombre} onChange={handleChangeNombre}>
              {
                data.map(data => (
                  <option>{data.nombre}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label htmlFor="">Cantidad:</label>
            <input type="number" id="cantidad" />
            <button id="add" className="boton_compra">
              Agregar
            </button>
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
                  <th colSpan="3">SubTotal: </th>
                  <th id="sub"></th>
                </tr>
                <tr>
                  <th colSpan="3">IVA 16%: </th>
                  <th id="iva"></th>
                </tr>
                <tr>
                  <th colSpan="3">Total: </th>
                  <th id="total"></th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <button id="buy" className="boton_compra">
              Comprar
            </button>
            <button id="clear" className="boton_compra">
              Borrar
            </button>
          </div>

          <div>
            <button
              id="back"
              className="boton_compra"
              onClick={() => window.location.reload()}
            >
              Back
            </button>
          </div>
        </div>

        <div className="compra_right">
          <div className="informacion">
            <div id="imagen">
            {/* <img src={image} alt={nombre} /> */}
            </div>
            <div id="description">
              <h4>Nombre:</h4>
                {nombre}
              <h4>Precio:</h4>
          
              <h4>Descripción:</h4>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compra;
