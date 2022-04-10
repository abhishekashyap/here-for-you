import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Layout from "./layout/Layout";
import Description from "./pages/Description/Description";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />
          <Route path="/choice" element={<Description />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
