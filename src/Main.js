import React from 'react'
import ItemListContainer from './ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import Carrito from './Carrito'
import ItemDetailContainer from './ItemDetailContainer'
import Test from './Test'

const Main = (props) => {

    

  return (
    <main>
   
        
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/carrito/" element={<Carrito/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Test" element={<Test/>}/>
        </Routes>
     
    </main>
  )
}

export default Main