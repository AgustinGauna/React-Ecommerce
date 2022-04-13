import { Contexto } from "./CartContext";
import React, { useState } from 'react'  
import { Link } from 'react-router-dom';
import {addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { db } from './Firebase'
import { toast } from 'react-toastify'
import './Style.css' 
import BarLoader from "react-spinners/ClipLoader";

const Cart = () => {

   
 
    const{CartList , removeItem, Clear, totalPrice} = Contexto()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [data, setData]  = useState({
      user: "",
      email: "",
      phone: "",
    });
  

    

    const finalizarCompra = () => {
      if(data.email.includes("@") && data.user.includes(" ") && data.phone.length >= 5){
        const orden = {
          buyer : data ,
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
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        })
      } else {
        setError("Por favor ingrese datos validos")
      }
    }
    
    setTimeout(() => {
        setLoading(false);
      }, 500);

      const handleChange = (event) =>{
        setData({
          ...data,
          [event.target.name]: event.target.value
        })
      }

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
                      <button onClick={()=> Clear()}>Vaciar Carrito</button>        
                    </div>
                      
                            <input type="text" name="user" placeholder="Nombre y apellido" onChange={handleChange} value={data.user} />
                            <input type="number" name="phone" placeholder="Telefono" onChange={handleChange} value={data.phone} />
                            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} />
                            <button onClick={finalizarCompra}>Finalizar compra</button>    
                      
                      <div>
                        <h3 style={{color:"red"}}> {error} </h3>
                      </div>
                      
                </div>
              )}
            </div>
          )}
    
          
        </div>
      );
    }
  
        
      
    


export default Cart