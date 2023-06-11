import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
       </Route>
      </Routes>
    </BrowserRouter>
    </div>

  )
}

export default App
