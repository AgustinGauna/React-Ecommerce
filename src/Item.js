import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css' 

const Item = ({producto}) => {
  const {productos, id} = producto;
  return (
   

    
    

        <div className="image" id="p1">
            <img src={productos.imagen} />
            <h1>{productos.nombre}</h1>
            <p>Precio: ${productos.precio}</p>
            <Link id="btn1" className="add-cart cart2" to={`/item/${id}`}>Detalles</Link>
        </div>

    
    
   
  )
}
export default Item