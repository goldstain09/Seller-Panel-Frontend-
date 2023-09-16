import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./SCSS/PricingAndCommission.scss";
import { Link } from "react-router-dom";
import penalty from "../Media/penalty.png";
import collection from "../Media/collection.png";
import registration from "../Media/registration.png";
import securepayment from '../Media/securepayment.png';
import paymentcycle from '../Media/paymentcycle.png';
import SellProductsOnline from "./SellProductsOnline";
import SupplySupport from "./SupplySupport";

export default function PricingAndCommission() {
  return (
    <>
      <Header />
      <div className="container-fluid pricingandcommission">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1>Pricing & Commission</h1>
            <h1>
              Seesho charges <span>0% Commission</span> rate across all
              categories making it the most profitable platform for you to sell
              online.
            </h1>
            <Link to={'/sellerpanel'} className="btn btn-outline-danger">Start Selling</Link>
          </div>{" "}
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
        </div>
      </div>

      <div className="container pricingCardTop">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="text-center">
              <img src={registration} alt="" />
              <h5 className="text-center">No Registration Fee</h5>
              <p className="text-center">
                Registering as a Seesho seller is free - no cost of creating
                your account or getting your products listed.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="text-center">
              <img src={collection} alt="" />
              <h5 className="text-center">No Collection Fee</h5>
              <p className="text-center">
                You keep 100% of the sale price with no charges on both payment
                gateway or cash on delivery orders on Seesho.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="text-center">
              <img src={penalty} alt="" />
              <h5 className="text-center">No Penalty</h5>
              <p className="text-center">
                Sell on Seesho stress-free without the fear of penalties for
                order cancellations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid paymentcycle">
        <div className="container">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1>Payment Cycle</h1>
              <p>
                The settlement amount is securely deposited directly into your
                bank account following a 7-day payment cycle from order
                delivery, including cash on delivery orders. You can view your
                deposited balance and the upcoming payments on the Seesho
                Supplier Panel.
              </p>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row d-flex">
                <div className="col-6 text-center">
                  <img src={paymentcycle} alt="" />
                  <h5>7-day payment cycle</h5>
                </div>
                <div className="col-6 text-center">
                  <img src={securepayment} alt="" />
                  <h5>Secured payment in your account</h5>
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
