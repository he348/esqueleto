import "../styles/pages/AcompanharPedidoPage.css";

import pizzaIcon from "../assets/Icones/pizza_home.png";

function AcompanharPedidoPage() {
  return (
    <section className="acompanhar-pedido-page" aria-labelledby="local-title">
      <div className="acompanhar-pedido-page__decor" aria-hidden="true" />

      <div className="acompanhar-pedido-page__container">
        <header className="acompanhar-pedido-page__local-header">
          <div className="acompanhar-pedido-page__ornament" aria-hidden="true">
            <span />
            <strong>✦</strong>
            <span />
          </div>

          <p className="acompanhar-pedido-page__eyebrow">Nosso</p>

          <h1 id="local-title" className="acompanhar-pedido-page__local-title">
            Local
          </h1>

          <div className="acompanhar-pedido-page__subtitle" aria-hidden="true">
            <span />
            <strong>Venha nos conhecer</strong>
            <span />
          </div>
        </header>

        <article className="acompanhar-pedido-page__local-card">
          <div
            className="acompanhar-pedido-page__local-photo"
            role="img"
            aria-label="Fachada da pizzaria Mazzero"
          />
        </article>

        <div className="acompanhar-pedido-page__address">
          <span className="acompanhar-pedido-page__pin" aria-hidden="true">
            ⌖
          </span>

          <h2 className="acompanhar-pedido-page__address-title">
            Rua das Flores, 123
          </h2>

          <p className="acompanhar-pedido-page__address-text">
            Vila Itália — São Paulo, SP
          </p>

          <p className="acompanhar-pedido-page__address-text">CEP 04567-000</p>
        </div>

        <div className="acompanhar-pedido-page__section-divider" aria-hidden="true">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        <section
          className="acompanhar-pedido-page__tracking"
          aria-labelledby="tracking-title"
        >
          <div className="acompanhar-pedido-page__tracking-header">
            <span className="acompanhar-pedido-page__tracking-eyebrow">
              Acompanhamento
            </span>

            <h2 id="tracking-title" className="acompanhar-pedido-page__tracking-title">
              Acompanhe seu pedido
            </h2>

            <p className="acompanhar-pedido-page__tracking-description">
              Consulte o código do pedido e visualize o andamento da entrega.
            </p>
          </div>

          <div className="acompanhar-pedido-page__tracking-content">
            <form className="acompanhar-pedido-page__form">
              <h3 className="acompanhar-pedido-page__form-title">
                Consultar pedido
              </h3>

              <div className="acompanhar-pedido-page__field">
                <label
                  htmlFor="order-code"
                  className="acompanhar-pedido-page__label"
                >
                  Código do pedido
                </label>

                <input
                  id="order-code"
                  type="text"
                  className="acompanhar-pedido-page__input"
                  placeholder="Ex: PED-000123"
                />
              </div>

              <div className="acompanhar-pedido-page__field">
                <label
                  htmlFor="order-phone"
                  className="acompanhar-pedido-page__label"
                >
                  Telefone
                </label>

                <input
                  id="order-phone"
                  type="text"
                  className="acompanhar-pedido-page__input"
                  placeholder="Ex: (11) 99999-9999"
                />
              </div>

              <button type="button" className="acompanhar-pedido-page__button">
                Buscar pedido
              </button>
            </form>

            <article className="acompanhar-pedido-page__status-card">
              <div className="acompanhar-pedido-page__status-header">
                <div>
                  <span className="acompanhar-pedido-page__status-label">
                    Pedido
                  </span>

                  <h3 className="acompanhar-pedido-page__status-code">
                    PED-000123
                  </h3>
                </div>

                <span className="acompanhar-pedido-page__status-badge">
                  Em preparo
                </span>
              </div>

              <div className="acompanhar-pedido-page__timeline">
                <div className="acompanhar-pedido-page__timeline-step acompanhar-pedido-page__timeline-step--done">
                  <h4 className="acompanhar-pedido-page__timeline-title">
                    Pedido recebido
                  </h4>
                  <p className="acompanhar-pedido-page__timeline-text">
                    Seu pedido foi registrado com sucesso.
                  </p>
                </div>

                <div className="acompanhar-pedido-page__timeline-step acompanhar-pedido-page__timeline-step--active">
                  <h4 className="acompanhar-pedido-page__timeline-title">
                    Em preparo
                  </h4>
                  <p className="acompanhar-pedido-page__timeline-text">
                    A cozinha está preparando o seu pedido.
                  </p>
                </div>

                <div className="acompanhar-pedido-page__timeline-step">
                  <h4 className="acompanhar-pedido-page__timeline-title">
                    Saiu para entrega
                  </h4>
                  <p className="acompanhar-pedido-page__timeline-text">
                    Seu pedido será despachado em breve.
                  </p>
                </div>

                <div className="acompanhar-pedido-page__timeline-step">
                  <h4 className="acompanhar-pedido-page__timeline-title">
                    Entregue
                  </h4>
                  <p className="acompanhar-pedido-page__timeline-text">
                    Entrega concluída.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <a href="#cardapio" className="acompanhar-pedido-page__pizza-button">
          <img
            src={pizzaIcon}
            alt=""
            className="acompanhar-pedido-page__pizza-icon"
            aria-hidden="true"
          />

          <span>
            <strong>Pedir a pizza</strong>
            <small>Peça agora e receba em casa</small>
          </span>
        </a>
      </div>
    </section>
  );
}

export default AcompanharPedidoPage;