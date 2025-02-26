import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { CartProvider } from "./CartContext";
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
