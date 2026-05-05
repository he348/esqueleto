import "../styles/pages/PromocoesPage.css";

import folhaDireitaIcon from "../assets/Icones/folha_direita.png";
import folhaEsquerdaIcon from "../assets/Icones/folha_esquerda.png";
import brindeRefriIcon from "../assets/Icones/brinde_refri.png";
import brotoIcon from "../assets/Icones/Broto.png";

import pizzaEspecialImg from "../assets/Pizzas/Especial.png";
import pizzaCremosaImg from "../assets/Pizzas/Cremosa.png";
import pizzaSupremaImg from "../assets/Pizzas/Suprema.png";

type Promotion = {
  id: string;
  number: string;
  title: string;
  description: string;
  gift: string;
  giftIcon: string;
  price: string;
  image: string;
};

const promotions: Promotion[] = [
  {
    id: "mazzero-especial",
    number: "01",
    title: "Mazzero Especial",
    description:
      "Mussarela, pepperoni artesanal, tomate cereja, azeitonas pretas e manjericão fresco.",
    gift: "Acompanha Coca Cola 1L",
    giftIcon: brindeRefriIcon,
    price: "89,90",
    image: pizzaEspecialImg,
  },
  {
    id: "cremosa-mazzero",
    number: "02",
    title: "Cremosa Mazzero",
    description:
      "Frango desfiado, catupiry original, bacon crocante, milho e orégano.",
    gift: "Acompanha Broto de Chocolate",
    giftIcon: brotoIcon,
    price: "89,90",
    image: pizzaCremosaImg,
  },
  {
    id: "suprema-mazzero",
    number: "03",
    title: "Suprema Mazzero",
    description:
      "Lombo canadense, catupiry original, cebola caramelizada e orégano.",
    gift: "Acompanha Coca Cola 1L",
    giftIcon: brindeRefriIcon,
    price: "89,90",
    image: pizzaSupremaImg,
  },
];

function PromocoesPage() {
  return (
    <section className="promocoes-page" aria-labelledby="promocoes-title">
      <div className="promocoes-page__watermark" aria-hidden="true">
        M
      </div>

      <div className="promocoes-page__container">
        <header className="promocoes-page__header">
          <div className="promocoes-page__top-ornament" aria-hidden="true">
            <span />
            <img
              src={folhaDireitaIcon}
              alt=""
              className="promocoes-page__ornament-icon"
            />
            <span />
          </div>

          <div className="promocoes-page__title-row">
            <strong aria-hidden="true">◆</strong>

            <h1 id="promocoes-title" className="promocoes-page__title">
              Promoções
            </h1>

            <strong aria-hidden="true">◆</strong>
          </div>

          <p className="promocoes-page__subtitle">
            As melhores da casa, feitas para você.
          </p>
        </header>

        <div className="promocoes-page__list">
          {promotions.map((promotion) => {
            const [reais, centavos] = promotion.price.split(",");

            return (
              <article key={promotion.id} className="promocoes-page__card">
                <div className="promocoes-page__image-wrap">
                  <img
                    src={promotion.image}
                    alt={`Pizza ${promotion.title}`}
                    className="promocoes-page__image"
                  />
                </div>

                <div className="promocoes-page__content">
                  <div className="promocoes-page__number">
                    <img src={folhaDireitaIcon} alt="" aria-hidden="true" />
                    <span>{promotion.number}</span>
                  </div>

                  <h2 className="promocoes-page__card-title">
                    {promotion.title}
                  </h2>

                  <p className="promocoes-page__description">
                    {promotion.description}
                  </p>

                  <div className="promocoes-page__gift">
                    <span className="promocoes-page__gift-icon">
                      <img src={promotion.giftIcon} alt="" aria-hidden="true" />
                    </span>

                    <strong>{promotion.gift}</strong>
                  </div>
                </div>

                <div className="promocoes-page__price-area">
                  <span className="promocoes-page__price-label">
                    Por apenas
                  </span>

                  <p className="promocoes-page__price">
                    <span>R$</span>
                    <strong>{reais}</strong>
                    <small>,{centavos}</small>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="promocoes-page__footer">
          <img src={folhaEsquerdaIcon} alt="" aria-hidden="true" />
          <span>Ingredientes selecionados</span>
          <strong>•</strong>
          <span>Massa artesanal</span>
          <strong>•</strong>
          <span>Forno a lenha</span>
          <img src={folhaDireitaIcon} alt="" aria-hidden="true" />
        </footer>
      </div>
    </section>
  );
}

export default PromocoesPage;