import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart/cart";
import Login from "./components/LoginForm/login";
import Signup from "./components/SignupForm/signup";
import ForgotPassword from "./components/ForgotPassword/forgotPassword";
import Order from "./components/Order/order";
import Me from "./components/Me/me";
import Review from "./components/Review/review";

export const url = "https://localhost:3000";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/cart" element={<Cart />} />

            <Route exact path="/login" element={<Login />} />

            <Route exact path="/signup" element={<Signup />} />

            <Route exact path="/forgotPassword" element={<ForgotPassword />} />

            <Route exact path="/orders" element={<Order />} />

            <Route exact path="/me" element={<Me />} />

            <Route exact path="/reviews" element={<Review />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
