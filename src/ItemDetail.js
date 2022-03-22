import React from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'
import { useState } from 'react' 
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import './Style.css' 
import {contexto } from "./CartContext"
import { useContext } from 'react'
import CartContext from './CartContext'

const ItemDetail = (detalles) => {

  

  const {addItem, item} = useContext(contexto)

  return (
    

        <main className='todo'>
          <div className='container3'>
            <div className="cover"><img src={detalles.img} /></div>
            <div className="content">
              <div className="nave">
                <span className="logo">Coffe Store <CartWidget/> </span>
                <span><div className="fab fa-sistrix" ></div></span>
              </div>
              <div className="content-body">
                <div className="black-label">
                  <span className="title"><b>{detalles.name}</b></span>
                  <p>{detalles.descripcion}</p>
                  <div className="prix">
                  <span><b>${detalles.precio}</b></span>
                  <span className="crt">  <ItemCount item={item} initial={1} max={4} addItem={addItem}/>  <ul className='nav__links' style={{backgroundColor:"blue"}}><li><Link to="/carrito">Carrito</Link></li></ul> </span>
                </div>
                </div>
                
              </div>
              
            </div>

          </div>
        </main>

    
  )
}

export default ItemDetail