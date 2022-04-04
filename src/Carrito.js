import { Contexto } from "./CartContext";
import React, { useState } from 'react'  
import { Link } from 'react-router-dom';
import {addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { db } from './Firebase'
import { toast } from 'react-toastify'
import './Style.css' 


const Cart = () => {

   
 
    const{CartList , removeItem, Clear, totalPrice} = Contexto()
    const [loading, setLoading] = useState(true);
    const [data, setData]  = useState(null);
    const [data2, setData2]  = useState(null);
    const [data3, setData3]  = useState(null);

    function getData(val){
      setData(val.target.value)
  }
  function getData2(val){
    setData2(val.target.value)
}
  function getData3(val){
  setData3(val.target.value)
}

    const finalizarCompra = () => {
      const orden = {
        buyer : {
          nombre : data,
          telefono : data2,
          email : data3
        },
        items : CartList,
        date : serverTimestamp(),
        total: totalPrice()
      }
      const ordenesCollection = collection(db, "ordenes")
      const pedido = addDoc(ordenesCollection, orden)
      Clear();

      pedido
      .then(res =>{
        toast.success(`¡Compra realizada con exito! el id de su pedido es: ${res.id}`, {
          position: "bottom-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      

    }
    
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
                  <div>
                      <h2>Tu carrito está vacio</h2>
                      <li><Link to="/" >A comprar!</Link></li>
                  </div>
                  </>
              ) : (
                <div>
                    <div>
                        <div>
                            {CartList.map( item => 
                                <div className="carritoDesign" key={item.id} >
                                    <img src={item.imagen} />
                                    <h1>Producto: {item.nombre}  </h1> <br />        
                                    <h2>Cantidad: {item.Quantity}</h2> <br />
                                    <h3>Precio: ${item.precio * item.Quantity}</h3> <br />
                                    <button onClick={()=> removeItem(item.id)}>X</button>
                                </div>)}
                        </div>
                    </div>
                    <div className="utilidades">
                      <div className="totalPrice">Precio total: ${totalPrice()} </div>                    
                    </div>
                      <button onClick={()=> Clear()}>Vaciar Carrito</button>        
                      <form>
                            <input type="text" name="username" placeholder="Nombre" onChange={getData} />
                            <input type="text" name="telefono" placeholder="Telefono" onChange={getData2} />
                            <input type="text" name="email" placeholder="Email" onChange={getData3}/>
                      <button onClick={finalizarCompra}>Finalizar compra</button>    
                      </form>
                      
                </div>
              )}
            </div>
          )}
    
          
        </div>
      );
    }
  
        
      
    


export default Cart