import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { NavBar } from "./componentes/NavBar";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./componentes/Cart"

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Hola!"/>} />
      <Route path="/cart" element={<Cart name="asd"/>} />
      <Route path="/category/:id" element={<ItemListContainer greeting="Hola!"/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
