import '../assets/styles/principal.css'
import Compra from './Compra'
import {useState} from 'react';

function Principal() {
    const [opcion, setOpcion] = useState(1);
    const handleAccion = (e) =>{
        setOpcion(2);

    }

    switch(opcion){
        case 1:
            return ( 
                <div className='container-principal'>
                    <div className="column">
                        <div className="row row-1">
                            <div className="caja-principal">
                                <button onClick={handleAccion} className='categoria-principal'>Aventura</button>
                            </div>
                        </div>
                        <div className="row row-2">
                        <div className="caja-principal">
                                <button className='categoria-principal'>Deportes</button>
                        </div>
                        </div>
                        <div className="row row-3">
                        <div className="caja-principal">
                            <button className='categoria-principal'>Juegos de mesa</button>
                        </div>
                        </div>
                    </div>
        
                    <div className="column">
                        <div className="row row-1">
                            <div className="caja-principal">
                                <button className='categoria-principal'>Acción</button>
                            </div>
                        </div>
                        <div className="row row-2">
                            <div className="caja-principal">
                                <button className='categoria-principal'>Estrategia</button>
                            </div>
                        </div>
                        <div className="row row-3">
                            <div className="caja-principal">
                                <button className='categoria-principal'>Juegos musicales </button>
                            </div>
                        </div>
                    </div>
        
                    <div className="column">
                        <div className="row row-1">
                            <div className="caja-principal">
                                <button className='categoria-principal'>Arcade</button>
                            </div>
                        </div>
                        <div className="row row-2">
                            <div className="caja-principal">
                                <button className='categoria-principal'>Simulación</button>
                            </div>
                        </div>
                        <div className="row row-3">
                            <div className="caja-principal">
                                <button className='categoria-principal'>Juegos de dibujo</button>
                            </div>
                        </div>
                    </div>
        
                </div>
             );
        break;
        case 2:
            return(
                <Compra></Compra>
            );
        break;
    }

    
}

export default Principal;