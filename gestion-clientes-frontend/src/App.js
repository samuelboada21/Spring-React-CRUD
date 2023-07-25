import logo from "./logo.svg";
import "./App.css";
import ListClientesComponent from "./components/ListClientesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddClienteComponent from "./components/AddClienteComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListClientesComponent />}></Route>
            <Route exact path="/clientes" element={<ListClientesComponent />}></Route>
            <Route exact path="/add-cliente" element={<AddClienteComponent />}></Route>
            <Route exact path="/edit-cliente/:id" element={<AddClienteComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
