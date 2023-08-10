import "./App.css";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { NavBar } from "./componentes/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Holssa!"/>
    </>
  );
}

export default App;
