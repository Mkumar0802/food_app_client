import {  Route, Routes } from "react-router-dom";
import './index.css' // tailwind


import Login from "./Components/Login";
// import HomePage from './pages/HomePage'
// import PageNotFound from './components/PageNotFound'
import Home from "./Components/Home";
import Header from "./Components/Header";
// import Downbar from "./Components/Downbar";

import Footer from "./Components/Footer";
import SocialLinks from "./Components/SocialLinks";
import Matchday from "./Components/Matchday";
import Cart from "./Components/Cart";
import Chickenbuckets from "./Components/Chickenbuckets";
import Briyanibuckets from "./Components/Briyanibucket";
import Payment from "./Components/Payment";
import Cartbag from "./Components/Cartbag";
import Registerpage from "./Components/Registerpage";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
     
        <Header />
       

        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={< Login/>} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="matchday" element={<Matchday />} />
          <Route path="cart" element={<Cart />} />
          <Route path="chickenbuckets" element={<Chickenbuckets />} />
          <Route path="briyanibuckets" element={<Briyanibuckets />} />
          <Route path="paymentconfirmation" element={<Payment />} />
          <Route path="cartbag" element={<Cartbag />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="text-white text-2xl">Page under Construction!</p>
              </main>
            }
          />
        </Routes>
        <SocialLinks />
        <Footer />
       

      
    </div>
  );
}

export default App;