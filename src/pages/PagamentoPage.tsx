import { useState } from "react";
import { Link } from "react-router";
import "../styles/pages/PagamentoPage.css";

import checkIcon from "../assets/Icones/Confirmacao_2.png";
import stepThreeIcon from "../assets/Icones/tres_pagamento.png";

import pixIcon from "../assets/Icones/pix_pagamento.png";
import cardIcon from "../assets/Icones/cartao_pagamento.png";
import moneyIcon from "../assets/Icones/dinheiro_pagamento.png";

import copyIcon from "../assets/Icones/copiar_pagamento.png";
import timeIcon from "../assets/Icones/tempo_pagamento.png";
import lockIcon from "../assets/Icones/Cadeado.png";
import ornamentIcon from "../assets/Icones/coroa_pagamento.png";

type PaymentMethod = "pix" | "cartao" | "dinheiro";

type PaymentOption = {
  id: PaymentMethod;
  title: string;
  subtitle: string;
  icon: string;
};

type OrderItem = {
  id: string;
  name: string;
  price: number;
};

const paymentOptions: PaymentOption[] = [
  {
    id: "pix",
    title: "Pix",
    subtitle: "Aprovação imediata",
    icon: pixIcon,
  },
  {
    id: "cartao",
    title: "Cartão",
    subtitle: "Crédito ou débito",
    icon: cardIcon,
  },
  {
    id: "dinheiro",
    title: "Dinheiro",
    subtitle: "Pagamento na entrega",
    icon: moneyIcon,
  },
];

const orderItems: OrderItem[] = [
  {
    id: "pizza-especial",
    name: "1x Mazzero Especial (Grande)",
    price: 89.9,
  },
  {
    id: "coca-cola",
    name: "1x Coca-Cola 1L",
    price: 12.9,
  },
  {
    id: "borda-catupiry",
    name: "1x Borda Catupiry",
    price: 12,
  },
];

const deliveryFee = 9;

