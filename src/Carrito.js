import { Contexto } from "./CartContext";

import React from 'react'

const Cart = () => {
    const{CartList , removeItem, Clear} = Contexto()
    
    return (
        <div >
            <h2>Carrito</h2>
                {CartList.map( item => <div key={item.id} >
                 <h1>Producto:{item.nombre}  </h1> <br />        
                <h2>Cantidad:{item.Quantity}</h2> <br />
                <button onClick={()=> removeItem(item.id)}>Borrar producto</button>
                <button onClick={()=> Clear()}>Vaciar Carrito</button>
            </div>)}
        </div>
    )
}

export default Cart