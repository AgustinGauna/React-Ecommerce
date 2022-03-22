import {useState} from 'react';

const ItemCount = ({item, initial, max, addItem}) => { 
 
    
 
    const [qty, setQty] = useState(initial)

    

        const sumar = () => {
            if(qty >=initial && qty <max){
            setQty(qty + 1)
        }
    }

       

        const restar = () => {
            if(qty >initial && qty <=max){
            setQty(qty - 1)
        }
        }

    
    return (
        <div>
            <p>Cantidad : {qty}</p>
            <button className='btn2' onClick={restar}>-</button>
            <button onClick={() => addItem({item, qty})}>Comprar</button>
            <button className='btn2' onClick={sumar}>+</button>
        </div>
    );

    }

    export default ItemCount;