import React, {useState, useEffect} from 'react'  
import ItemDetail from './ItemDetail';
import { useParams } from "react-router";
import {query, getDocs, getDoc, doc, collection, where} from "firebase/firestore"
import { db } from './Firebase'
import { toast } from 'react-toastify';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [Item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then((respuesta) => setItem(respuesta.data()))
        .catch((error) => toast.error("Error!"))
        .finally(()=>{
            setLoading(false)
        })

        
    },[id])



    return (
        <div>
          <p>{loading ? "Cargando..." : ""}</p>
          <ItemDetail Item= {Item} />
        </div>
      );
}

export default ItemDetailContainer