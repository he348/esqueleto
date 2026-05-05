import { Link } from "react-router";
import "../styles/pages/CardapioPage.css";

import pizzaPequenaIcon from "../assets/Icones/Pizza_pequena.png";
import pizzaMediaIcon from "../assets/Icones/Pizza_media.png";
import pizzaGrandeIcon from "../assets/Icones/Pizza_grande.png";

import pizzaPedacoIcon from "../assets/Icones/pizza_pedaco.png";
import chapeuIcon from "../assets/Icones/Chapeu.png";
import infoIcon from "../assets/Icones/informação.png";
import fogoIcon from "../assets/Icones/fogo.png";
import confirmacaoIcon from "../assets/Icones/Confirmacao.png";
import bolsaIcon from "../assets/Icones/Bolsa.png";
import tamanhoPizzaIcon from "../assets/Icones/Tamanho_Pizza.png";

import pixIcon from "../assets/Icones/Pix.png";
import cartaoIcon from "../assets/Icones/Cartao.png";
import dinheiroIcon from "../assets/Icones/Dinheiro.png";
import carrinhoIcon from "../assets/Icones/carrinho.png";

type PizzaSize = {
  id: string;
  name: string;
  description: string;
  slices: string;
  icon: string;
};

type PizzaItem = {
  id: string;
  name: string;
  description: string;
  price: string;
};

const pizzaSizes: PizzaSize[] = [
  {
    id: "broto",
    name: "Broto",
    description: "Até 2 sabores",
    slices: "4 fatias",
    icon: pizzaPequenaIcon,
  },
  {
    id: "media",
    name: "Média",
    description: "Até 2 sabores",
    slices: "8 fatias",
    icon: pizzaMediaIcon,
  },
  {
    id: "grande",
    name: "Grande",
    description: "Até 2 sabores",
    slices: "12 fatias",
    icon: pizzaGrandeIcon,
  },
];

const tradicionais: PizzaItem[] = [
  {
    id: "marguerita",
    name: "Marguerita",
    description: "Molho de tomate, mussarela, manjericão e azeite.",
    price: "R$ 59,90",
  },
  {
    id: "calabresa",
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa e cebola.",
    price: "R$ 59,90",
  },
  {
    id: "portuguesa",
    name: "Portuguesa",
    description:
      "Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas e orégano.",
    price: "R$ 64,90",
  },
  {
    id: "frango-catupiry",
    name: "Frango com Catupiry",
    description: "Molho de tomate, mussarela, frango desfiado e catupiry.",
    price: "R$ 64,90",
  },
  {
    id: "quatro-queijos",
    name: "4 Queijos",
    description: "Molho de tomate, mussarela, provolone, parmesão e gorgonzola.",
    price: "R$ 64,90",
  },
  {
    id: "lombo-canadense",
    name: "Lombo Canadense",
    description: "Molho de tomate, mussarela, lombo canadense e cebola.",
    price: "R$ 64,90",
  },
  {
    id: "bacon-supremo",
    name: "Bacon Supremo",
    description: "Molho de tomate, mussarela, bacon, cebola e catupiry.",
    price: "R$ 64,90",
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    description: "Molho de tomate, mussarela e pepperoni.",
    price: "R$ 64,90",
  },
];

