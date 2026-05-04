import { Outlet } from "react-router";
import "../../styles/layout/MainLayout.css";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;