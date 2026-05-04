import { Link } from "react-router";
import "../styles/pages/CardapioPage.css";

function CardapioPage() {
  return (
    <section className="cardapio-page">
      <header className="cardapio-page__header">
        <span className="cardapio-page__eyebrow">Cardápio</span>
        <h1 className="cardapio-page__title">Escolha seu pedido</h1>
        <p className="cardapio-page__description">
          Veja pizzas, bebidas e acompanhamentos disponíveis.
        </p>
      </header>

      <section className="cardapio-page__section">
        <div className="cardapio-page__section-heading">
          <h2 className="cardapio-page__section-title">Pizzas</h2>
          <p className="cardapio-page__section-text">
            Monte sua pizza escolhendo tamanho, sabores e borda.
          </p>
        </div>

        <div className="cardapio-page__destaque">
          <div className="cardapio-page__destaque-content">
            <h3 className="cardapio-page__destaque-title">Monte sua pizza</h3>
            <p className="cardapio-page__destaque-text">
              Escolha o tamanho, combine sabores e selecione a borda recheada.
            </p>
          </div>

          <div className="cardapio-page__destaque-action">
            <Link to="/montagem-pizza" className="cardapio-page__button">
              Ir para montagem
            </Link>
          </div>
        </div>
      </section>

      <section className="cardapio-page__section">
        <div className="cardapio-page__section-heading">
          <h2 className="cardapio-page__section-title">Bebidas</h2>
          <p className="cardapio-page__section-text">
            Adicione bebidas e outros itens simples diretamente à sacola.
          </p>
        </div>

        <div className="cardapio-page__grid">
          <article className="cardapio-page__card">
            <div className="cardapio-page__card-media" />
            <div className="cardapio-page__card-body">
              <span className="cardapio-page__card-category">Bebida</span>
              <h3 className="cardapio-page__card-title">Coca-Cola 2L</h3>
              <p className="cardapio-page__card-description">
                Refrigerante para acompanhar o pedido.
              </p>
              <div className="cardapio-page__card-footer">
                <span className="cardapio-page__card-price">R$ 12,00</span>
                <button className="cardapio-page__card-button" type="button">
                  Adicionar
                </button>
              </div>
            </div>
          </article>

          <article className="cardapio-page__card">
            <div className="cardapio-page__card-media" />
            <div className="cardapio-page__card-body">
              <span className="cardapio-page__card-category">Bebida</span>
              <h3 className="cardapio-page__card-title">Guaraná lata</h3>
              <p className="cardapio-page__card-description">
                Lata individual para complementar a refeição.
              </p>
              <div className="cardapio-page__card-footer">
                <span className="cardapio-page__card-price">R$ 6,00</span>
                <button className="cardapio-page__card-button" type="button">
                  Adicionar
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}

export default CardapioPage;