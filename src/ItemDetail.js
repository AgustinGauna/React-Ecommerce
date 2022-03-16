import React from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'

const ItemDetail = (detalles) => {
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
                  <span className="crt"> <ItemCount initial={1} max={4}/> </span>
                </div>
                </div>
                
              </div>
              
            </div>

          </div>
        </main>

    
  )
}

export default ItemDetail