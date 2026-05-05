import "../styles/pages/PainelCozinhaPage.css";

type StatusPedido =
  | "Recebido"
  | "Confirmado"
  | "Em preparo"
  | "Saiu para entrega"
  | "Entregue"
  | "Cancelado";

type PedidoMock = {
  id: string;
  codigo: string;
  cliente: string;
  telefone: string;
  horario: string;
  pagamento: string;
  total: string;
  status: StatusPedido;
  itens: string[];
  observacoes?: string;
};

const pedidosMock: PedidoMock[] = [
  {
    id: "1",
    codigo: "PED-000123",
    cliente: "João Silva",
    telefone: "(47) 99999-0001",
    horario: "19:10",
    pagamento: "Pix",
    total: "R$ 79,90",
    status: "Recebido",
    itens: [
      "1 Pizza média - Calabresa / Portuguesa - borda Catupiry",
      "2 Coca-Cola 2L",
    ],
    observacoes: "Sem cebola na pizza.",
  },
  {
    id: "2",
    codigo: "PED-000124",
    cliente: "Maria Souza",
    telefone: "(47) 99999-0002",
    horario: "19:18",
    pagamento: "Dinheiro",
    total: "R$ 58,00",
    status: "Em preparo",
    itens: [
      "1 Pizza grande - Frango com Catupiry",
      "1 Guaraná lata",
    ],
    observacoes: "Troco para R$ 100,00.",
  },
  {
    id: "3",
    codigo: "PED-000125",
    cliente: "Carlos Mendes",
    telefone: "(47) 99999-0003",
    horario: "19:27",
    pagamento: "Cartão na entrega",
    total: "R$ 92,00",
    status: "Saiu para entrega",
    itens: [
      "1 Pizza grande - Calabresa / Frango com Catupiry",
      "1 Coca-Cola 2L",
      "1 Pudim",
    ],
  },
];

function PainelCozinhaPage() {
  return (
    <section className="painel-cozinha-page">
      <header className="painel-cozinha-page__header">
        <div className="painel-cozinha-page__header-content">
          <span className="painel-cozinha-page__eyebrow">
            Painel operacional
          </span>
          <h1 className="painel-cozinha-page__title">
            Pedidos da cozinha e entrega
          </h1>
          <p className="painel-cozinha-page__description">
            Visualize os pedidos recebidos e atualize o status de cada um.
          </p>
        </div>

        <div className="painel-cozinha-page__header-actions">
          <button type="button" className="painel-cozinha-page__header-button">
            Atualizar lista
          </button>
          <button
            type="button"
            className="painel-cozinha-page__header-button painel-cozinha-page__header-button--secondary"
          >
            Sair
          </button>
        </div>
      </header>

      <section className="painel-cozinha-page__filters">
        <div className="painel-cozinha-page__filter-field">
          <label
            htmlFor="filtro-status"
            className="painel-cozinha-page__filter-label"
          >
            Filtrar por status
          </label>
          <select
            id="filtro-status"
            className="painel-cozinha-page__filter-input"
          >
            <option>Todos</option>
            <option>Recebido</option>
            <option>Confirmado</option>
            <option>Em preparo</option>
            <option>Saiu para entrega</option>
            <option>Entregue</option>
            <option>Cancelado</option>
          </select>
        </div>

        <div className="painel-cozinha-page__filter-field">
          <label
            htmlFor="busca-pedido"
            className="painel-cozinha-page__filter-label"
          >
            Buscar pedido
          </label>
          <input
            id="busca-pedido"
            type="text"
            className="painel-cozinha-page__filter-input"
            placeholder="Código, cliente ou telefone"
          />
        </div>
      </section>

      <section className="painel-cozinha-page__summary">
        <article className="painel-cozinha-page__summary-card">
          <span className="painel-cozinha-page__summary-label">Recebidos</span>
          <strong className="painel-cozinha-page__summary-value">4</strong>
        </article>

        <article className="painel-cozinha-page__summary-card">
          <span className="painel-cozinha-page__summary-label">Em preparo</span>
          <strong className="painel-cozinha-page__summary-value">3</strong>
        </article>

        <article className="painel-cozinha-page__summary-card">
          <span className="painel-cozinha-page__summary-label">Entrega</span>
          <strong className="painel-cozinha-page__summary-value">2</strong>
        </article>

        <article className="painel-cozinha-page__summary-card">
          <span className="painel-cozinha-page__summary-label">Concluídos</span>
          <strong className="painel-cozinha-page__summary-value">18</strong>
        </article>
      </section>

      <section className="painel-cozinha-page__list">
        {pedidosMock.map((pedido) => (
          <article className="painel-cozinha-page__card" key={pedido.id}>
            <div className="painel-cozinha-page__card-top">
              <div className="painel-cozinha-page__card-identification">
                <span className="painel-cozinha-page__card-code">
                  {pedido.codigo}
                </span>
                <h2 className="painel-cozinha-page__card-customer">
                  {pedido.cliente}
                </h2>
                <p className="painel-cozinha-page__card-meta">
                  {pedido.telefone} • {pedido.horario}
                </p>
              </div>

              <div className="painel-cozinha-page__card-side">
                <span className="painel-cozinha-page__status-badge">
                  {pedido.status}
                </span>
                <strong className="painel-cozinha-page__card-total">
                  {pedido.total}
                </strong>
              </div>
            </div>

            <div className="painel-cozinha-page__card-body">
              <div className="painel-cozinha-page__info-group">
                <span className="painel-cozinha-page__info-label">
                  Pagamento
                </span>
                <p className="painel-cozinha-page__info-text">
                  {pedido.pagamento}
                </p>
              </div>

              <div className="painel-cozinha-page__info-group">
                <span className="painel-cozinha-page__info-label">Itens</span>
                <ul className="painel-cozinha-page__items-list">
                  {pedido.itens.map((item, index) => (
                    <li
                      className="painel-cozinha-page__item"
                      key={`${pedido.id}-${index}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="painel-cozinha-page__info-group">
                <span className="painel-cozinha-page__info-label">
                  Observações
                </span>
                <p className="painel-cozinha-page__info-text">
                  {pedido.observacoes || "Sem observações"}
                </p>
              </div>
            </div>

            <div className="painel-cozinha-page__card-actions">
              <button
                type="button"
                className="painel-cozinha-page__action-button"
              >
                Confirmar
              </button>

              <button
                type="button"
                className="painel-cozinha-page__action-button"
              >
                Em preparo
              </button>

              <button
                type="button"
                className="painel-cozinha-page__action-button"
              >
                Saiu para entrega
              </button>

              <button
                type="button"
                className="painel-cozinha-page__action-button"
              >
                Entregue
              </button>

              <button
                type="button"
                className="painel-cozinha-page__action-button painel-cozinha-page__action-button--danger"
              >
                Cancelar
              </button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default PainelCozinhaPage;