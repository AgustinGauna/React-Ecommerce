import {useState, React, createContext, useContext} from 'react'

  const CartContext = createContext([])

  export const Contexto = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    
const [CartList, SetCartList] = useState([])


const isInCart = (id) => {
    const found = CartList.find(item => item.id === id)
    return found;
}




const AddItem = (Item, Quantity) =>{
    
    isInCart(Item.id)
    ?
    SetCartList(CartList.map((prod) =>{
        if (prod.id === Item.id){
            prod.Quantity +=  parseInt(Item.Quantity)
        }
        return prod;
    }))
    :


SetCartList([...CartList, Item])
}

const removeItem = (id) => {
    SetCartList(CartList.filter(item => item.id !== id))

}

const Clear = () =>{
    SetCartList([])
}

const totalPrice = () => {
    return CartList.reduce((total, item) => total + item.precio * item.Quantity, 0)
}

    return (
        <CartContext.Provider value= {{
            CartList,
            AddItem,
            removeItem,
            totalPrice,
            Clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider






