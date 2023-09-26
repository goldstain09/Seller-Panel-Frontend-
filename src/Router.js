import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SellOnline from "./Components/SellOnline";
import HowItWorks from "./Components/HowItWorks";
import PricingAndCommission from "./Components/PricingAndCommission";
import ShippingAndReturns from "./Components/ShippingAndReturns";
import GrowBusiness from "./Components/GrowBusiness";
import SellerPanel from "./Components/SellerPanel";
import EditSeller from "./Components/EditSeller";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";

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
          <Route path="/sellerpanel">
            <Route index={true} element={<SellerPanel />} />
            <Route element={<EditSeller/>} path="/sellerpanel/edit"/>
            <Route element={<AddProduct/>} path="/sellerpanel/addproduct"/>
            <Route element={<EditProduct/>} path="/sellerpanel/editproduct/:id"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
