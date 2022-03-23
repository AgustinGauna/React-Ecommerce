import NavBar from "./NavBar";
import ItemCount from './ItemCount'
import Main from "./Main";
import ItemDetailContainer from "./ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from './CartContext';

function App() {
  return (

    <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Main />
            <ToastContainer/>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;