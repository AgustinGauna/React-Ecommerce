import './Style.css' 
import ItemList from "./ItemList";
const ItemListContainer = (greeting) => {
    return ( 
        <main className="container">
            <h2 className="greetings">Bienvenido {greeting.nombre}</h2>       
            <ItemList />
        </main>
        
    )
}

export default ItemListContainer;

