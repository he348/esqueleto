import "../styles/pages/MontagemPizzaPage.css";

function MontagemPizzaPage() {
  return (
    <section className="montagem-pizza-page">
      <header className="montagem-pizza-page__header">
        <span className="montagem-pizza-page__eyebrow">Montagem da pizza</span>
        <h1 className="montagem-pizza-page__title">Monte sua pizza</h1>
        <p className="montagem-pizza-page__description">
          Escolha tamanho, sabores, borda, observações e quantidade.
        </p>
      </header>

      <div className="montagem-pizza-page__content">
        <form className="montagem-pizza-page__form">
          <section className="montagem-pizza-page__block">
            <h2 className="montagem-pizza-page__block-title">Tamanho</h2>

            <div className="montagem-pizza-page__options">
              <label className="montagem-pizza-page__option-card">
                <input type="radio" name="pizza-size" />
                <span className="montagem-pizza-page__option-name">Média</span>
                <span className="montagem-pizza-page__option-meta">6 fatias</span>
                <span className="montagem-pizza-page__option-price">R$ 39,90</span>
              </label>

              <label className="montagem-pizza-page__option-card">
                <input type="radio" name="pizza-size" />
                <span className="montagem-pizza-page__option-name">Grande</span>
                <span className="montagem-pizza-page__option-meta">8 fatias</span>
                <span className="montagem-pizza-page__option-price">R$ 49,90</span>
              </label>
            </div>
          </section>

          <section className="montagem-pizza-page__block">
            <h2 className="montagem-pizza-page__block-title">Sabores</h2>

            <div className="montagem-pizza-page__options">
              <label className="montagem-pizza-page__option-card">
                <input type="checkbox" name="pizza-flavor" />
                <span className="montagem-pizza-page__option-name">Calabresa</span>
                <span className="montagem-pizza-page__option-meta">
                  Calabresa com cebola
                </span>
                <span className="montagem-pizza-page__option-price">+ R$ 0,00</span>
              </label>

              <label className="montagem-pizza-page__option-card">
                <input type="checkbox" name="pizza-flavor" />
                <span className="montagem-pizza-page__option-name">
                  Frango com Catupiry
                </span>
                <span className="montagem-pizza-page__option-meta">
                  Frango desfiado com catupiry
                </span>
                <span className="montagem-pizza-page__option-price">+ R$ 4,00</span>
              </label>

              <label className="montagem-pizza-page__option-card">
                <input type="checkbox" name="pizza-flavor" />
                <span className="montagem-pizza-page__option-name">Portuguesa</span>
                <span className="montagem-pizza-page__option-meta">
                  Presunto, ovo e cebola
                </span>
                <span className="montagem-pizza-page__option-price">+ R$ 2,00</span>
              </label>
            </div>
          </section>

          <section className="montagem-pizza-page__block">
            <h2 className="montagem-pizza-page__block-title">Borda</h2>

            <div className="montagem-pizza-page__options">
              <label className="montagem-pizza-page__option-card">
                <input type="radio" name="pizza-crust" />
                <span className="montagem-pizza-page__option-name">Sem borda</span>
                <span className="montagem-pizza-page__option-price">R$ 0,00</span>
              </label>

              <label className="montagem-pizza-page__option-card">
                <input type="radio" name="pizza-crust" />
                <span className="montagem-pizza-page__option-name">Catupiry</span>
                <span className="montagem-pizza-page__option-price">+ R$ 6,00</span>
              </label>

              <label className="montagem-pizza-page__option-card">
                <input type="radio" name="pizza-crust" />
                <span className="montagem-pizza-page__option-name">Cheddar</span>
                <span className="montagem-pizza-page__option-price">+ R$ 6,00</span>
              </label>
            </div>
          </section>

          <section className="montagem-pizza-page__block">
            <h2 className="montagem-pizza-page__block-title">Observações</h2>

            <div className="montagem-pizza-page__field">
              <label htmlFor="pizza-notes" className="montagem-pizza-page__label">
                Observações do item
              </label>
              <textarea
                id="pizza-notes"
                className="montagem-pizza-page__textarea"
                placeholder="Ex.: sem cebola, assar mais, cortar em 8 pedaços..."
              />
            </div>
          </section>

          <section className="montagem-pizza-page__block">
            <h2 className="montagem-pizza-page__block-title">Quantidade</h2>

            <div className="montagem-pizza-page__quantity">
              <button type="button" className="montagem-pizza-page__quantity-button">
                -
              </button>
              <span className="montagem-pizza-page__quantity-value">1</span>
              <button type="button" className="montagem-pizza-page__quantity-button">
                +
              </button>
            </div>
          </section>
        </form>

        <aside className="montagem-pizza-page__summary">
          <h2 className="montagem-pizza-page__summary-title">Resumo</h2>

          <div className="montagem-pizza-page__summary-card">
            <p className="montagem-pizza-page__summary-line">
              <span>Tamanho</span>
              <span>Média</span>
            </p>
            <p className="montagem-pizza-page__summary-line">
              <span>Sabores</span>
              <span>Calabresa / Portuguesa</span>
            </p>
            <p className="montagem-pizza-page__summary-line">
              <span>Borda</span>
              <span>Catupiry</span>
            </p>
            <p className="montagem-pizza-page__summary-line">
              <span>Quantidade</span>
              <span>1</span>
            </p>
          </div>

          <div className="montagem-pizza-page__summary-total">
            <span>Total</span>
            <strong>R$ 55,90</strong>
          </div>

          <button type="button" className="montagem-pizza-page__submit-button">
            Adicionar à sacola
          </button>
        </aside>
      </div>
    </section>
  );
}

export default MontagemPizzaPage;