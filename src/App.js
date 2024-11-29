import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Nav'; // Adjust path based on your project structure
import LandingPage from './component/Landingpage'; // Replace with your actual component path
import SignIn from './component/SignInPage'; // Replace with your actual component path
import SignUp from './component/SignUpPage'; // Replace with your actual component path
import PackagesPage from './component/Paycomponent'; // Corrected the import for your packages page
import Footer from './component/Footer';
import AdminDashboard from './component/Admindash';
// import GroupChat from './component/groupz';
import  PaymentPage from './component/CartPage';
import FinalPage from './component/Thank';
// import Group from './component/grop';
import 'bootstrap/dist/css/bootstrap.min.css';
import  CuteHappyCustomerPage from'./component/PayPage';
import SocialBar from './component/Socialbar';


function App() {
  const [cart, setCart] = useState([]); // Initialize cart state

  return (
    <Router>
      
      <SocialBar />
     <Navbar /> 
      <Routes>
        <Route path="/about" element={< CuteHappyCustomerPage />} />
        {<Route path="/" element={<LandingPage/>} /> }
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/packages" element={<PackagesPage setCart={setCart} />} /> {/* Pass setCart to PackagesPage */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* <Route path="/chat" element={< />} /> */}
        {    <Route path="/payment" element={<  PaymentPage />} />/* Pass cart and setCart to CartPage */}
        {/* <Route path="/checkout" element={<CheckoutPage cart={cart} />} /> */}
        {<Route path="/thankyou" element={< FinalPage/>} /> }
   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
