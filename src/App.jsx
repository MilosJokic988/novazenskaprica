import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Booking from './pages/Booking';
import MainLayout from './components/MainLayout';

import Komentari from './pages/Komentari';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/booking" element={<Booking />} />
       
        <Route path="/komentari/:productId" element={<Komentari />} />
      </Route>
    </Routes>
  );
}

export default App;
