import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home";
import Navbar from "./navbar/Navbar";
import Publisher from "./Component/Publisher/Publisher"
import Register from "./Component/RegisterPopUp/Register";
import Login from "./login/Login";
import Blog from "./blog/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/publisher" element={<Publisher/>} />
          <Route path="/blog" element={<Blog/>} />
          
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="*" element={<Error/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
