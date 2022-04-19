import { Contexto } from "./CartContext";
import React, { useState } from 'react'  
import { Link } from 'react-router-dom';
import './Style.css' 
import BarLoader from "react-spinners/ClipLoader";
import Formulario from "./Formulario";


const Cart = () => {

    const{CartList , removeItem, Clear, totalPrice} = Contexto()
    const [loading, setLoading] = useState(true);
  
    setTimeout(() => {
        setLoading(false);
      }, 500);

      

      return (
        <div>
          {loading ? (
            <div className="loader"><BarLoader loading={loading}  size={50} /></div>
          ) : (
            <div>
              <title>Carrito</title>
    
              {CartList.length < 1 ? (
                  <>
                  <div>
                      <h2>Tu carrito está vacio</h2>
                      <li><Link to="/" style={{background:'blue'}}>A comprar!</Link></li>
                  </div>
                  </>
              ) : (
                <div>
                    <div>
                        <div>
                            {CartList.map( item => 
                                <div className="carritoDesign" key={item.id} >
                                    <img alt="" src={item.imagen} />
                                    <h1>Producto: {item.nombre}  </h1> <br />        
                                    <h2>Cantidad: {item.Quantity}</h2> <br />
                                    <h3>Precio: ${item.precio * item.Quantity}</h3> <br />
                                    <button onClick={()=> removeItem(item.id)}>X</button>
                                </div>)}
                        </div>
                    </div>
                    <div className="utilidades">
                      <div className="totalPrice">Precio total: ${totalPrice()} </div>                    
                      <button onClick={()=> Clear()}>Vaciar Carrito</button>        
                    </div>
                     
                     <Formulario />
                      
                      
                      
                </div>
              )}
            </div>
          )}
    
          
        </div>
      );
    }
  
        
      
    


export default Cart