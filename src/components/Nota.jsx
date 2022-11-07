function Nota({nombre, precio, cantidad, total}) {
    
    return ( 
        <tr>
            <th>{nombre}</th>
            <th>{precio} $</th>
            <th>{cantidad}</th>
            <th>{total} $</th>
        </tr>
     );
}

export default Nota;