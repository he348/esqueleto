import "../styles/pages/NotFoundPage.css";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-page__card">
        <span className="not-found-page__code">404</span>
        <h1 className="not-found-page__title">Página não encontrada</h1>
        <p className="not-found-page__description">
          O endereço acessado não existe ou foi movido.
        </p>

        <Link to="/" className="not-found-page__button">
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;