import './Style.css' 
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      
        <header>

            <div className="logo">
            <Link to="/">
                <h1>Coffee <span>Store</span></h1>
            </Link>
            </div>
            <nav>
                <ul className='nav__links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categoria/Dulces">Dulces</Link></li>
                    <li><Link to="/categoria/negro">Negros</Link></li>
                    <li><Link to="/categoria/frutales">Frutales</Link></li>
                   <CartWidget /> 
                </ul>
            </nav>


        </header>
          

          
   
    );
  }

  export default NavBar;