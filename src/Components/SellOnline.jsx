import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./SCSS/SellOnline.scss";
import { Link } from "react-router-dom";
import SupplySupport from "./SupplySupport";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function SellOnline() {
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
      <div className="container-fluid sellonline">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1>Learn How to Sell Online</h1>
            <h1>
              Become a Seesho seller to start{" "}
              <span>selling your products online</span> at 0% commission
            </h1>
            <Link to={'/sellerpanel'} className="btn btn-outline-danger">Start Selling</Link>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
        </div>
      </div>

      <h1 className="text-center mt-5 pt-5">Why Sell Your Products On Seesho?</h1>
      <div className="container SellOnlineCartTop">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>0%</h1>
              <h5>Commission</h5>
              <p>Sell your products online at 0% commission and enjoy a hassle-free selling experience on Seesho.</p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>14 Crore+</h1>
              <h5>Customers</h5>
              <p>Seesho is one of the largest and fastest growing online selling platforms in India with over 14 Crore+ customers.</p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>28000+</h1>
              <h5>Pincode Served</h5>
              <p>Receive orders from all over India and sell products online to crores of customers across 28000+ pincodes.</p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>Lowest Cost</h1>
              <h5>Delivery</h5>
              <p>Enjoy the lowest delivery cost across India with our logistics partners, and offer fast delivery to your customers.</p>
            </div>
          </div>
        </div>
      </div>
      <SupplySupport />
      <Footer />
    </>
  );
}
