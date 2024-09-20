import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextComponent from './context/ThemeContext/ThemeContext';
import BannerContextComponent from 'context/BannerContext/BannerContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <BannerContextComponent>
        <ThemeContextComponent>
          <App />
        </ThemeContextComponent>
      </BannerContextComponent>
    </BrowserRouter>
  </React.StrictMode>
);

