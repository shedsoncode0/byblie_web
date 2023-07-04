import React from "react";
import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./contexts/AppContext.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimatePresence>
    <AppProvider>
      {/* <React.StrictMode> */}
      {/* <BrowserRouter> */}
      <HashRouter>
        <Layout>
          <App />
        </Layout>
      </HashRouter>
      {/* </React.StrictMode> */}
      {/* </BrowserRouter> */}
    </AppProvider>
  </AnimatePresence>
);
