import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowProducts from "./components/ShowProducts";
import AddProduct from "./components/AddProduct";
import NavBarMenu from "./components/NavBarMenu";
import "./App.css"
import ProductDetail from "./components/ProductDetail";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/:id/" element={<ProductDetail />} />
          <Route path="/:id/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
