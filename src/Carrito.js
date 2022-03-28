import { Contexto } from "./CartContext";
import React, { useState } from 'react'  
import { Link } from 'react-router-dom';


const Cart = () => {
    const{CartList , removeItem, Clear} = Contexto()
    const [loading, setLoading] = useState(true);
    
    setTimeout(() => {
        setLoading(false);
      }, 500);

      return (
        <div>
          {loading ? (
            "loading..."
          ) : (
            <div>
              <title>Carrito</title>
    
              {CartList.length < 1 ? (
                  <>
                <h2>Tu carrito está vacio</h2>
                <li><Link to="/" style={{backgroundColor:"blue"}}>A comprar!</Link></li>
                  </>
              ) : (
                <div>
                    <div>
                        <div>
                            {CartList.map( item => 
                                <div key={item.id} >
                                    <img src={item.imagen} />
                                    <h1>Producto:{item.nombre}  </h1> <br />        
                                    <h2>Cantidad:{item.Quantity}</h2> <br />
                                    <h3>Precio:{item.precio * item.Quantity}</h3> <br />
                                    <button onClick={()=> removeItem(item.id)}>Borrar producto</button>
                                </div>)}
                        </div>
                    </div>
                    <button onClick={()=> Clear()}>Vaciar Carrito</button>                                    
                </div>
              )}
            </div>
          )}
    
          
        </div>
      );
    }
  
        
      
    


export default Cart