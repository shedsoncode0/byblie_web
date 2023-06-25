import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppProvider } from './contexts/AppContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimatePresence>
    <AppProvider>
      <BrowserRouter>
        {/* <React.StrictMode> */}
        <Layout>
          <App />
        </Layout>
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </AppProvider>
  </AnimatePresence>
);
