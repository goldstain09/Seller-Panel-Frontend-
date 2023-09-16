import { Link } from "react-router-dom";
import "./SCSS/SupplySupport.scss";
import React from "react";

export default function SellProductsOnline() {
  return (
    <>
      <div className="container-fluid support">
        <div className="container  mt-5 py-5">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <h1>
                Sell Products Online at <br />
                0% Commission on Seesho
              </h1>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <p className="w-75">
                Join the fastest growing e-commerce platform in India and sell
                to crores of users and grow your business
              </p>
              <Link to={'/sellerpanel'} className="btn btn-outline-danger">Start Selling</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
