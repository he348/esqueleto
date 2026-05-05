import { Route, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import CardapioPage from "../pages/CardapioPage";
import MontagemPizzaPage from "../pages/MontagemPizzaPage";
import CarrinhoPage from "../pages/CarrinhoPage";
import CheckoutPage from "../pages/CheckoutPage";
import PedidoSucessoPage from "../pages/PedidoSucessoPage";
import AcompanharPedidoPage from "../pages/AcompanharPedidoPage";
import NotFoundPage from "../pages/NotFoundPage";
import PromocoesPage from "../pages/PromocoesPage";
import LoginDonoPage from "../pages/LoginDonoPage";
import PainelCozinhaPage from "../pages/PainelCozinhaPage";
function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cardapio" element={<CardapioPage />} />
        <Route path="/montagem-pizza" element={<MontagemPizzaPage />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/pedido/sucesso" element={<PedidoSucessoPage />} />
        <Route path="/acompanhar-pedido" element={<AcompanharPedidoPage />} />
        <Route path="/admin/login" element={<LoginDonoPage />} />
        <Route path="/admin/cozinha" element={<PainelCozinhaPage />} />
        <Route path="/promocoes" element={<PromocoesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;