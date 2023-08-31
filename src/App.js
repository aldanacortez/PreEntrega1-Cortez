import "./App.css";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer";
import { NavBar } from "./componentes/NavBar";

function App() {
  return (
    <>
    <NavBar />
    {/* <ItemListContainer greeting="Hola!"/> */}
    <ItemDetailContainer />
    </>
  );
}

export default App;
