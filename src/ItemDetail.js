import React from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'
import './Style.css' 
import {Contexto} from './CartContext'

const ItemDetail = ({Item}) => {

  const {img, name, id, precio, descripcion} = Item


  const {AddItem} = Contexto()

  const OnAdd =(Quantity)=>{
    AddItem({Item: Item, Quantity: Quantity, nombre: name, id:id})
}

  return (

    
    

        <main className='todo'>
          <div className='container3'>
            <div className="cover"><img src={img} /></div>
            <div className="content">
              <div className="nave">
                <span className="logo">Coffe Store <CartWidget/> </span>
                <span><div className="fab fa-sistrix" ></div></span>
              </div>
              <div className="content-body">
                <div className="black-label">
                  <span className="title"><b>{name}</b></span>
                  <p>{descripcion}</p>
                  <div className="prix">
                  <span><b>${precio}</b></span>
                  <span className="crt">  <ItemCount  initial={1} max={4} OnAdd={OnAdd}/> </span>
                </div>
                </div>
                
              </div>
              
            </div>

          </div>
        </main>

    
  )
}

export default ItemDetail