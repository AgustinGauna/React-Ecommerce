import './Style.css' 
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      
        <header>

            <div className="logo">
            <Link to="/">
                <h1>Coffee <span>Store <CartWidget /></span></h1>
            </Link>
            </div>
            <nav>
                <ul className='nav__links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categoria/1">Dulces</Link></li>
                    <li><Link to="/categoria/2">Negros</Link></li>
                    <li><Link to="/categoria/3">Frutales</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                </ul>
            </nav>


        </header>
          

          
   
    );
  }

  export default NavBar;