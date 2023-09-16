import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SellOnline from "./Components/SellOnline";
import HowItWorks from "./Components/HowItWorks";
import PricingAndCommission from "./Components/PricingAndCommission";
import ShippingAndReturns from "./Components/ShippingAndReturns";
import GrowBusiness from "./Components/GrowBusiness";
import SellerPanel from "./Components/SellerPanel";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<SellOnline />} path="/sellonline" />
          <Route element={<HowItWorks/>} path="/howitworks" />
          <Route element={<PricingAndCommission />} path="/pricingandcommission" />
          <Route element={<ShippingAndReturns/>} path="/shippingandreturns" />
          <Route element={<GrowBusiness />} path="/growbusiness" />
          <Route element={<SellerPanel />} path="/sellerpanel" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
