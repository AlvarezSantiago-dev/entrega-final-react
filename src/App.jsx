import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer, ItemListContainer, NavBar, OrderForm } from './components';

import { CartContextProvider } from './context/CartContext';
import { OrderContextProvider } from './context/OrderContext';

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <OrderContextProvider>
          <NavBar />
          <Routes>
            <Route path="/checkout" element={<OrderForm />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </OrderContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
};
