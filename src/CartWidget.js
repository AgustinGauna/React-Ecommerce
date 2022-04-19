import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { Contexto } from "./CartContext";
import './Style.css' 

const CartWidget = () => {
  const {CartList} = Contexto()

  let itemsInCart = 0;

  CartList.map((item) => {
    itemsInCart = itemsInCart + item.Quantity;
  })

  return (
    <>
    {CartList.length >= 1 ?
    <Link to="/Carrito"> Carrito
    
    <div className="itemsInCart">
        {itemsInCart}
    </div>
     <FaShoppingCart/>  


    </Link>
    :
    ""
    }

    </>
  )
}

export default CartWidget;