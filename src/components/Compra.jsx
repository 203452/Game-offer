import "../assets/styles/compra.css";
import { useState, useEffect } from "react";
import Nota from "./Nota";

function Compra() {
  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [valuado, setValuado] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [total, setTotal] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const [sub, setSub] = useState('');
  const [iva, setIva] = useState('');
  let aux= 0;
  const [totalAll, setTotalAll] = useState('');

  console.log(data);
  function agregarProducto() {
    let total;
    let iva;
    setName(nombre);
    setAmount(cantidad);
    setPrice(precio);
    total = cantidad * precio;
    setTotal(total);

    console.log('este'+total)
    aux= aux+total;
    iva=aux*0.16;
    setSub(aux);
    setIva(iva)
    setTotalAll(aux+iva);
  }

  function borrar(){
    setSub('');
    setIva('')
    setTotalAll('');
    setName('');
    setAmount('');
    setPrice('');
    setTotal('');
  }
  function pagar(){
    alert('compra realizada');
    borrar();
  }


  useEffect(() => {
    const getGames = () => {
      fetch("http://localhost:3000/api/games")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setNombre(res[0].nombre);
          setDescripcion(res[0].descripcion);
          setPrecio(res[0].precio);
          setImagen(res[0].imagen);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getGames();
  }, []);

  const handleChangeCantidad = (e) => {
    setCantidad(e.target.value);
  };

  const handleChangeValue = (e) => {
    setNombre(data[e.target.value - 1].nombre);
    setDescripcion(data[e.target.value - 1].descripcion);
    setPrecio(data[e.target.value - 1].precio);
    setImagen(data[e.target.value - 1].imagen);
    setValuado(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="caja-compra">
      <div className="container-compra">
        <div className="compra_left">
          <div className="opciones-compra">
            <select onChange={handleChangeValue}>
              {
                data.map((data) => (
                  <option value={data.id}>{data.nombre}</option>
                ))
                // data.map(function(data, indice) {
                //   console.log(`${data.nombre} esta en la posición ${indice}`);
                // })
              }
            </select>
          </div>

          <div>
            <label htmlFor="">Cantidad:</label>
            <input
              type="number"
              id="cantidad"
              onChange={handleChangeCantidad}
            />
            <button id="add" className="boton_compra" onClick={agregarProducto}>
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
              <Nota 
                nombre={name}
                precio={price}
                cantidad={amount}
                total={total}
              />
              <tfoot>
                <tr>
                  <th colSpan="3">SubTotal: </th>
                  <th id="sub">{sub}</th>
                </tr>
                <tr>
                  <th colSpan="3">IVA 16%: </th>
                  <th id="iva">{iva}</th>
                </tr>
                <tr>
                  <th colSpan="3">Total: </th>
                  <th id="total">{totalAll}</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <button id="buy" className="boton_compra" onClick={pagar}>
              Comprar
            </button>
            <button id="clear" className="boton_compra" onClick={borrar}>
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
              <img src={imagen} alt={nombre} />
            </div>
            <div id="description">
              <h4>Nombre:</h4>
              {nombre}
              <h4>Precio:</h4>
              {precio} $<h4>Descripción:</h4>
              {descripcion}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compra;
