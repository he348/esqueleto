import "../styles/pages/HomePage.css";

import pizzaIcon from "../assets/Icones/pizza_home.png";

import CardapioPage from "./CardapioPage";
import PromocoesPage from "./PromocoesPage";
import AcompanharPedidoPage from "./AcompanharPedidoPage";

function HomePage() {
  return (
    <>
      <section id="inicio" className="home-page" aria-labelledby="home-title">
        <div className="home-page__background" aria-hidden="true" />

        <div className="home-page__overlay">
          <div className="home-page__container">
            <div className="home-page__content">
              <h1 id="home-title" className="home-page__title">
                A verdadeira
                <br />
                pizza italiana,
                <br />
                <span>direto do forno a lenha.</span>
              </h1>

              <div className="home-page__divider" aria-hidden="true">
                <span className="home-page__divider-line home-page__divider-line--green" />
                <span className="home-page__divider-line home-page__divider-line--white" />
                <span className="home-page__divider-line home-page__divider-line--red" />
              </div>

              <p className="home-page__description">
                Massa artesanal, ingredientes selecionados
                <br />
                e sabor incomparável em cada fatia.
              </p>

              <div className="home-page__actions">
                <a href="#cardapio" className="home-page__button">
                  <img
                    src={pizzaIcon}
                    alt=""
                    className="home-page__button-icon"
                    aria-hidden="true"
                  />
                  Pedir agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cardapio" className="home-section">
        <CardapioPage />
      </section>

      <section id="promocoes" className="home-section">
        <PromocoesPage />
      </section>

      <section id="local" className="home-section">
        <AcompanharPedidoPage />
      </section>
    </>
  );
}

export default HomePage;