import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../../styles/layout/Header.css";

type HeaderTheme = "dark" | "light";

const darkSections = ["inicio", "local"];

function Header() {
  const [theme, setTheme] = useState<HeaderTheme>("dark");
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const sectionIds = ["inicio", "cardapio", "promocoes", "local"];
      const scrollReference = window.scrollY + 140;

      let currentSection = "inicio";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (!section) continue;

        if (section.offsetTop <= scrollReference) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
      setTheme(darkSections.includes(currentSection) ? "dark" : "light");
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function getLinkClass(section: string) {
    return activeSection === section
      ? "site-header__link site-header__link--active"
      : "site-header__link";
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header site-header--${theme}`}>
      <div className="site-header__container">
        <a
          href="/#inicio"
          className="site-header__brand"
          aria-label="Ir para o início"
          onClick={closeMenu}
        >
          <span className="site-header__logo">MAZZERO</span>

          <span className="site-header__subtitle">
            <span className="site-header__line site-header__line--green" />
            PIZZERIA ITALIANA
            <span className="site-header__line site-header__line--red" />
          </span>
        </a>

        <button
          type="button"
          className={`site-header__menu-button ${
            menuOpen ? "site-header__menu-button--open" : ""
          }`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-header__nav ${
            menuOpen ? "site-header__nav--open" : ""
          }`}
          aria-label="Navegação principal"
        >
          <a
            href="/#inicio"
            className={getLinkClass("inicio")}
            onClick={closeMenu}
          >
            Início
          </a>

          <a
            href="/#cardapio"
            className={getLinkClass("cardapio")}
            onClick={closeMenu}
          >
            Cardápio
          </a>

          <a
            href="/#promocoes"
            className={getLinkClass("promocoes")}
            onClick={closeMenu}
          >
            Promoções
          </a>

          <a
            href="/#local"
            className={getLinkClass("local")}
            onClick={closeMenu}
          >
            Local
          </a>
        </nav>

        <Link
          to="/carrinho"
          className="site-header__order"
          aria-label="Abrir meu pedido"
          onClick={closeMenu}
        >
          <span className="site-header__cart-icon" aria-hidden="true">
            🛒
          </span>

          <span className="site-header__order-text">Meu pedido</span>
          <span className="site-header__order-count">0</span>
          <span className="site-header__order-price">R$ 0,00</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;