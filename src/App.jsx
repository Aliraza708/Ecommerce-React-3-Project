import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
// import ApiProvider from "./Context.jsx/ContextApi";


function App() {
  return (
    // <ApiProvider>
    < BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    // </ApiProvider>

  );
}

export default App;
