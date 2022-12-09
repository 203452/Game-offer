import React from "react";
import "../assets/styles/add.css";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Add() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('accion');

  const navigate = useNavigate();

  const handleChangeName = (event) => setName(event.target.value)
  const handleChangeDescription = (event) => setDescription(event.target.value)
  const handleChangePrice = (event) => setPrice(event.target.value)
  const handleChangeImage = (event) => setImage(event.target.value)
  const handleChangeCategory = (event) => setCategory(event.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();

    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            nombre: name,
            descripcion: description,
            precio: price,
            imagen: image,
            categoria: category
        })
    }
    fetch('http://localhost:3000/api/games', option)
    .then (response => response.json())
    .then ( data => data.status ? alert('Ha ocurrido un error') : alert('Juego subido'))
    .catch (err => console.log(err))
    navigate("/compra");
}

  return (
    <div>
      <div className="container-add">
        <div className="title-add">
          <h3>+ Agregar juego</h3>
        </div>
        <div className="form-add">

          {/* Formulario ///////////////////////////////////*/}
          <form className="info" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre del juego:</label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                placeholder="*Escribe el nombre del juego"
                value={name}
                onChange={handleChangeName}
              />
            </div>

            <div>
              <label htmlFor="description">Descripción del juego:</label>
              <textarea
                name="description"
                placeholder="*Escribe una breve descripción del juego"
                id="description-form-add"
                autoComplete="off"
                cols="30"
                rows="5"
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
            </div>

            <div>
              <label htmlFor="price">Precio:</label>
              <input
                type="number"
                name="price"
                min="0"
                placeholder="*Escribe el precio"
                value={price}
                onChange={handleChangePrice}
              />
            </div>

            <div>
              <label htmlFor="image">URL del la imagen del juego:</label>
              <input
                type="url"
                name="image"
                pattern="https://.*" size="30"
                placeholder="*Escribe la URL de la imagen: https://example.com"
                value={image}
                onChange={handleChangeImage}
              />
            </div>

            <div className="opciones-add">
              <label htmlFor="category">Selecciona la categoria:</label>
              <select name="category" onChange={handleChangeCategory}>
                <option value="accion">accion</option>
                <option value="aventura">aventura</option>
                <option value="arcade">arcade</option>
              </select>
            </div>
            
            <div>
              <button id="enviar" type="submit">
                + Agregar
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Add;
