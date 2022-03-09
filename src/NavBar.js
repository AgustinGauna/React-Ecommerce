import './Style.css' 
import CartWidget from "./CartWidget";

function NavBar() {
    return (
      
        <header>

            <div className="logo">
            <h1>Coffee <span>Store <CartWidget /></span></h1>
            </div>
            <nav>
                <ul className='nav__links'>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Nosotros</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>


        </header>
          

          
   
    );
  }

  export default NavBar;