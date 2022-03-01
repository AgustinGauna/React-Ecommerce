import './Style.css' 
import CartWidget from "./CartWidget";

function NavBar() {
    return (
      
          <div className="header">
            <div className="inner_header">
                <div className="logo_container">
                    <h1>Coffee <span>Store <CartWidget /></span></h1>
                    
                </div>
                <nav className="navigation">
                <ul className="navigation">
                    <a href="/#"><li>Home</li></a>
                    <a href="/#"><li>Nosotros</li></a>
                    <a href="/#"><li>Contacto</li></a>
                </ul>
                </nav>
            </div>
          </div>
   
    );
  }

  export default NavBar;