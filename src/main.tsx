import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import { CountriesProvider } from "./contexts/CountriesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/country/:countryId" element={<Country />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  </StrictMode>
);
