import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import ErrorPage from "./pages/404";
import HomePage from "./pages/HomePage";
import CreateBlog from "./pages/CreateBlog";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/create" element={<CreateBlog />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <BrowserRouter basename="/Blog-creation-page">
        <NavBar />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