const pixCode =
  "00020101021226890014br.gov.bcb.pix2568pix-mazzero@pizzariaitaliana.com.br5204000053039865405123.805802BR5913MAZZERO PIZZARIA ITALIANA6009SAO PAULO62070503***6304A1B2";

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function PagamentoPage() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("pix");
  const [copied, setCopied] = useState(false);

  const subtotal = orderItems.reduce((total, item) => total + item.price, 0);
  const total = subtotal + deliveryFee;

  async function handleCopyPixCode() {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="pagamento-page" aria-labelledby="pagamento-title">
      <div className="pagamento-page__container">
        <StepIndicator />

        <header className="pagamento-page__intro">
          <h1 id="pagamento-title" className="pagamento-page__title">
            Escolha a forma de pagamento
          </h1>

          <p className="pagamento-page__description">
            Selecione sua forma de pagamento para finalizar seu pedido.
          </p>
        </header>

        <div className="pagamento-page__methods" role="radiogroup">
          {paymentOptions.map((option) => {
            const isSelected = selectedPayment === option.id;

            return (
              <button
                key={option.id}
                type="button"
                className={`pagamento-page__method ${
                  isSelected ? "pagamento-page__method--selected" : ""
                }`}
                aria-pressed={isSelected}
                onClick={() => setSelectedPayment(option.id)}
              >
                <span className="pagamento-page__radio" aria-hidden="true" />

                <img
                  src={option.icon}
                  alt=""
                  className="pagamento-page__method-icon"
                  aria-hidden="true"
                />

                <span className="pagamento-page__method-text">
                  <strong>{option.title}</strong>
                  <small>{option.subtitle}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="pagamento-page__panel">
          {selectedPayment === "pix" && (
            <PixPaymentPanel
              pixCode={pixCode}
              copied={copied}
              onCopyPixCode={handleCopyPixCode}
            />
          )}

          {selectedPayment === "cartao" && <CardPaymentPanel />}

          {selectedPayment === "dinheiro" && <MoneyPaymentPanel total={total} />}

          <OrderSummary items={orderItems} deliveryFee={deliveryFee} total={total} />
        </div>

        <footer className="pagamento-page__footer">
          <Link to="/checkout" className="pagamento-page__back-link">
            ‹ Voltar
          </Link>

          <Link to="/pedido/sucesso" className="pagamento-page__confirm-button">
            <img src={lockIcon} alt="" aria-hidden="true" />
            Já paguei, confirmar pedido
          </Link>

          <p className="pagamento-page__security">
            <img src={lockIcon} alt="" aria-hidden="true" />
            Seus dados e pagamento estão seguros conosco.
          </p>
        </footer>
      </div>
    </section>
  );
}

function StepIndicator() {
  return (
    <div className="pagamento-page__steps" aria-label="Etapas do pedido">
      <div className="pagamento-page__step pagamento-page__step--done">
        <div className="pagamento-page__step-icon">
          <img src={checkIcon} alt="" aria-hidden="true" />
        </div>
        <span>Seu pedido</span>
      </div>

      <div
        className="pagamento-page__step-line pagamento-page__step-line--solid"
        aria-hidden="true"
      />

      <div className="pagamento-page__step pagamento-page__step--done">
        <div className="pagamento-page__step-icon">
          <img src={checkIcon} alt="" aria-hidden="true" />
        </div>
        <span>Endereço</span>
      </div>

      <div
        className="pagamento-page__step-line pagamento-page__step-line--dashed"
        aria-hidden="true"
      />

      <div className="pagamento-page__step pagamento-page__step--active">
        <div className="pagamento-page__step-icon">
          <img src={stepThreeIcon} alt="" aria-hidden="true" />
        </div>
        <span>Pagamento</span>
      </div>
    </div>
  );
}

type PixPaymentPanelProps = {
  pixCode: string;
  copied: boolean;
  onCopyPixCode: () => void;
};

function PixPaymentPanel({
  pixCode,
  copied,
  onCopyPixCode,
}: PixPaymentPanelProps) {
  return (
    <>
      <section className="pagamento-page__pix-info">
        <SectionTitle title="Pague com Pix" />

        <p>
          Escaneie o QR Code ao lado com o app do seu banco ou copie o código Pix
          abaixo e cole na área de Pix Copia e Cola.
        </p>

        <div className="pagamento-page__pix-code-area">
          <strong>Código Pix (copia e cola)</strong>

          <div className="pagamento-page__pix-code-box">
            <p>{pixCode}</p>

            <button type="button" onClick={onCopyPixCode}>
              <img src={copyIcon} alt="" aria-hidden="true" />
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
        </div>
      </section>

      <section className="pagamento-page__qr-area">
        <h2>Escaneie o QR Code</h2>

        <div className="pagamento-page__fake-qr" aria-label="QR Code exemplo">
          <span />
          <span />
          <span />
        </div>

        <p className="pagamento-page__timer">
          <img src={timeIcon} alt="" aria-hidden="true" />
          Pagamento válido por <strong>15:00</strong>
        </p>
      </section>
    </>
  );
}

function CardPaymentPanel() {
  return (
    <>
      <section className="pagamento-page__pix-info">
        <SectionTitle title="Pagamento no cartão" />

        <p>
          O pagamento no cartão será simulado nesta versão do projeto. Em uma
          integração real, esta etapa enviaria o pedido para um gateway de pagamento.
        </p>
      </section>

      <section className="pagamento-page__qr-area">
        <img
          src={cardIcon}
          alt=""
          className="pagamento-page__empty-method-icon"
          aria-hidden="true"
        />

        <p className="pagamento-page__method-message">
          Cartão selecionado para finalizar o pedido.
        </p>
      </section>
    </>
  );
}

type MoneyPaymentPanelProps = {
  total: number;
};

function MoneyPaymentPanel({ total }: MoneyPaymentPanelProps) {
  return (
    <>
      <section className="pagamento-page__pix-info">
        <SectionTitle title="Pagamento em dinheiro" />

        <p>
          O pagamento será realizado na entrega. Confirme o pedido e tenha o valor
          aproximado separado para agilizar o atendimento.
        </p>
      </section>

      <section className="pagamento-page__qr-area">
        <img
          src={moneyIcon}
          alt=""
          className="pagamento-page__empty-method-icon"
          aria-hidden="true"
        />

        <p className="pagamento-page__method-message">
          Total para pagamento na entrega:
          <strong>{formatCurrency(total)}</strong>
        </p>
      </section>
    </>
  );
}

type OrderSummaryProps = {
  items: OrderItem[];
  deliveryFee: number;
  total: number;
};

function OrderSummary({ items, deliveryFee, total }: OrderSummaryProps) {
  return (
    <aside className="pagamento-page__summary">
      <SectionTitle title="Resumo do pedido" />

      <div className="pagamento-page__summary-list">
        {items.map((item) => (
          <div key={item.id} className="pagamento-page__summary-row">
            <span>{item.name}</span>
            <strong>{formatCurrency(item.price)}</strong>
          </div>
        ))}

        <div className="pagamento-page__summary-row">
          <span>Taxa de entrega</span>
          <strong>{formatCurrency(deliveryFee)}</strong>
        </div>
      </div>

      <div className="pagamento-page__total">
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </aside>
  );
}

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <header className="pagamento-page__section-title">
      <h2>{title}</h2>

      <div aria-hidden="true">
        <span />
        <img src={ornamentIcon} alt="" />
        <span />
      </div>
    </header>
  );
}

export default PagamentoPage;