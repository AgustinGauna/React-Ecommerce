import React, {useState, useEffect} from 'react'  
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';


let detallesProductos = 
    {
        name: "Cafe de cacao",
        descripcion: "El sabor a cacao negro se une a las notas a cereales malteados del Espresso base del BARISTA CREATIONS Cocoa Truffle. Es una unión AFECTIVA que nos recuerda a las trufas de chocolate negro. El Espresso utilizado como base consiste en una mezcla de los mejores Arábicas de América del Sur: dulces granos de Bourbon de Brasil en armonía con café colombiano lavado. El tueste por separado extrae lo mejor de cada uno para crear un Espresso increíblemente suave y equilibrado: una excelente combinación, con el sabor a cacao. Una destacada nota a cacao con un toque dulce de almendra y un matiz de vainilla: así puede reconocerse un Cappuccino elaborado con BARISTA CREATIONS Cocoa Truffle.",
        precio: 90,
        img: 'https://i.gyazo.com/dea569f3ea2a569bcd4c5b92a10da119.png',
        id: 4

    }



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
            setDetalles(respuestaDeLaApi)
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
          
              
                <div key={detalles.id}>
                  <ItemDetail
                    name={detalles.name}
                    precio={detalles.precio}
                    descripcion={detalles.descripcion}
                    img={detalles.img}
                    
                  />
                  
                </div>
              
            
        </div>
      );
}

export default ItemDetailContainer