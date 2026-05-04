import "../../styles/layout/Footer.css";
function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand">
          <h2 className="site-footer__title">Pizzaria</h2>
          <p className="site-footer__text">
            Delivery de pizzas, bebidas e acompanhamentos.
          </p>
        </div>

        <div className="site-footer__info">
          <p className="site-footer__text">Atendimento: 18h às 23h</p>
          <p className="site-footer__text">WhatsApp: (00) 00000-0000</p>
          <p className="site-footer__text">Rua Exemplo, 123</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;