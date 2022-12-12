import "../assets/styles/head.css";
import url from "../assets/images/2.png";
import url2 from "../assets/images/3.png";

function Head() {
  return (
    <div className="caja-head">

        <img src={url} alt="icono" id="imagens-head"/>
 
        <h2 id="titulo-head">Game Offer</h2>


        <img src={url2} alt="icono2" id="imagen2" />

    </div>
  );
}

export default Head;
