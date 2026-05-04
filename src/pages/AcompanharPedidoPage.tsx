import "../styles/pages/AcompanharPedidoPage.css";
function AcompanharPedidoPage() {
  return (
    <section className="acompanhar-pedido-page">
      <header className="acompanhar-pedido-page__header">
        <span className="acompanhar-pedido-page__eyebrow">Acompanhamento</span>
        <h1 className="acompanhar-pedido-page__title">Acompanhe seu pedido</h1>
        <p className="acompanhar-pedido-page__description">
          Consulte o código e visualize o andamento da entrega.
        </p>
      </header>

      <div className="acompanhar-pedido-page__content">
        <section className="acompanhar-pedido-page__lookup">
          <h2 className="acompanhar-pedido-page__section-title">Consultar pedido</h2>

          <form className="acompanhar-pedido-page__form">
            <div className="acompanhar-pedido-page__field">
              <label htmlFor="order-code" className="acompanhar-pedido-page__label">
                Código do pedido
              </label>
              <input
                id="order-code"
                type="text"
                className="acompanhar-pedido-page__input"
              />
            </div>

            <div className="acompanhar-pedido-page__field">
              <label htmlFor="order-phone" className="acompanhar-pedido-page__label">
                Telefone
              </label>
              <input
                id="order-phone"
                type="text"
                className="acompanhar-pedido-page__input"
              />
            </div>

            <button type="button" className="acompanhar-pedido-page__button">
              Buscar pedido
            </button>
          </form>
        </section>

        <section className="acompanhar-pedido-page__status-card">
          <div className="acompanhar-pedido-page__status-header">
            <div>
              <span className="acompanhar-pedido-page__status-eyebrow">Pedido</span>
              <h2 className="acompanhar-pedido-page__status-title">PED-000123</h2>
            </div>

            <span className="acompanhar-pedido-page__status-badge">
              Em preparo
            </span>
          </div>

          <div className="acompanhar-pedido-page__timeline">
            <div className="acompanhar-pedido-page__timeline-step acompanhar-pedido-page__timeline-step--done">
              <h3 className="acompanhar-pedido-page__timeline-title">Pedido recebido</h3>
              <p className="acompanhar-pedido-page__timeline-text">
                Seu pedido foi registrado com sucesso.
              </p>
            </div>

            <div className="acompanhar-pedido-page__timeline-step acompanhar-pedido-page__timeline-step--active">
              <h3 className="acompanhar-pedido-page__timeline-title">Em preparo</h3>
              <p className="acompanhar-pedido-page__timeline-text">
                A cozinha está preparando o seu pedido.
              </p>
            </div>

            <div className="acompanhar-pedido-page__timeline-step">
              <h3 className="acompanhar-pedido-page__timeline-title">Saiu para entrega</h3>
              <p className="acompanhar-pedido-page__timeline-text">
                Seu pedido será despachado em breve.
              </p>
            </div>

            <div className="acompanhar-pedido-page__timeline-step">
              <h3 className="acompanhar-pedido-page__timeline-title">Entregue</h3>
              <p className="acompanhar-pedido-page__timeline-text">
                Entrega concluída.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AcompanharPedidoPage;