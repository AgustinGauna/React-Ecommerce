import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css' 

const Item = ({producto}) => {
  return (
   
    

    
    

        <div className="image" id="p1">
            <img src={producto.img} />
            <h1>{producto.nombre}</h1>
            <p>Precio: ${producto.precio}</p>
            <Link id="btn1" className="add-cart cart2" to="/item/prod1">Detalles</Link>
        </div>

    
    
   
  )
}
export default Item