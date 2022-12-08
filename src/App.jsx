import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';

import './App.css';

import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter >
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer texto="Kino fr"/>}/>
        <Route path='/category/:categoriaId' element={<ItemListContainer texto="Categorias fr"/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/detail/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>



    </BrowserRouter>

    </>

    );
}

export default App;
