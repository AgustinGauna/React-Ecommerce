import React from 'react'


const ItemDetail = (detalles) => {
  return (
    

        <div >
        <img src={detalles.img} />
        <h3>{detalles.descripcion}</h3>
        <p>Precio: ${detalles.precio}</p>
        </div>

    
  )
}

export default ItemDetail