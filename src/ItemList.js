import React, {useState, useEffect} from 'react'  
import Item from './Item'

let productosIniciales = [
    {
        id: 1,
        nombre: "Cafe dulce",
        precio: 100,
        img : 'https://i.gyazo.com/dea569f3ea2a569bcd4c5b92a10da119.png'
    },
    {
        id: 2,
        nombre: "Cafe negro",
        precio: 90,
        img : 'https://i.gyazo.com/70e694f254d2d5956d45c6569e77f963.png'
    },
    {
        id: 3,
        nombre: "Cafe frutal",
        precio: 110,
        img : 'https://i.gyazo.com/adf97c33721be28254943bc6d8ee53af.png'
    }
]

const ItemList = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        

        promesa
        .then((respuestaDeLaApi)=>{
            setItems(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })



    return (
        <div>
            <p>{loading ? "Cargando..." : ""}</p>
            {items.map((item) =>{
                return(
                   <Item 
                   key={item.id}
                   nombre={item.nombre}
                   precio={item.precio}
                   img={item.img}
                   
                   />
                );
            })}
        </div>
      )
    }

export default ItemList