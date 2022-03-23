import React, {useState, useEffect} from 'react'  
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemList from './ItemList'

let productosIniciales = [
    {
        id: 1,
        nombre: "Cafe dulce",
        precio: 100,
        img : 'https://i.gyazo.com/dea569f3ea2a569bcd4c5b92a10da119.png',
        categoria: 1
    },
    {
        id: 2,
        nombre: "Cafe negro",
        precio: 90,
        img : 'https://i.gyazo.com/70e694f254d2d5956d45c6569e77f963.png',
        categoria: 2
    },
    {
        id: 3,
        nombre: "Cafe frutal",
        precio: 110,
        img : 'https://i.gyazo.com/adf97c33721be28254943bc6d8ee53af.png',
        categoria: 3
    }
]

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([]);
    const {id} = useParams()

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                
                res(productosIniciales)
            },2)
        })

        

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(id?respuestaDeLaApi.filter(producto => producto.categoria === +id):respuestaDeLaApi)
        })
        .catch((errorDeLaApi)=>{
            toast.error("Error al cargar los productos")
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[id])

    return (
        <>
            <p>{loading ? "Cargando..." : ""}</p>
            <ItemList productos={productos}/>
        </>
    )

    
    }

export default ItemListContainer