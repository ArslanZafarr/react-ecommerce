import './App.css'
// import { BrowserRouter, Routes, Route } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Error from './Error';
import Cart from './Cart';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
