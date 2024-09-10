import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import SingUp from "./pages/SingUp";
import SingIn from "./pages/SingIn";
import Contact from "./pages/Contact";

function App() {
  return (
 

    < BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Login" element={<SingIn />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />   
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
   

  );
}

export default App;
