import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; // Routing
import pages from './pages/index';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />

        <Route path="/" element={<App />} >
          <Route path="home" element={<pages.Home />} />

          <Route path="headphones" element={<pages.Products pageTitle={'Headphones'} fetchURL='/api/headphones' />} />
          <Route path="headphones/product/:id" element={<pages.ProductDetail fetchURL='/api/headphones' />} />

          <Route path="earphones" element={<pages.Products pageTitle={'Earphones'} fetchURL='/api/earphones' />} />
          <Route path="earphones/product/:id" element={<pages.ProductDetail fetchURL='/api/earphones' />} />
          1
          <Route path="speakers" element={<pages.Products pageTitle={'Speakers'} fetchURL='/api/speakers' />} />
          <Route path="speakers/product/:id" element={<pages.ProductDetail fetchURL='/api/speakers' />} />

          <Route path="checkout" element={<pages.Checkout />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", display: 'grid', minHeight: '100vh', placeContent: 'center' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoInvalid options object. Dev Server has been initialized using an options object that does not match the API schema.int. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
