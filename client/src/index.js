import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={2500}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      theme="colored"
    />
  </React.StrictMode>
);
