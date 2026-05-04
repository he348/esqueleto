import "../styles/pages/CheckoutPage.css";

function CheckoutPage() {
  return (
    <section className="checkout-page">
      <header className="checkout-page__header">
        <span className="checkout-page__eyebrow">Checkout</span>
        <h1 className="checkout-page__title">Finalize seu pedido</h1>
        <p className="checkout-page__description">
          Informe seus dados, endereço e forma de pagamento.
        </p>
      </header>

      <div className="checkout-page__content">
        <form className="checkout-page__form">
          <section className="checkout-page__block">
            <h2 className="checkout-page__block-title">Dados do cliente</h2>

            <div className="checkout-page__grid">
              <div className="checkout-page__field">
                <label htmlFor="customer-name" className="checkout-page__label">
                  Nome
                </label>
                <input id="customer-name" type="text" className="checkout-page__input" />
              </div>

              <div className="checkout-page__field">
                <label htmlFor="customer-phone" className="checkout-page__label">
                  Telefone
                </label>
                <input id="customer-phone" type="text" className="checkout-page__input" />
              </div>
            </div>
          </section>

          <section className="checkout-page__block">
            <h2 className="checkout-page__block-title">Endereço de entrega</h2>

            <div className="checkout-page__grid">
              <div className="checkout-page__field">
                <label htmlFor="zipcode" className="checkout-page__label">
                  CEP
                </label>
                <input id="zipcode" type="text" className="checkout-page__input" />
              </div>

              <div className="checkout-page__field">
                <label htmlFor="street" className="checkout-page__label">
                  Rua
                </label>
                <input id="street" type="text" className="checkout-page__input" />
              </div>

              <div className="checkout-page__field">
                <label htmlFor="number" className="checkout-page__label">
                  Número
                </label>
                <input id="number" type="text" className="checkout-page__input" />
              </div>

              <div className="checkout-page__field">
                <label htmlFor="complement" className="checkout-page__label">
                  Complemento
                </label>
                <input id="complement" type="text" className="checkout-page__input" />
              </div>

              <div className="checkout-page__field">
                <label htmlFor="neighborhood" className="checkout-page__label">
                  Bairro
                </label>
                <input id="neighborhood" type="text" className="checkout-page__input" />
              </div>

              <div className="checkout-page__field">
                <label htmlFor="reference" className="checkout-page__label">
                  Referência
                </label>
                <input id="reference" type="text" className="checkout-page__input" />
              </div>
            </div>
          </section>

          <section className="checkout-page__block">
            <h2 className="checkout-page__block-title">Pagamento</h2>

            <div className="checkout-page__payment-options">
              <label className="checkout-page__payment-card">
                <input type="radio" name="payment-method" />
                <span>Pix</span>
              </label>

              <label className="checkout-page__payment-card">
                <input type="radio" name="payment-method" />
                <span>Dinheiro</span>
              </label>

              <label className="checkout-page__payment-card">
                <input type="radio" name="payment-method" />
                <span>Cartão na entrega</span>
              </label>
            </div>

            <div className="checkout-page__field">
              <label htmlFor="change-for" className="checkout-page__label">
                Troco para quanto
              </label>
              <input id="change-for" type="text" className="checkout-page__input" />
            </div>
          </section>

          <section className="checkout-page__block">
            <h2 className="checkout-page__block-title">Observações finais</h2>

            <div className="checkout-page__field">
              <label htmlFor="order-notes" className="checkout-page__label">
                Observações do pedido
              </label>
              <textarea
                id="order-notes"
                className="checkout-page__textarea"
                placeholder="Ex.: casa de esquina, não tocar campainha..."
              />
            </div>
          </section>
        </form>

        <aside className="checkout-page__summary">
          <h2 className="checkout-page__summary-title">Resumo final</h2>

          <div className="checkout-page__summary-card">
            <p className="checkout-page__summary-line">
              <span>Itens</span>
              <span>3</span>
            </p>
            <p className="checkout-page__summary-line">
              <span>Subtotal</span>
              <span>R$ 79,90</span>
            </p>
            <p className="checkout-page__summary-line">
              <span>Entrega</span>
              <span>A calcular</span>
            </p>
            <p className="checkout-page__summary-total">
              <span>Total</span>
              <strong>R$ 79,90</strong>
            </p>
          </div>

          <button type="button" className="checkout-page__submit-button">
            Confirmar pedido
          </button>
        </aside>
      </div>
    </section>
  );
}

export default CheckoutPage;