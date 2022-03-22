import React from 'react'
import {contexto} from './CartContext'
import { useContext } from 'react'

const Carrito = () => {

  const { items, addItem } = useContext(contexto)
  console.log(items)



  return (
    <div key={items.id}> 
      
      {

        items.map((item) => (
          <>
            <h1>{item.tittle}</h1>
          </>
        ))

      }
      

    </div>
    
    
  )
}

export default Carrito