const daCasa: PizzaItem[] = [
  {
    id: "mazzero-especial",
    name: "Mazzero Especial",
    description:
      "Mussarela, pepperoni artesanal, tomate cereja, azeitonas pretas e manjericão fresco.",
    price: "R$ 79,90",
  },
  {
    id: "cremosa-mazzero",
    name: "Cremosa Mazzero",
    description:
      "Frango desfiado, catupiry original, bacon crocante, milho e orégano.",
    price: "R$ 79,90",
  },
  {
    id: "suprema-mazzero",
    name: "Suprema Mazzero",
    description:
      "Lombo canadense, catupiry original, cebola caramelizada e orégano.",
    price: "R$ 79,90",
  },
  {
    id: "cheddar-chef",
    name: "Cheddar do Chef",
    description:
      "Hambúrguer artesanal, cheddar cremoso, bacon crocante e cebola crispy.",
    price: "R$ 79,90",
  },
  {
    id: "pesto-mazzero",
    name: "Pesto Mazzero",
    description:
      "Molho pesto, tomate seco, mussarela de búfala, rúcula e parmesão.",
    price: "R$ 79,90",
  },
  {
    id: "rustica-italiana",
    name: "Rústica Italiana",
    description:
      "Mussarela, presunto de parma, rúcula, tomate cereja e azeite trufado.",
    price: "R$ 84,90",
  },
  {
    id: "parma-premium",
    name: "Parma Premium",
    description: "Presunto de parma, queijo brie e geleia de damasco.",
    price: "R$ 84,90",
  },
];

const doces: PizzaItem[] = [
  {
    id: "chocolate-morango",
    name: "Chocolate com Morango",
    description: "Chocolate ao leite e morangos frescos.",
    price: "R$ 59,90",
  },
  {
    id: "banana-canela",
    name: "Banana com Canela",
    description: "Banana fatiada, açúcar e canela.",
    price: "R$ 54,90",
  },
  {
    id: "nutella",
    name: "Nutella",
    description: "Nutella com raspas de chocolate.",
    price: "R$ 59,90",
  },
  {
    id: "prestigio",
    name: "Prestígio",
    description: "Chocolate ao leite e coco ralado.",
    price: "R$ 59,90",
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro",
    description: "Brigadeiro tradicional com granulado.",
    price: "R$ 59,90",
  },
  {
    id: "doce-leite-coco",
    name: "Doce de Leite com Coco",
    description: "Doce de leite cremoso com coco ralado.",
    price: "R$ 59,90",
  },
  {
    id: "confete",
    name: "Confete",
    description: "Chocolate ao leite com confeitos coloridos.",
    price: "R$ 54,90",
  },
  {
    id: "sensacao",
    name: "Sensação",
    description: "Chocolate branco com morango.",
    price: "R$ 59,90",
  },
];

