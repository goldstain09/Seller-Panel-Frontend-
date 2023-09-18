import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

export default function SellerPanel() {
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
        <div className="row gap-2 d-flex mt-3 border-bottom py-4">
          <div className="col-1">
            <img src="" alt="sads" className="w-75" />
          </div>
          <h4 className="col-8 h4">Shining Sareee</h4>
          <Link className="btn col-1 btn-outline-warning ">Edit</Link>
          <Link className="btn  col-1 btn-outline-danger">Delete</Link>
        </div>
      </div>

      {/* <Signup />
    <Login /> */}
    </>
  );
}
