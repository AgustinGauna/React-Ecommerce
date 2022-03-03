import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer"
import ItemCount from './ItemCount'


function App() {

  const miOnAdd = () => {}

  return (
    <>
      <NavBar />
      <ItemListContainer nombre="Sergio"  />
      <ItemCount onAdd={miOnAdd} initial={1} max={4}/>
    </>
  );
}

export default App;