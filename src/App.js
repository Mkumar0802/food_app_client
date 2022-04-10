import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css' // tailwind

// import Register from "./pages/Register";
import Login from "./Components/Login";
// import HomePage from './pages/HomePage'
// import PageNotFound from './components/PageNotFound'
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
// import Downbar from "./Components/Downbar";
// import Register from "./Components/Register";
import Footer from "./Components/Footer";
import SocialLinks from "./Components/SocialLinks";
import Matchday from "./Components/Matchday";
import Cart from "./Components/Cart";
import Chickenbuckets from "./Components/Chickenbuckets";
import Briyanibuckets from "./Components/Briyanibucket";
import { Payment } from "./Components/Payment";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <BrowserRouter>
        <Navbar />
       

        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="matchday" element={<Matchday />} />
          <Route path="cart" element={<Cart />} />
          <Route path="chickenbuckets" element={<Chickenbuckets />} />
          <Route path="briyanibuckets" element={<Briyanibuckets />} />
          <Route path="paymentconfirmation" element={<Payment />} />
        </Routes>
        <Footer />
        <SocialLinks />

      </BrowserRouter>
    </div>
  );
}

export default App;