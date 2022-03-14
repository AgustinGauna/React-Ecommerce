import React from 'react'
import './Style.css' 

const Item = ({producto}) => {
  return (
   
    

    
    <div className="container2">

        <div className="image" id="p1">
        <img src={producto.img} />
        <h1>{producto.nombre}</h1>
        <p>Precio: ${producto.precio}</p>
        <a id="btn1" className="add-cart cart2" href="#">Detalles</a>
        </div>

    </div>
    
   
  )
}
export default Item