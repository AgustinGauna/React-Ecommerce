import NavBar from "./NavBar";
import Main from "./Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from './CartContext';
import Footer from "./Footer";

function App() {
  return (

    <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Main />
            <ToastContainer theme="dark"/>
            <Footer />
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;