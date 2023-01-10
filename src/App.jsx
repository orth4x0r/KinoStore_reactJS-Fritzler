import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import { toast } from "react-hot-toast";
import './App.css';
import React from 'react';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CheckOut from './components/checkOut';

function App() {
  return (
    <>
    <BrowserRouter >
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer texto="Kino fr"/>}/>
        <Route path='/category/:categoriaId' element={<ItemListContainer texto="Categorias fr"/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/detail/:detalleId' element={<ItemDetailContainer/>}/>
        <Route exact path="/form" element={<CheckOut />}/>
      </Routes>
      </CartProvider>

    </BrowserRouter>

    </>

    );
}

export default App;
