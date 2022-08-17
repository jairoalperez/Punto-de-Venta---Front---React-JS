import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import ProductosList from './components/ProductosList'
import CrearVenta from './components/CrearVenta'
import IngresarProducto from './components/IngresarProducto'
import ServVen from './components/ServVen';
import CliCom from './components/CliCom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/lista" element={<ProductosList/>}/>
      <Route path="/ingresarproducto" element={<IngresarProducto/>}/>
      <Route path="/" element={<CrearVenta/>}/>
      <Route path="/serven" element={<ServVen/>}/>
      <Route path="/clicom" element={<CliCom/>}/>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

