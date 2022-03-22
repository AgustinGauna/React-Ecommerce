import NavBar from "./NavBar";
import ItemCount from './ItemCount'
import Main from "./Main";
import ItemDetailContainer from "./ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import CartContext from "./CartContext";

function App() {
  return (

    <CartContext>
        <BrowserRouter>
            <NavBar />
            <Main />
            <ToastContainer/>
        </BrowserRouter>
    </CartContext>
  );
}

export default App;