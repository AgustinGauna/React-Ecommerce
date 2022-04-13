import './Style.css' 
import CartWidget from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';

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
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><NavLink to="/categoria/Dulces">Dulces</NavLink></li>
                    <li><NavLink to="/categoria/negro">Negros</NavLink></li>
                    <li><NavLink to="/categoria/frutales">Frutales</NavLink></li>
                   <CartWidget /> 
                </ul>
            </nav>


        </header>
          

          
   
    );
  }

  export default NavBar;