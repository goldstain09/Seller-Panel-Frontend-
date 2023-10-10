import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import CardForPanel from "./CardForPanel";
import { useDispatch, useSelector } from "react-redux";
import { verifySellerStart } from "../Redux/Actions";

export default function SellerPanel() {
  const dispatch = useDispatch();

  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  // console.log(verifySellerResponse.verificationSuccess);

  const [notHasSellerToken, setNotHasSellerToken] = useState(false);

  useEffect(() => {
    const sellerToken = JSON.parse(localStorage.getItem("sellerToken"));
    if (sellerToken) {
      dispatch(verifySellerStart(sellerToken));
    } else {
      setNotHasSellerToken(true);
    }
  }, []);

  //for showing Login--
  const [showLogin, setShowLogin] = useState(false);
  if (notHasSellerToken) {
    return (
      <>
        <Signup setShowLogin={setShowLogin} />
        {showLogin && <Login />}
      </>
    );
  }
  switch (verifySellerResponse.verificationSuccess) {
    case false:
      setNotHasSellerToken(true);
      break;
    case true:
      return (
        <>
          {/* header */}
          <div className="container pt-3">
        <Link to={'/'} className="btn btn-outline-dark" style={{position:"absolute",top:'1rem',left:'1rem'}}>Back to Home</Link>
            <div className="row justify-content-center">
              <div className="col col-12">
                <h3
                  className="text-center"
                  style={{ color: "#5c0431", fontSize: "2rem" }}
                >
                  Your Panel
                </h3>
              </div>
            </div>
          </div>
          <div className="container sellerPanel mt-5">
            <div className="row d-flex gap-4 border-top border-bottom py-4">
              <h4 className="h4 col-4">{verifySellerResponse.shopName}</h4>
              <h5 className="h4 col-5">{verifySellerResponse.ownerName}</h5>
              <Link
                to={"/sellerpanel/edit"}
                className="col-1 btn btn-outline-secondary"
              >
                Edit Details
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("sellerToken");
                  setInterval(() => {
                    window.location.reload();
                  }, 10);
                  clearInterval();
                }}
                className="col-1 btn btn-danger"
              >
                Log Out
              </button>
            </div>
            <div className="row d-flex py-4">
              <h4 className="h4 col-10">Your Active Orders</h4>
              <Link
                to={"/sellerpanel/activeOrders"}
                className="col-2 btn btn-outline-primary"
              >
                See here
              </Link>
            </div>
            <div className="row d-flex py-4">
              <h4 className="h4 col-10">Your Completed Orders</h4>
              <Link
                to={"/sellerpanel/completedOrders"}
                className="col-2 btn btn-outline-primary"
              >
                See here
              </Link>
            </div>
            <div className="row d-flex mt-3 border-bottom py-4">
              <h4 className="h3 col-10">Your Products</h4>
              <Link
                to={"/sellerpanel/addproduct"}
                className="col-2 btn btn-primary"
              >
                Add a new Product
              </Link>
            </div>
            <div className="row d-flex mt-3 border-bottom py-4">
              {verifySellerResponse.products.length > 0 ? (
                verifySellerResponse.products.map((item) => (
                  <CardForPanel key={item._id} item={item} />
                ))
              ) : (
                <>
                  <h1 className="h1 text-primary mt-5 pt-5">
                    No Products Added...
                  </h1>
                </>
              )}
            </div>
          </div>
        </>
      );

    default: {
      return (
        <h1 className="text-center h1 text-primary mt-5 pt-5">
          Unable to fetch data, Please try again Later
        </h1>
      );
    }
  }
}
