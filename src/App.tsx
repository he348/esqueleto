import { useEffect } from "react";

import AppRouter from "./routes/AppRouter";

import "./styles/base/reset.css";
import "./styles/base/variables.css";
import "./styles/base/global.css";

function App() {
  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.classList.add("notranslate");

    document.body.setAttribute("translate", "no");
    document.body.classList.add("notranslate");

    const root = document.getElementById("root");

    if (root) {
      root.setAttribute("translate", "no");
      root.classList.add("notranslate");
    }
  }, []);

  return <AppRouter />;
}

export default App;