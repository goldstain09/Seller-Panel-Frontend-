import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./SCSS/GrowBusiness.scss";
import { Link } from "react-router-dom";
import SupplySupport from "./SupplySupport";
import SellProductsOnline from "./SellProductsOnline";
import LowestShippingCosts from "../Media/LowestShippingCosts.png";
import NextDayDispatchProgram from "../Media/NextDayDispatchProgram.png";
import Adstogrowmore from "../Media/Adstogrowmore.png";
import BusinessInsights from "../Media/BusinessInsights.png";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function GrowBusiness() {
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
      <div className="container-fluid growbusiness">
        <div className="row d-flex">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1>
              Grow Your Business with <span>Seesho</span>
            </h1>
            <h1>
              Sell your products online and reach{" "}
              <span>crores of customers</span> through Seesho’s selling tools
              for suppliers.
            </h1>
            <Link to={'/sellerpanel'} className="btn btn-outline-danger">Start Selling</Link>
          </div>{" "}
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
        </div>
      </div>

      <div className="container-fluid growyourbusiness">
        <div className="container">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1>
                Grow Your Business With <br /> Seesho
              </h1>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row d-flex">
                <div className="col col-6">
                  <div>
                    <img
                      className="w-25"
                      src={LowestShippingCosts}
                      alt="logo"
                    />
                    <h5>Lowest Shipping Costs</h5>
                    <p>
                      Sell your products across India to over 28,000+ pincodes
                      at lowest delivery cost.
                    </p>
                  </div>
                </div>
                <div className="col col-6">
                  <div>
                    <img className="w-25" src={Adstogrowmore} alt="logo" />
                    <h5>Ads to grow more</h5>
                    <p>
                      Use selling tools like Seesho Ads to be more visible and
                      sell more products
                    </p>
                  </div>
                </div>
                <div className="col col-6">
                  <div>
                    <img
                      className="w-25"
                      src={NextDayDispatchProgram}
                      alt="logo"
                    />
                    <h5>Next Day Dispatch Program</h5>
                    <p>
                      Sign up for the quick Next Day Dispatch (NDD) Program and
                      get higher visibility and your own Account Manager
                    </p>
                  </div>
                </div>
                <div className="col col-6">
                  <div>
                    <img className="w-25" src={BusinessInsights} alt="logo" />
                    <h5>Business Insights</h5>
                    <p>
                      Use product & price recommendations so that you’re always
                      on top of your business
                    </p>
                  </div>
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
