import "../styles/pages/LoginDonoPage.css";

function LoginDonoPage() {
  return (
    <section className="login-dono-page">
      <div className="login-dono-page__container">
        <div className="login-dono-page__brand-panel">
          <span className="login-dono-page__eyebrow">Área administrativa</span>
          <h1 className="login-dono-page__title">Painel da pizzaria</h1>
          <p className="login-dono-page__description">
            Acesse o painel para acompanhar pedidos, atualizar status e gerenciar
            a operação da pizzaria.
          </p>

          <div className="login-dono-page__brand-card">
            <h2 className="login-dono-page__brand-card-title">
              Controle do delivery
            </h2>
            <p className="login-dono-page__brand-card-text">
              Visualize pedidos recebidos, pedidos em preparo, saídas para
              entrega e histórico de atendimento.
            </p>
          </div>
        </div>

        <div className="login-dono-page__form-panel">
          <div className="login-dono-page__form-card">
            <header className="login-dono-page__form-header">
              <h2 className="login-dono-page__form-title">Entrar</h2>
              <p className="login-dono-page__form-subtitle">
                Informe suas credenciais para acessar o painel.
              </p>
            </header>

            <form className="login-dono-page__form">
              <div className="login-dono-page__field">
                <label
                  htmlFor="admin-email"
                  className="login-dono-page__label"
                >
                  E-mail
                </label>
                <input
                  id="admin-email"
                  type="email"
                  className="login-dono-page__input"
                  placeholder="seuemail@pizzaria.com"
                />
              </div>

              <div className="login-dono-page__field">
                <label
                  htmlFor="admin-password"
                  className="login-dono-page__label"
                >
                  Senha
                </label>
                <input
                  id="admin-password"
                  type="password"
                  className="login-dono-page__input"
                  placeholder="Digite sua senha"
                />
              </div>

              <div className="login-dono-page__options">
                <label className="login-dono-page__checkbox">
                  <input type="checkbox" />
                  <span>Manter conectado</span>
                </label>

                <button
                  type="button"
                  className="login-dono-page__link-button"
                >
                  Esqueci minha senha
                </button>
              </div>

              <button type="submit" className="login-dono-page__submit-button">
                Entrar no painel
              </button>
            </form>

            <footer className="login-dono-page__footer">
              <p className="login-dono-page__footer-text">
                Acesso restrito a administradores da pizzaria.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginDonoPage;