import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import FullItem from "./components/FullItem/FullItem";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/item/:id" element={<FullItem />} />
    </Routes>
  );
}

export default App;
