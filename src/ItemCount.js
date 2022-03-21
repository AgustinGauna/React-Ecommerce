import {useState} from 'react';

const ItemCount = ({initial, max, onAdd}) => { 
 
    
 
    const [contador, setContador] = useState(initial)

    

        const sumar = () => {
            if(contador >=initial && contador <max){
            setContador(contador + 1)
        }
    }

        const confirmar = () => {
            onAdd(contador);
        }

        const restar = () => {
            if(contador >initial && contador <=max){
            setContador(contador - 1)
        }
        }

    
    return (
        <div>
            <p>Cantidad : {contador}</p>
            <button className='btn2' onClick={restar}>-</button>
            <button onClick={confirmar}>Comprar</button>
            <button className='btn2' onClick={sumar}>+</button>
        </div>
    );

    }

    export default ItemCount;