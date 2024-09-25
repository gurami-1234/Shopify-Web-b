import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextComponent from './context/ThemeContext/ThemeContext';
import BannerContextComponent from 'context/BannerContext/BannerContext';
import AuthWindowContextComponet from 'context/AuthWindowContext/AuthWindowContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <AuthWindowContextComponet>
      <BannerContextComponent>
        <ThemeContextComponent>
          <App />
        </ThemeContextComponent>
      </BannerContextComponent>
      </AuthWindowContextComponet>
    </BrowserRouter>
  </React.StrictMode>
);

