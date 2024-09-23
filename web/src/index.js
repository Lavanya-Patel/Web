import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartProvider } from './Context/CartContexxt';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from './component/Account';
import ProductPage from './component/ProductPage';
import Description from "./component/Description"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/account",
    element: <Account />
  },
  {
    path: "/productpage",
    element: <ProductPage />
  },
  {
    path: "/description/:id",
    element:<Description />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();