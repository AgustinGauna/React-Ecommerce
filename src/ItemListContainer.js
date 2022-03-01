import './Style.css' 
const ItemListContainer = (greeting) => {
    return ( 
        <main className="container">
            <h2 className="greetings">Bienvenido {greeting.nombre}</h2>
        </main>
    )
}

export default ItemListContainer;

