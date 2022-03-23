import { FaShoppingCart } from "react-icons/fa";
import React from "react";
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
    <div className="itemsInCart">
        {itemsInCart}
    </div>
     <FaShoppingCart/>
    </>

  )
}

export default CartWidget;