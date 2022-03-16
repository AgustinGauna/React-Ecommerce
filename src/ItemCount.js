import {useState} from 'react';

const ItemCount = (cuenta) => { 
 
    const miOnAdd = () => {
            console.log("Compra exitosa")
    }
 
    const [contador, setContador] = useState(cuenta.initial)

    

        const sumar = () => {
            if(contador >=cuenta.initial && contador <cuenta.max){
            setContador(contador + 1)
        }
    }

    

        const restar = () => {
            if(contador >cuenta.initial && contador <=cuenta.max){
            setContador(contador - 1)
        }
        }

    
    return (
        <div>
            <p>Cantidad : {contador}</p>
            <button onClick={restar}>restar</button>
            <button onClick={miOnAdd}>Comprar</button>
            <button onClick={sumar}>aumentar</button>
        </div>
    );

    }

    export default ItemCount;