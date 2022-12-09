import '../assets/styles/principal.css'
import Compra from './Compra'
import {useState} from 'react';

function Principal() {
    const [cat, setCat] = useState('');
    const [opcion, setOpcion] = useState(1);
    
    const handleAventura = () =>{
        setOpcion(2);
        setCat('aventura');
    }
    const handleAccion = () =>{
        setOpcion(3);
        setCat('accion');
    }
    const handleArcade = () =>{
        setOpcion(4);
        setCat('arcade');
    }


    switch(opcion){
        case 1:
            return ( 
                <div className='container-principal'>
                    <div className="column">
                        <div className="row row-1">
                            <div className="caja-principal">
                                <button onClick={handleAventura} type="submit" className='categoria-principal'>Aventura</button>
                            </div>
                        </div>
                    </div>
        
                    <div className="column">
                        <div className="row row-1">
                            <div className="caja-principal">
                                <button onClick={handleAccion} className='categoria-principal'>Acción</button>
                            </div>
                        </div>

                    </div>
        
                    <div className="column">
                        <div className="row row-1">
                            <div className="caja-principal">
                                <button onClick={handleArcade} className='categoria-principal'>Arcade</button>
                            </div>
                        </div>
             
                    </div>
        
                </div>
             );
        break;
        case 2:
            return(
                <Compra
                    categoria={cat}
                />
            );
        break;
        case 3:
            return(
                <Compra
                    categoria={cat}
                />
            );
        break;
        case 4:
            return(
                <Compra
                    categoria={cat}
                />
            );
        break;
    }

    
}

export default Principal;