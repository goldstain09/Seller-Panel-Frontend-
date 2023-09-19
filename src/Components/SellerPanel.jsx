import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import CardForPanel from "./CardForPanel";
import { useSelector } from "react-redux";

export default function SellerPanel() {

  const createSellerResponse = useSelector((state) => state.createSellerResponse);
  console.log(createSellerResponse);

  const [notHasSellerToken, setNotHasSellerToken] = useState(false);

  useEffect(() => {
    const sellerToken = JSON.parse(localStorage.getItem("sellerToken"));
    if (sellerToken) {
    } else {
      setNotHasSellerToken(true);
    }
  }, []);



  //for showing Login--
  const [showLogin, setShowLogin] = useState(false);
  if (notHasSellerToken) {
    return (
      <>
        <Signup setShowLogin={setShowLogin}/>
        {
          showLogin && <Login />
        }
        
      </>
    );
  }

  return (
    <>
      {/* header */}
      <div className="container pt-3">
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
        <div className="row d-flex border-top border-bottom py-4">
          <h4 className="h4 col-5">Shop Name</h4>
          <h5 className="h4 col-6">Owner's Name</h5>
          <Link className="col-1 btn btn-outline-secondary">Edit Details</Link>
        </div>
        <div className="row d-flex mt-3 border-bottom py-4">
          <h4 className="h3 col-10">Your Products</h4>
          <Link className="col-2 btn btn-primary">Add a new Product</Link>
        </div>
        <div className="row d-flex mt-3 border-bottom py-4">
          <CardForPanel />
          <CardForPanel />
          <CardForPanel />
          <CardForPanel />
          <CardForPanel />
          <CardForPanel />
          <CardForPanel />
        </div>
      </div>
    </>
  );
}