function CardapioPage() {
  return (
    <section className="cardapio-page" aria-labelledby="cardapio-title">
      <div className="cardapio-page__shell">
        <main id="cardapio-pizzas" className="cardapio-page__content">
          <div className="cardapio-page__section-title-row">
            <span>◆</span>
            <h2 id="cardapio-title" className="cardapio-page__section-title">
              Escolha o tamanho da pizza
            </h2>
            <span>◆</span>
          </div>

          <div className="cardapio-page__sizes">
            {pizzaSizes.map((size) => (
              <label key={size.id} className="cardapio-page__size-card">
                <input
                  type="radio"
                  name="pizza-size"
                  value={size.id}
                  className="cardapio-page__size-input"
                  defaultChecked={size.id === "media"}
                />

                <img
                  src={size.icon}
                  alt=""
                  className="cardapio-page__size-icon"
                  aria-hidden="true"
                />

                <span className="cardapio-page__size-info">
                  <strong>{size.name}</strong>
                  <small>{size.description}</small>
                  <small>{size.slices}</small>
                </span>
              </label>
            ))}
          </div>

          <div className="cardapio-page__menu-grid">
            <PizzaColumn
              title="Tradicionais"
              icon={pizzaPedacoIcon}
              items={tradicionais}
              name="tradicionais"
            />

            <PizzaColumn
              title="Da casa"
              icon={chapeuIcon}
              items={daCasa}
              name="da-casa"
            />

            <PizzaColumn
              title="Doces"
              icon={pizzaPedacoIcon}
              items={doces}
              name="doces"
            />
          </div>

          <section
            className="cardapio-page__features"
            aria-label="Diferenciais da pizzaria"
          >
            <article className="cardapio-page__feature">
              <img
                src={infoIcon}
                alt=""
                className="cardapio-page__feature-icon-img"
                aria-hidden="true"
              />

              <div>
                <h3>Pizzas de 2 sabores</h3>
                <p>Selecione até 2 sabores para sua pizza meio a meio.</p>
              </div>
            </article>

            <article className="cardapio-page__feature">
              <img
                src={pizzaMediaIcon}
                alt=""
                className="cardapio-page__feature-icon-img"
                aria-hidden="true"
              />

              <div>
                <h3>Ingredientes selecionados</h3>
                <p>Usamos ingredientes frescos e de alta qualidade.</p>
              </div>
            </article>

            <article className="cardapio-page__feature">
              <img
                src={fogoIcon}
                alt=""
                className="cardapio-page__feature-icon-img"
                aria-hidden="true"
              />

              <div>
                <h3>Forno a lenha</h3>
                <p>Nossas pizzas são assadas em forno a lenha.</p>
              </div>
            </article>
          </section>

          <section className="cardapio-page__steps" aria-label="Como funciona">
            <h2 className="cardapio-page__steps-title">Como funciona</h2>

            <div className="cardapio-page__steps-list">
              <article className="cardapio-page__step">
                <strong>1</strong>
                <img src={tamanhoPizzaIcon} alt="" aria-hidden="true" />
                <p>Escolha o tamanho da sua pizza</p>
              </article>

              <span className="cardapio-page__arrow">→</span>

              <article className="cardapio-page__step">
                <strong>2</strong>
                <img src={pizzaPedacoIcon} alt="" aria-hidden="true" />
                <p>Selecione até 2 sabores</p>
              </article>

              <span className="cardapio-page__arrow">→</span>

              <article className="cardapio-page__step">
                <strong>3</strong>
                <img src={confirmacaoIcon} alt="" aria-hidden="true" />
                <p>Clique em “Adicionar ao pedido”</p>
              </article>

              <span className="cardapio-page__arrow">→</span>

              <article className="cardapio-page__step">
                <strong>4</strong>
                <img src={bolsaIcon} alt="" aria-hidden="true" />
                <p>Repita o processo se quiser mais pizzas</p>
              </article>
            </div>
          </section>

          <footer className="cardapio-page__footer">
            <div className="cardapio-page__payments" aria-label="Formas de pagamento">
              <strong>Formas de pagamento</strong>

              <span>
                <img src={pixIcon} alt="" aria-hidden="true" />
                Pix
              </span>

              <span>
                <img src={cartaoIcon} alt="" aria-hidden="true" />
                Cartão
              </span>

              <span>
                <img src={dinheiroIcon} alt="" aria-hidden="true" />
                Dinheiro
              </span>
            </div>

            <Link to="/carrinho" className="cardapio-page__confirm-button">
              <img src={carrinhoIcon} alt="" aria-hidden="true" />
              Confirmar pedido
            </Link>
          </footer>
        </main>
      </div>
    </section>
  );
}

type PizzaColumnProps = {
  title: string;
  icon: string;
  items: PizzaItem[];
  name: string;
};

function PizzaColumn({ title, icon, items, name }: PizzaColumnProps) {
  return (
    <section className="cardapio-page__column" aria-labelledby={`${name}-title`}>
      <header className="cardapio-page__column-header">
        <img
          src={icon}
          alt=""
          className="cardapio-page__column-icon"
          aria-hidden="true"
        />

        <h2 id={`${name}-title`}>{title}</h2>
      </header>

      <div className="cardapio-page__items">
        {items.map((item) => (
          <label key={item.id} className="cardapio-page__item">
            <input
              type="checkbox"
              name={name}
              value={item.id}
              className="cardapio-page__item-input"
            />

            <span className="cardapio-page__fake-radio" aria-hidden="true" />

            <span className="cardapio-page__item-content">
              <strong>{item.name}</strong>
              <small>{item.description}</small>
            </span>

            <span className="cardapio-page__price">{item.price}</span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default CardapioPage;