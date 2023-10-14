import React from "react";
import logo from "../Media/logo.png";
import "./SCSS/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container border-top pt-5 footer">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img src={logo} alt="Logo" />
            <p>
              Sell your products to crores of customers on Meesho at 0%
              commission
            </p>
            <Link to={"/sellerpanel"} className="btn btn-outline-primary">
              Sell Now
            </Link>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h4 className="h4 text-dark">Sell on Seesho</h4>
            <Link to={"/sellonline"}>
              <p>Sell online</p>
            </Link>
            <Link to={"/howitworks"}>
              <p>Price & Commission</p>
            </Link>
            <Link to={"/pricingandcommission"}>
              <p>How it Works</p>
            </Link>
            <Link to={"/shippingandreturns"}>
              <p>Shipping & Returns</p>
            </Link>
            <Link to={"/growbusiness"}>
              <p>Grow Your Business</p>
            </Link>
            <a href="">
              <p>Shop online on Seedho</p>
            </a>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <h4 className="h4 text-dark">Contact Us</h4>
            <a>
              <p>Sell@Seesho.comDemo</p>
            </a>
            <a>
              <p>+91 XXXXX XXXXX</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
