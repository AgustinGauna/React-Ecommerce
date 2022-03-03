import {useState} from 'react';

const ItemCount = (cuenta) => { 
 
    const miOnAdd = () => {
        if(contador >= 1 && contador <= cuenta.max){
            console.log("Compra exitosa")
        } else {
            console.log("Cantidad incorrecta")
        }
    }
 
    const [contador, setContador] = useState(cuenta.initial)


    const sumar = () => {
     setContador(contador + 1)
     }

    const restar = () => {
        setContador(contador - 1)
        }

    
    return (
        <div>
            <p>Mi contador actual : {contador}</p>
            <button onClick={restar}>restar</button>
            <button onClick={miOnAdd}>Comprar</button>
            <button onClick={sumar}>aumentar</button>
        </div>
    );

    }

    export default ItemCount;