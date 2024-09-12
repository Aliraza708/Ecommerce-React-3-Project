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
import ThemeProvider from "./Context/Theme";
import UserContextprovider from "./Context/User";
import SearchContextProvidner from "./Context/Search";
import Footer from "./components/Footer";

function App() {
  return ( 
 <UserContextprovider> 
  <SearchContextProvidner>
  < ThemeProvider>
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
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    </SearchContextProvidner>
    </UserContextprovider>

  );
}

export default App;
