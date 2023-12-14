import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer, ItemListContainer, NavBar } from './components';

import { CartContextProvider } from './context/CartContext';
export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};
