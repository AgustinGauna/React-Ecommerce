import './Style.css' 

function NavBar() {
    return (
      <header>
          <div class="header">
            <div class="inner_header">
                <div class="logo_container">
                    <h1>Coffee <span>Store</span></h1>
                </div>

                <ul class="navigation">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Nosotros</li></a>
                    <a href="#"><li>Contacto</li></a>
                </ul>
            </div>
          </div>
   

      </header>
    );
  }

  export default NavBar;