import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./SCSS/ShippingAndReturns.scss";
import { Link } from "react-router-dom";
import commission from '../Media/collection.png';
import pincodeserved from '../Media/pincodeserved.png';
import lowestshippingcharges from '../Media/lowestshippingcharge.png';
import SellProductsOnline from "./SellProductsOnline";
import SupplySupport from "./SupplySupport";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function ShippingAndReturns() {
  const verifySellerResponseLoading = useSelector(
    (s) => s.verifySellerResponseLoading
  );

  if (verifySellerResponseLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  } else
  return (
    <>
      <Header />
      <div className="container-fluid shippingandreturns">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1>Seesho Shipping, Delivery & Returns Policy</h1>
            <h1>
              Get your products delivered to crores of customers with the{" "}
              <span>lowest shipping charges.</span>
            </h1>
            <Link to={'/sellerpanel'} className="btn btn-outline-danger">Start Selling</Link>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
        </div>
      </div>

      <div className="container-fluid shippingtop">
        <div className="container">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1>Deliver products across India</h1>
              <p>
                Meesho ensures quick and hassle-free delivery of all your
                products across India
              </p>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row d-flex">
                <div className="col-4 text-center">
                  <img className="w-75" src={lowestshippingcharges} alt="" />
                  <h5>Lowest Shipping Charges</h5>
                </div>
                <div className="col-4 text-center">
                  <img className="w-75" src={pincodeserved} alt="" />
                  <h5>28000+ Pincode Served</h5>
                </div>
                <div className="col-4 text-center">
                  <img className="w-75" src={commission} alt="" />
                  <h5>0% Commission</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SellProductsOnline />
      <SupplySupport />
      <Footer />
    </>
  );
}
