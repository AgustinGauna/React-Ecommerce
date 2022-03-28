import React, {useState, useEffect} from 'react'  
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from './Firebase'
import ItemList from './ItemList'
import {getDocs, query, collection, where} from "firebase/firestore";



const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([]);
    const {id} = useParams()

    useEffect(()=>{

        if (id) {
            const q  = query(collection(db,"productos"), where("categoria", "==", id))
            getDocs(q)
            .then((respuesta) => setProductos(respuesta.docs.map(p=> ({productos:p.data() , id: p.id}))))
            .catch((error) => toast.error("ERROR"))
            .finally(()=>{
                setLoading(false)
            })
        } else {
            getDocs(collection(db, "productos"))
            .then((respuesta) => setProductos(respuesta.docs.map(p => ({productos:p.data(), id: p.id}))))
            .finally(()=>{
                setLoading(false)
            })
        }
        
    },[id])

    

    return (
        <>
            <p>{loading ? "Cargando..." : ""}</p>
            <ItemList productos={productos}/>
        </>
    )

    
    }

export default ItemListContainer