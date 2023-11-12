import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./SCSS/HowitWorks.scss";
import { Link } from "react-router-dom";
import SupplySupport from "./SupplySupport";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

export default function HowItWorks() {
  const verifySellerResponseLoading = useSelector(
    (s) => s.verifySellerResponseLoading
  );
  const verifySellerResponseError = useSelector(
    (s) => s.verifySellerResponseError
  );
  if (verifySellerResponseLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  } else if (verifySellerResponseError) {
    return (
      <>
        <Error errorMessage={verifySellerResponseError} />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="container-fluid howitworks">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1>How to Sell on Seesho</h1>
            <h1>
              Become a Seesho seller and join <span>11 lakh+ sellers</span> who
              are growing their business everyday
            </h1>

            <Link to={"/sellerpanel"} className="btn btn-outline-danger">
              Start Selling
            </Link>
          </div>{" "}
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
        </div>
      </div>

      <h1 className="text-center mt-5 pt-5 h1">
        Become a seller on Seesho in simple steps
      </h1>
      <div className="container howItWorksCartTop">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>
                <i className="bi bi-1-square"></i>&emsp;__________
              </h1>
              <h5>Sign up for free</h5>
              <p>
                Register as a Seesho Seller. All you need is an active bank
                account and your GSTIN number.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>
                <i className="bi bi-2-square"></i>&emsp;__________
              </h1>
              <h5>Upload your product & catalog</h5>
              <p>
                After completing the registration, upload your product catalog
                on the Seesho Supplier Panel.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>
                <i className="bi bi-3-square"></i>&emsp;__________
              </h1>
              <h5>Receive & Ship Orders</h5>
              <p>
                Seesho charges the lowest shipping cost for deliveries across
                India.
              </p>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div>
              <h1>
                <i className="bi bi-4-square"></i>
              </h1>
              <h5>Receive Payments</h5>
              <p>
                Payment is securely deposited directly to your bank account on
                Seesho following a 7-day payment cycle from order delivery,
                including Cash on Delivery orders.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SupplySupport />
      <Footer />
    </>
  );
}
