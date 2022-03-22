import { createContext, useState } from 'react'
export const contexto = createContext();
const { Provider } = contexto


const CartContext = ({children}) =>{


    const [items,setItems] = useState([])
    
    const isInCart = (id) => {
        
    }

    const addItem = (item, qty) =>{
        setItems([...items, {id: item.id, name: item.title, price:item.price, qty: qty}])
        console.log(items)
        
    }

    const removeItem = () => {

    }

    const clear = () => {
        setItems([])
    }


    return (

     <Provider value={{ items, addItem}}>
         {children}
    </Provider>  

    )


}

export default CartContext

