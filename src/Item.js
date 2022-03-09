import React from 'react'
import './Style.css' 

const Item = (props) => {
  return (
   
    

    
    <div className="container2">

        <div class="image" id="p1">
        <img src={props.img} />
        <h1>{props.nombre}</h1>
        <p>Precio: ${props.precio}</p>
        <a id="btn1" class="add-cart cart2" href="#">Detalles</a>
        </div>

    </div>
    
   
  )
}
export default Item