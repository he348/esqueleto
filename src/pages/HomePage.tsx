import { Link } from "react-router";

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page__hero">
        <div className="home-page__hero-content">
          <span className="home-page__eyebrow">Delivery de pizzaria</span>
          <h1 className="home-page__title">
            Monte seu pedido e acompanhe cada etapa.
          </h1>
          <p className="home-page__description">
            Escolha sabores, bordas, bebidas e finalize sua compra sem precisar
            criar conta.
          </p>

          <div className="home-page__actions">
            <Link
              to="/cardapio"
              className="home-page__button home-page__button--primary"
            >
              Ver cardápio
            </Link>

            <Link
              to="/acompanhar-pedido"
              className="home-page__button home-page__button--secondary"
            >
              Acompanhar pedido
            </Link>
          </div>
        </div>
      </div>

      <section className="home-page__section">
        <div className="home-page__section-header">
          <h2 className="home-page__section-title">Como funciona</h2>
          <p className="home-page__section-text">
            Um fluxo simples para o cliente escolher, pagar e acompanhar o pedido.
          </p>
        </div>

        <div className="home-page__steps">
          <article className="home-page__step-card">
            <h3 className="home-page__step-title">1. Escolha no cardápio</h3>
            <p className="home-page__step-text">
              Veja sabores, tamanhos, bordas e bebidas disponíveis.
            </p>
          </article>

          <article className="home-page__step-card">
            <h3 className="home-page__step-title">2. Monte sua sacola</h3>
            <p className="home-page__step-text">
              Adicione pizzas personalizadas e bebidas ao carrinho.
            </p>
          </article>

          <article className="home-page__step-card">
            <h3 className="home-page__step-title">3. Finalize o pedido</h3>
            <p className="home-page__step-text">
              Informe endereço, pagamento e acompanhe o andamento.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default HomePage;