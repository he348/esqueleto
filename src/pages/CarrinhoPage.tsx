import { Link } from "react-router";
import "../styles/pages/CarrinhoPage.css";

function CarrinhoPage() {
  return (
    <section className="carrinho-page">
      <header className="carrinho-page__header">
        <span className="carrinho-page__eyebrow">Sacola</span>
        <h1 className="carrinho-page__title">Revise seu pedido</h1>
        <p className="carrinho-page__description">
          Confira pizzas, bebidas, quantidades e totais antes de continuar.
        </p>
      </header>

      <div className="carrinho-page__content">
        <div className="carrinho-page__items">
          <article className="carrinho-page__item-card">
            <div className="carrinho-page__item-header">
              <h2 className="carrinho-page__item-title">Pizza média</h2>
              <span className="carrinho-page__item-price">R$ 55,90</span>
            </div>

            <div className="carrinho-page__item-body">
              <p className="carrinho-page__item-text">Sabores: Calabresa / Portuguesa</p>
              <p className="carrinho-page__item-text">Borda: Catupiry</p>
              <p className="carrinho-page__item-text">Observação: Sem cebola</p>
            </div>

            <div className="carrinho-page__item-footer">
              <div className="carrinho-page__quantity">
                <button type="button" className="carrinho-page__quantity-button">
                  -
                </button>
                <span className="carrinho-page__quantity-value">1</span>
                <button type="button" className="carrinho-page__quantity-button">
                  +
                </button>
              </div>

              <div className="carrinho-page__actions">
                <button type="button" className="carrinho-page__action-button">
                  Editar
                </button>
                <button
                  type="button"
                  className="carrinho-page__action-button carrinho-page__action-button--danger"
                >
                  Remover
                </button>
              </div>
            </div>
          </article>

          <article className="carrinho-page__item-card">
            <div className="carrinho-page__item-header">
              <h2 className="carrinho-page__item-title">Coca-Cola 2L</h2>
              <span className="carrinho-page__item-price">R$ 24,00</span>
            </div>

            <div className="carrinho-page__item-body">
              <p className="carrinho-page__item-text">Quantidade: 2</p>
              <p className="carrinho-page__item-text">Observação: sem observações</p>
            </div>

            <div className="carrinho-page__item-footer">
              <div className="carrinho-page__quantity">
                <button type="button" className="carrinho-page__quantity-button">
                  -
                </button>
                <span className="carrinho-page__quantity-value">2</span>
                <button type="button" className="carrinho-page__quantity-button">
                  +
                </button>
              </div>

              <div className="carrinho-page__actions">
                <button
                  type="button"
                  className="carrinho-page__action-button carrinho-page__action-button--danger"
                >
                  Remover
                </button>
              </div>
            </div>
          </article>
        </div>

        <aside className="carrinho-page__summary">
          <h2 className="carrinho-page__summary-title">Resumo do pedido</h2>

          <div className="carrinho-page__summary-card">
            <p className="carrinho-page__summary-line">
              <span>Subtotal</span>
              <span>R$ 79,90</span>
            </p>
            <p className="carrinho-page__summary-line">
              <span>Entrega</span>
              <span>A calcular</span>
            </p>
            <p className="carrinho-page__summary-total">
              <span>Total</span>
              <strong>R$ 79,90</strong>
            </p>
          </div>

          <div className="carrinho-page__summary-actions">
            <Link to="/cardapio" className="carrinho-page__secondary-button">
              Continuar comprando
            </Link>
            <Link to="/checkout" className="carrinho-page__primary-button">
              Ir para checkout
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default CarrinhoPage;