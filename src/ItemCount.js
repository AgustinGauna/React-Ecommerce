import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemCount = ({initial, max, OnAdd}) => { 
 
    
 
    const [contador, setContador] = useState(initial);
    const [renderizado, setRenderizado] = useState(true);

  

    const addProduct = () => {
        if(contador < max)
        setContador(contador + 1);
    }
    const removeProduct = () =>{
        if(contador > 0)
        setContador(contador - 1);
    }
    
    const AddtoCart =()=>{
        OnAdd(contador)
        setRenderizado(false)
        toast.success("Se ha añadido los productos al carrito")
    }

    
    return (
        <div>

            <p>Cantidad : {contador}</p>
            {renderizado ? 
            <div>           
                <button className='btn2' onClick={removeProduct}>-</button>
                <button onClick={AddtoCart}>Añadir al carrito</button>
                <button className='btn2' onClick={addProduct}>+</button>                
            </div>
            :
            <ul className='nav__links' style={{backgroundColor:"blue"}}><li><Link to="/carrito">Carrito</Link></li></ul>}

        </div>
    );

    }

    export default ItemCount;