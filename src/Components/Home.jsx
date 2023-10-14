import React from "react";
import "./SCSS/Home.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import penalty from "../Media/0penalty.png";
import discount from "../Media/0discount.png";
import ease from "../Media/ease.png";
import growth from "../Media/growth.png";
import SupplySupport from "./SupplySupport";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function Home() {
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
        <div className="container-fluid homePage">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h1>Sell online to 14 Cr+ customers at</h1>
              <h1>0% Commission</h1>
              <p>Become a Seesho seller and grow your business across India</p>
              <Link to={"/sellerpanel"} className="btn btn-outline-danger">
                Start Selling
              </Link>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
          </div>
        </div>

        <div className="container HomeCardTop">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div>
                <h1>11 Lakh+</h1>
                <h5>Trust Seesho to sell online</h5>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div>
                <h1>14 Crore+</h1>
                <h5>Customers buying across India</h5>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div>
                <h1>28000+</h1>
                <h5>Pincode Supported for delivery</h5>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div>
                <h1>700+</h1>
                <h5>Categories to sell online</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container WhySuppliersLoveSeesho">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h1>Why Suppliers Love Seesho</h1>
              <p>
                All the benefits that come with selling on Seesho are designed
                to help you sell more, and make it easier to grow your business.
              </p>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row d-flex h-25  border-bottom">
                <div className="col-2">
                  <img className="w-75 pt-4" src={discount} alt="logo" />
                </div>
                <div className="col-10">
                  <h5 className="pt-4">0% Commission Fee</h5>
                  <p>
                    Suppliers selling on Seesho keep 100% of their profit by not
                    paying any commission
                  </p>
                </div>
              </div>
              <div className="row d-flex h-25  border-bottom">
                <div className="col-2">
                  <img className="w-75 pt-4" src={penalty} alt="logo" />
                </div>
                <div className="col-10">
                  <h5 className="pt-4">0 Penalty Charges</h5>
                  <p>
                    Sell online without the fear of order cancellation charges
                    with 0 Penalty for late dispatch or order cancellations.
                  </p>
                </div>
              </div>
              <div className="row d-flex h-25  border-bottom">
                <div className="col-2">
                  <img className="w-75 pt-4" src={growth} alt="logo" />
                </div>
                <div className="col-10">
                  <h5 className="pt-4">Growth for Every Supplier</h5>
                  <p>
                    From small to large and unbranded to branded, all suppliers
                    have grown their businesses on Seesho
                  </p>
                </div>
              </div>
              <div className="row d-flex h-25">
                <div className="col-2">
                  <img className="w-75 pt-4" src={ease} alt="logo" />
                </div>
                <div className="col-10">
                  <h5 className="pt-4">Ease of Doing Businesss</h5>
                  <p>
                    <i class="bi bi-check2-circle"></i> Easy Product Listing
                    &emsp; &emsp;
                    <i class="bi bi-check2-circle"></i> Lowest Cost Shipping
                    <br />
                    <i class="bi bi-check2-circle"></i> 7-Day Payment Cycle from
                    the delivery date
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SupplySupport />
        <Footer />
      </>
    );
}
