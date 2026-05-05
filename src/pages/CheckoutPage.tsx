import { Link } from "react-router";
import "../styles/pages/CheckoutPage.css";

import checkIcon from "../assets/Icones/Confirmacao_2.png";
import stepTwoIcon from "../assets/Icones/dois.png";
import stepThreeIcon from "../assets/Icones/tres.png";

import addressHeroIcon from "../assets/Icones/endereco.png";
import pinIcon from "../assets/Icones/ponto.png";
import cepIcon from "../assets/Icones/CEP.png";
import ruaIcon from "../assets/Icones/rua.png";
import numeroIcon from "../assets/Icones/numero.png";
import complementoIcon from "../assets/Icones/complemento.png";

import contatoIcon from "../assets/Icones/contato.png";
import emailIcon from "../assets/Icones/email.png";
import telefoneIcon from "../assets/Icones/telefone.png";

import dadosIcon from "../assets/Icones/dados.png";

type CheckoutInput = {
  id: string;
  label: string;
  placeholder: string;
  icon: string;
  type?: string;
};

const addressFields: CheckoutInput[] = [
  {
    id: "cep",
    label: "CEP",
    placeholder: "Ex: 01310-100",
    icon: cepIcon,
  },
  {
    id: "rua",
    label: "Rua",
    placeholder: "Ex: Avenida Paulista",
    icon: ruaIcon,
  },
  {
    id: "numero",
    label: "Número",
    placeholder: "Ex: 1574",
    icon: numeroIcon,
  },
  {
    id: "complemento",
    label: "Complemento (opcional)",
    placeholder: "Ex: Apt 101, Bloco B, Casa 2",
    icon: complementoIcon,
  },
];

const contactFields: CheckoutInput[] = [
  {
    id: "email",
    label: "E-mail",
    placeholder: "Ex: seuemail@exemplo.com",
    icon: emailIcon,
    type: "email",
  },
  {
    id: "telefone",
    label: "Telefone",
    placeholder: "Ex: (11) 99999-9999",
    icon: telefoneIcon,
    type: "tel",
  },
];

function CheckoutPage() {
  return (
    <section className="checkout-page" aria-labelledby="checkout-title">
      <div className="checkout-page__container">
        <StepIndicator />

        <div className="checkout-page__content">
          <main className="checkout-page__main">
            <header className="checkout-page__intro">
              <h1 id="checkout-title" className="checkout-page__title">
                Para onde vamos entregar?
              </h1>

              <p className="checkout-page__description">
                Preencha os dados abaixo para entregarmos seu pedido com sucesso.
              </p>
            </header>

            <CheckoutSection
              title="Endereço de entrega"
              icon={pinIcon}
              fields={addressFields}
            />

            <CheckoutSection
              title="Contato"
              icon={contatoIcon}
              fields={contactFields}
            />

            <article className="checkout-page__security-card">
              <img src={dadosIcon} alt="" aria-hidden="true" />

              <div>
                <h2>Seus dados estão seguros</h2>
                <p>
                  Utilizamos seus dados apenas para processar e entregar seu pedido
                  com segurança e agilidade.
                </p>
              </div>
            </article>

            <Link to="/pedido-sucesso" className="checkout-page__confirm-button">
              <img src={pinIcon} alt="" aria-hidden="true" />
              Confirmar endereço
            </Link>
          </main>

          <aside className="checkout-page__side" aria-hidden="true">
            <img src={addressHeroIcon} alt="" />
          </aside>
        </div>
      </div>
    </section>
  );
}

type CheckoutSectionProps = {
  title: string;
  icon: string;
  fields: CheckoutInput[];
};

function CheckoutSection({ title, icon, fields }: CheckoutSectionProps) {
  return (
    <section className="checkout-page__section">
      <header className="checkout-page__section-header">
        <img src={icon} alt="" aria-hidden="true" />
        <h2>{title}</h2>
      </header>

      <div className="checkout-page__fields-grid">
        {fields.map((field) => (
          <label key={field.id} className="checkout-page__field">
            <span className="checkout-page__label">{field.label}</span>

            <span className="checkout-page__input-row">
              <img src={field.icon} alt="" aria-hidden="true" />

              <input
                id={field.id}
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                className="checkout-page__input"
                autoComplete="off"
              />
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}

function StepIndicator() {
  return (
    <div className="checkout-page__steps" aria-label="Etapas do pedido">
      <div className="checkout-page__step checkout-page__step--done">
        <div className="checkout-page__step-icon">
          <img src={checkIcon} alt="" aria-hidden="true" />
        </div>
        <span>Seu pedido</span>
      </div>

      <div
        className="checkout-page__step-line checkout-page__step-line--solid"
        aria-hidden="true"
      />

      <div className="checkout-page__step checkout-page__step--active">
        <div className="checkout-page__step-icon">
          <img src={stepTwoIcon} alt="" aria-hidden="true" />
        </div>
        <span>Endereço</span>
      </div>

      <div
        className="checkout-page__step-line checkout-page__step-line--dashed"
        aria-hidden="true"
      />

      <div className="checkout-page__step checkout-page__step--pending">
        <div className="checkout-page__step-icon">
          <img src={stepThreeIcon} alt="" aria-hidden="true" />
        </div>
        <span>Pagamento</span>
      </div>
    </div>
  );
}

export default CheckoutPage;