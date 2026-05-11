import { Link } from "react-router";
import "../styles/pages/CarrinhoPage.css";

import refrigeranteIcon from "../assets/Icones/Refrigerante.png";
import bordaIcon from "../assets/Icones/borda.png";
import pedidoIcon from "../assets/Icones/Pedido.png";
import bolsaIcon from "../assets/Icones/Bolsa.png";
import confirmarIcon from "../assets/Icones/Confirmar.png";
import cadeadoIcon from "../assets/Icones/Cadeado.png";
import carrinhoIcon from "../assets/Icones/carrinho.png";
import coroaIcon from "../assets/Icones/Coroa_dourada.png";

type DrinkOption = {
  id: string;
  name: string;
  price?: string;
};

type BorderOption = {
  id: string;
  name: string;
  description: string;
};

const drinks: DrinkOption[] = [
  {
    id: "coca-350",
    name: "Coca-Cola 350ml",
    price: "R$ 6,90",
  },
  {
    id: "coca-1l",
    name: "Coca-Cola 1L",
    price: "R$ 12,90",
  },
  {
    id: "coca-zero-350",
    name: "Coca-Cola Zero 350ml",
    price: "R$ 6,90",
  },
  {
    id: "coca-zero-1l",
    name: "Coca-Cola Zero 1L",
    price: "R$ 12,90",
  },
  {
    id: "guarana-350",
    name: "Guaraná Antarctica 350ml",
    price: "R$ 6,90",
  },
  {
    id: "guarana-1l",
    name: "Guaraná Antarctica 1L",
    price: "R$ 12,90",
  },
  {
    id: "fanta-350",
    name: "Fanta Laranja 350ml",
    price: "R$ 6,90",
  },
  {
    id: "fanta-1l",
    name: "Fanta Laranja 1L",
    price: "R$ 12,90",
  },
  {
    id: "sprite-350",
    name: "Sprite 350ml",
    price: "R$ 6,90",
  },
  {
    id: "sprite-1l",
    name: "Sprite 1L",
    price: "R$ 12,90",
  },
  {
    id: "sem-refrigerante",
    name: "Não quero refrigerante",
  },
];

const borders: BorderOption[] = [
  {
    id: "sem-borda",
    name: "Sem borda tradicional",
    description: "A borda tradicional da nossa pizza.",
  },
  {
    id: "catupiry",
    name: "Borda Catupiry",
    description: "Recheada com catupiry cremoso.",
  },
  {
    id: "cheddar",
    name: "Borda Cheddar",
    description: "Recheada com cheddar cremoso.",
  },
  {
    id: "chocolate",
    name: "Borda Chocolate",
    description: "Recheada com chocolate ao leite.",
  },
  {
    id: "leite-ninho",
    name: "Borda doce com Leite Ninho",
    description: "Recheada com leite ninho e leite condensado.",
  },
 
];

function CarrinhoPage() {
  return (
    <section className="carrinho-page" aria-labelledby="carrinho-title">
      <div className="carrinho-page__container">
        <div className="carrinho-page__ornament" aria-hidden="true">
          <span />
          <img src={coroaIcon} alt="" />
          <span />
        </div>

        <header className="carrinho-page__header">
          <div className="carrinho-page__title-line" aria-hidden="true" />

          <h1 id="carrinho-title" className="carrinho-page__title">
            Complementos do seu pedido
          </h1>

          <div className="carrinho-page__title-line" aria-hidden="true" />
        </header>

        <div className="carrinho-page__options-grid">
          <section className="carrinho-page__panel" aria-labelledby="drinks-title">
            <PanelHeader
              icon={refrigeranteIcon}
              title="Refrigerantes"
              titleId="drinks-title"
            />

            <div className="carrinho-page__drink-list">
              {drinks.map((drink) => (
                <label key={drink.id} className="carrinho-page__drink-option">
                  <input
                    className="carrinho-page__radio-input"
                    type="radio"
                    name="drink"
                    value={drink.id}
                  />

                  <span className="carrinho-page__fake-radio" aria-hidden="true" />

                  <span className="carrinho-page__option-name">{drink.name}</span>

                  {drink.price && (
                    <strong className="carrinho-page__option-price">
                      {drink.price}
                    </strong>
                  )}
                </label>
              ))}
            </div>
          </section>

          <section className="carrinho-page__panel" aria-labelledby="border-title">
            <PanelHeader
              icon={bordaIcon}
              title="Borda da pizza"
              titleId="border-title"
            />

            <div className="carrinho-page__border-list">
              {borders.map((border) => (
                <label key={border.id} className="carrinho-page__border-option">
                  <input
                    className="carrinho-page__radio-input"
                    type="radio"
                    name="pizza-border"
                    value={border.id}
                  />

                  <span className="carrinho-page__fake-radio" aria-hidden="true" />

                  <span className="carrinho-page__border-content">
                    <strong>{border.name}</strong>
                    <small>{border.description}</small>
                  </span>
                </label>
              ))}
            </div>
          </section>
        </div>

        <section className="carrinho-page__orders-card" aria-labelledby="orders-title">
          <div className="carrinho-page__orders-info">
            <div className="carrinho-page__orders-icon-circle">
              <img src={pedidoIcon} alt="" aria-hidden="true" />
            </div>

            <p>
              Acompanhe seus pedidos
              <br />
              adicionados até agora.
            </p>
          </div>

          <div className="carrinho-page__orders-divider" aria-hidden="true" />

          <div className="carrinho-page__orders-summary">
            <div className="carrinho-page__orders-title-row">
              <img src={bolsaIcon} alt="" aria-hidden="true" />

              <div>
                <h2 id="orders-title">Seus pedidos</h2>
                <span aria-hidden="true" />
              </div>
            </div>

            <p className="carrinho-page__orders-label">
              Pedidos enviados até agora
            </p>

            <strong className="carrinho-page__orders-count">
              0 <span>pedido(s)</span>
            </strong>
          </div>

          <Link to="/carrinho" className="carrinho-page__details-button">
            Ver detalhes
            <span aria-hidden="true">›</span>
          </Link>
        </section>

        <Link to="/checkout" className="carrinho-page__confirm-button">
          <img src={confirmarIcon} alt="" aria-hidden="true" />
          Confirmar pedido
        </Link>

        <p className="carrinho-page__secure-text">
          <img src={cadeadoIcon} alt="" aria-hidden="true" />
          Seus dados e pedido estão seguros conosco.
        </p>

      </div>
    </section>
  );
}

type PanelHeaderProps = {
  icon: string;
  title: string;
  titleId: string;
};

function PanelHeader({ icon, title, titleId }: PanelHeaderProps) {
  return (
    <header className="carrinho-page__panel-header">
      <img src={icon} alt="" aria-hidden="true" />

      <h2 id={titleId}>{title}</h2>

      <div className="carrinho-page__panel-decoration" aria-hidden="true">
        <span />
        <strong>✦</strong>
        <span />
      </div>
    </header>
  );
}

export default CarrinhoPage;