import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Page1 from "./page1";
import Page2 from "./page2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);