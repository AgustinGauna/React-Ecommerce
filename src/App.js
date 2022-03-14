import NavBar from "./NavBar";
import Item from "./Item"
import ItemCount from './ItemCount'
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";


function App() {

  const miOnAdd = () => {}

  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
      <ItemCount onAdd={miOnAdd} initial={1} max={4}/>
    </>
  );
}

export default App;