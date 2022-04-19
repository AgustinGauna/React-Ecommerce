import React, {useState} from 'react'
import {addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { db } from './Firebase'
import { toast } from 'react-toastify'
import { Contexto } from "./CartContext";

const Formulario = () => {
    const{CartList , Clear, totalPrice} = Contexto()

    const [error, setError] = useState("");
    const [data, setData]  = useState({
      user: "",
      email: "",
      phone: "",
    });

    const finalizarCompra = (e) => {
        e.preventDefault();
        
        if(data.email.includes("@") && data.email.includes(".") && isNaN(data.user) === true && data.user.includes(" ") && data.phone.length >= 5 && isNaN(data.phone) === false){
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

      const handleChange = (event) =>{
        setData({
          ...data,
          [event.target.name]: event.target.value
        })
      }

  return (
      <div>

    <form action="">
        <input type="text" name="user" placeholder="Nombre y apellido" onChange={handleChange} value={data.user} />
        <input type="number" name="phone" placeholder="Telefono" onChange={handleChange} value={data.phone} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} />
        <button onClick={finalizarCompra}>Finalizar compra</button>    
    </form>
        <div>
            <h3 style={{color:"red"}}> {error} </h3>
        </div>
      </div>
  )
}

export default Formulario