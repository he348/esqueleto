import "../styles/pages/PedidoSucessoPage.css";
import { Link } from "react-router";

function PedidoSucessoPage() {
  return (
    <section className="pedido-sucesso-page">
      <div className="pedido-sucesso-page__card">
        <span className="pedido-sucesso-page__eyebrow">Pedido confirmado</span>
        <h1 className="pedido-sucesso-page__title">Pedido recebido com sucesso</h1>
        <p className="pedido-sucesso-page__description">
          Seu pedido foi criado e já pode ser acompanhado em tempo real.
        </p>

        <div className="pedido-sucesso-page__code-box">
          <span className="pedido-sucesso-page__code-label">Código do pedido</span>
          <strong className="pedido-sucesso-page__code-value">PED-000123</strong>
        </div>

        <div className="pedido-sucesso-page__actions">
          <Link
            to="/acompanhar-pedido"
            className="pedido-sucesso-page__button pedido-sucesso-page__button--primary"
          >
            Acompanhar pedido
          </Link>

          <Link
            to="/cardapio"
            className="pedido-sucesso-page__button pedido-sucesso-page__button--secondary"
          >
            Voltar ao cardápio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PedidoSucessoPage;