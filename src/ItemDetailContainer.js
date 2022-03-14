import React, {useState, useEffect} from 'react'  
import ItemDetail from './ItemDetail';


let detallesProductos = [
    {
        id: 4,
        descripcion: "El sabor a cacao negro se une a las notas a cereales malteados del Espresso base del BARISTA CREATIONS Cocoa Truffle.",
        precio: 90,
        img: 'https://i.gyazo.com/dea569f3ea2a569bcd4c5b92a10da119.png'

    }
]


const ItemDetailContainer = () => {

    const [detalles, setDetalles] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(detallesProductos)
            },2000)
        })

        

        promesa
        .then((respuestaDeLaApi)=>{
            setDetalles(detallesProductos)
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
          {detalles &&
            detalles.map((detalles) => {
              return (
                <div >
                  <ItemDetail
                    
                    precio={detalles.precio}
                    descripcion={detalles.descripcion}
                    img={detalles.img}
                    
                  />
                </div>
              );
            })}
        </div>
      );
}

export default ItemDetailContainer