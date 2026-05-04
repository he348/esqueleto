import { Link } from "react-router";
import "../../styles/layout/Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__brand">
          <Link to="/" className="site-header__logo">
            Pizzaria
          </Link>
        </div>

        <nav className="site-header__nav" aria-label="Navegação principal">
          <Link to="/" className="site-header__link">
            Início
          </Link>
          <Link to="/cardapio" className="site-header__link">
            Cardápio
          </Link>
          <Link to="/carrinho" className="site-header__link">
            Sacola
          </Link>
          <Link to="/checkout" className="site-header__link">
            Checkout
          </Link>
          <Link to="/acompanhar-pedido" className="site-header__link">
            Acompanhar pedido
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;