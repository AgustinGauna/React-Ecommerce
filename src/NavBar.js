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
                    <li><Link to="/categoria/cat2">Contacto</Link></li>
                    <li><Link to="/categoria/cat3">Nosotros</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                </ul>
            </nav>


        </header>
          

          
   
    );
  }

  export default NavBar;