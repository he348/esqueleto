import { useState } from "react";
import { Link } from "react-router";
import "../styles/pages/CarrinhoPage.css";

import refrigeranteIcon from "../assets/Icones/Refrigerante.png";
import brindeRefriIcon from "../assets/Icones/brinde_refri.png";
import coroaIcon from "../assets/Icones/Coroa_dourada.png";
import pedidoIcon from "../assets/Icones/Pedido.png";
import bolsaIcon from "../assets/Icones/Bolsa.png";
import confirmarIcon from "../assets/Icones/Confirmar.png";
import cadeadoIcon from "../assets/Icones/Cadeado.png";

type BeverageItem = {
  id: string;
  name: string;
  price: number;
};

type BeverageCategory = {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: BeverageItem[];
};

type Quantities = Record<string, number>;

const beverageCategories: BeverageCategory[] = [
  {
    id: "refrigerantes",
    title: "Refrigerantes",
    description: "Clássicos para acompanhar sua pizza.",
    icon: refrigeranteIcon,
    items: [
      { id: "coca-350", name: "Coca-Cola 350ml", price: 6.9 },
      { id: "coca-zero-350", name: "Coca-Cola Zero 350ml", price: 6.9 },
      { id: "coca-1l", name: "Coca-Cola 1L", price: 12.9 },
      { id: "guarana-350", name: "Guaraná Antarctica 350ml", price: 6.9 },
      { id: "guarana-1l", name: "Guaraná Antarctica 1L", price: 12.9 },
      { id: "fanta-350", name: "Fanta Laranja 350ml", price: 6.9 },
      { id: "sprite-350", name: "Sprite 350ml", price: 6.9 },
    ],
  },
  {
    id: "aguas",
    title: "Águas",
    description: "Leves, simples e refrescantes.",
    icon: refrigeranteIcon,
    items: [
      { id: "agua-sem-gas", name: "Água mineral sem gás 500ml", price: 4.9 },
      { id: "agua-com-gas", name: "Água mineral com gás 500ml", price: 5.5 },
      { id: "agua-tonica", name: "Água tônica 350ml", price: 6.9 },
    ],
  },
  {
    id: "sucos-naturais",
    title: "Sucos naturais",
    description: "Frutas frescas e preparo artesanal.",
    icon: coroaIcon,
    items: [
      { id: "suco-laranja", name: "Suco natural de laranja 500ml", price: 11.9 },
      { id: "suco-limao", name: "Suco natural de limão 500ml", price: 10.9 },
      { id: "suco-abacaxi", name: "Suco natural de abacaxi 500ml", price: 12.9 },
      { id: "suco-maracuja", name: "Suco natural de maracujá 500ml", price: 12.9 },
      { id: "suco-morango", name: "Suco natural de morango 500ml", price: 13.9 },
    ],
  },
  {
    id: "sucos-especiais",
    title: "Sucos especiais",
    description: "Combinações exclusivas da casa.",
    icon: coroaIcon,
    items: [
      { id: "mazzero-citrus", name: "Suco Mazzero Citrus", price: 15.9 },
      { id: "suco-rosso", name: "Suco Rosso", price: 16.9 },
      { id: "suco-tropicale", name: "Suco Tropicale", price: 15.9 },
      { id: "limonada-siciliana", name: "Limonada Siciliana", price: 14.9 },
    ],
  },
  {
    id: "cervejas",
    title: "Cervejas",
    description: "Long necks e opções clássicas.",
    icon: brindeRefriIcon,
    items: [
      { id: "heineken", name: "Heineken Long Neck 330ml", price: 13.9 },
      { id: "heineken-zero", name: "Heineken Zero Long Neck 330ml", price: 13.9 },
      { id: "stella", name: "Stella Artois Long Neck 330ml", price: 12.9 },
      { id: "corona", name: "Corona Extra Long Neck 330ml", price: 14.9 },
      { id: "spaten", name: "Spaten Long Neck 355ml", price: 12.9 },
    ],
  },
  {
    id: "vinhos",
    title: "Vinhos",
    description: "Para harmonizar com massas e pizzas.",
    icon: brindeRefriIcon,
    items: [
      { id: "vinho-tinto-taca", name: "Vinho tinto seco - taça", price: 19.9 },
      { id: "vinho-branco-taca", name: "Vinho branco seco - taça", price: 19.9 },
      { id: "vinho-rose-taca", name: "Vinho rosé - taça", price: 21.9 },
      { id: "espumante-brut", name: "Espumante brut - taça", price: 24.9 },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description: "Coquetéis modernos para uma experiência premium.",
    icon: brindeRefriIcon,
    items: [
      { id: "aperol", name: "Aperol Spritz", price: 29.9 },
      { id: "gin-tonica", name: "Gin Tônica", price: 31.9 },
      { id: "moscow-mule", name: "Moscow Mule", price: 32.9 },
      { id: "negroni", name: "Negroni", price: 34.9 },
      { id: "caipirinha-limao", name: "Caipirinha de limão", price: 24.9 },
    ],
  },
  {
    id: "sem-alcool-premium",
    title: "Sem álcool premium",
    description: "Bebidas especiais sem álcool.",
    icon: coroaIcon,
    items: [
      { id: "mojito-zero", name: "Mojito sem álcool", price: 18.9 },
      { id: "spritz-zero", name: "Spritz sem álcool", price: 18.9 },
      { id: "tonica-italiana", name: "Tônica Italiana", price: 17.9 },
      { id: "limonada-mazzero", name: "Limonada Mazzero", price: 16.9 },
    ],
  },
];

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function CarrinhoPage() {
  const [openCategoryId, setOpenCategoryId] = useState("refrigerantes");
  const [quantities, setQuantities] = useState<Quantities>({});

  function toggleCategory(categoryId: string) {
    setOpenCategoryId((currentCategoryId) =>
      currentCategoryId === categoryId ? "" : categoryId,
    );
  }

  function getItemQuantity(itemId: string) {
    return quantities[itemId] ?? 0;
  }

  function increaseQuantity(itemId: string) {
    setQuantities((currentQuantities) => ({
      ...currentQuantities,
      [itemId]: getItemQuantity(itemId) + 1,
    }));
  }

  function decreaseQuantity(itemId: string) {
    setQuantities((currentQuantities) => {
      const currentValue = currentQuantities[itemId] ?? 0;
      const nextValue = Math.max(currentValue - 1, 0);

      return {
        ...currentQuantities,
        [itemId]: nextValue,
      };
    });
  }

  const selectedItems = beverageCategories.flatMap((category) =>
    category.items
      .filter((item) => getItemQuantity(item.id) > 0)
      .map((item) => ({
        ...item,
        quantity: getItemQuantity(item.id),
        total: item.price * getItemQuantity(item.id),
      })),
  );

  const totalSelectedItems = selectedItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <section className="carrinho-page" aria-labelledby="carrinho-title">
      <div className="carrinho-page__container">
        <div className="carrinho-page__ornament" aria-hidden="true">
          <span />
          <img src={coroaIcon} alt="" />
          <span />
        </div>

        <header className="carrinho-page__header">
          <div className="carrinho-page__title-line" aria-hidden="true" />

          <h1 id="carrinho-title" className="carrinho-page__title">
            Complementos do seu pedido
          </h1>

          <div className="carrinho-page__title-line" aria-hidden="true" />
        </header>

        <div className="carrinho-page__beverage-panel">
          {beverageCategories.map((category) => {
            const isOpen = openCategoryId === category.id;

            return (
              <section key={category.id} className="carrinho-page__accordion">
                <button
                  type="button"
                  className={`carrinho-page__accordion-button ${
                    isOpen ? "carrinho-page__accordion-button--open" : ""
                  }`}
                  aria-expanded={isOpen}
                  onClick={() => toggleCategory(category.id)}
                >
                  <span className="carrinho-page__accordion-title">
                    <img src={category.icon} alt="" aria-hidden="true" />

                    <span>
                      <strong>{category.title}</strong>
                      <small>{category.description}</small>
                    </span>
                  </span>

                  <span className="carrinho-page__accordion-arrow" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="carrinho-page__accordion-content">
                    {category.items.map((item) => {
                      const quantity = getItemQuantity(item.id);

                      return (
                        <article key={item.id} className="carrinho-page__beverage-item">
                          <div>
                            <strong>{item.name}</strong>
                            <span>{formatCurrency(item.price)}</span>
                          </div>

                          <div className="carrinho-page__quantity-control">
                            <button
                              type="button"
                              aria-label={`Remover ${item.name}`}
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              −
                            </button>

                            <span>{quantity}</span>

                            <button
                              type="button"
                              aria-label={`Adicionar ${item.name}`}
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <section className="carrinho-page__orders-card" aria-labelledby="orders-title">
          <div className="carrinho-page__orders-info">
            <div className="carrinho-page__orders-icon-circle">
              <img src={pedidoIcon} alt="" aria-hidden="true" />
            </div>

            <p>
              Acompanhe seus pedidos
              <br />
              adicionados até agora.
            </p>
          </div>

          <div className="carrinho-page__orders-divider" aria-hidden="true" />

          <div className="carrinho-page__orders-summary">
            <div className="carrinho-page__orders-title-row">
              <img src={bolsaIcon} alt="" aria-hidden="true" />

              <div>
                <h2 id="orders-title">Seus pedidos</h2>
                <span aria-hidden="true" />
              </div>
            </div>

            <p className="carrinho-page__orders-label">
              Bebidas e complementos selecionados
            </p>

            <strong className="carrinho-page__orders-count">
              {totalSelectedItems} <span>item(ns)</span>
            </strong>
          </div>

          <Link to="/carrinho" className="carrinho-page__details-button">
            Ver detalhes
            <span aria-hidden="true">›</span>
          </Link>
        </section>

        <Link to="/checkout" className="carrinho-page__confirm-button">
          <img src={confirmarIcon} alt="" aria-hidden="true" />
          Confirmar pedido
        </Link>

        <p className="carrinho-page__secure-text">
          <img src={cadeadoIcon} alt="" aria-hidden="true" />
          Seus dados e pedido estão seguros conosco.
        </p>
      </div>
    </section>
  );
}

export default CarrinhoPage;