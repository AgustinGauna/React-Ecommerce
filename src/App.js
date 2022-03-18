import NavBar from "./NavBar";
import ItemCount from './ItemCount'
import Main from "./Main";
import ItemDetailContainer from "./ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

function App() {

  
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;