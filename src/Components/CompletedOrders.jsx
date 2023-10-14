import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifySellerStart } from "../Redux/Actions";
import Loading from "./Loading";

export default function CompletedOrders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("Order Placed");
  const [currentOrder, setCurrentOrder] = useState({});
  const [completedOrders, setCompletedOrders] = useState([]);
  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  const verifySellerResponseLoading = useSelector(
    (state) => state.verifySellerResponseLoading
  );

  useEffect(() => {
    const sellerToken = JSON.parse(localStorage.getItem("sellerToken"));
    if (sellerToken) {
      dispatch(verifySellerStart(sellerToken));
    } else {
      navigate("/sellerpanel");
    }
  }, []);
  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("verificationSuccess")) {
      if (verifySellerResponse.verificationSuccess) {
        setCompletedOrders(verifySellerResponse.completedOrders);
      } else {
        navigate("/sellerpanel");
      }
    }
  }, [verifySellerResponse]);

  if (verifySellerResponseLoading) {
    return (
      <>
        <div className="container pt-3">
          <div className="row justify-content-center">
            <div className="col col-12">
              <h3
                className="text-center"
                style={{ color: "#5c0431", fontSize: "2rem" }}
              >
                Your Completed or Delivered Orders
              </h3>
            </div>
          </div>
        </div>
        <Loading />
      </>
    );
  }

  return (
    <>
      {/* header */}
      <div className="container pt-3">
        <Link
          to={"/sellerpanel"}
          className="btn btn-outline-dark"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          Back to Panel
        </Link>
        <div className="row justify-content-center">
          <div className="col col-12">
            <h3
              className="text-center"
              style={{ color: "#5c0431", fontSize: "2rem" }}
            >
              Your Completed or Delivered Orders
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          {completedOrders.length > 0 ? (
            completedOrders.map((item, index) => (
              <div
                key={index}
                className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3"
                style={{ border: "none" }}
              >
                <div className="card-body" style={{ border: "1px solid grey" }}>
                  <img
                    src={item.product.productImages[0]}
                    alt="sads"
                    className="w-75 card-top-image"
                  />
                  <h1 className="card-title">
                    {item.product.productTitle.split(" ").slice(0, 6).join(" ")}{" "}
                    ...
                  </h1>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => {
                      setCurrentOrder(item);
                      setStatus(item.status);
                    }}
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              {currentOrder.hasOwnProperty("product") && (
                <h5 className="modal-title" id="staticBackdropLabel">
                  Order:
                </h5>
              )}

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {currentOrder.hasOwnProperty("product") && (
                <>
                  <img
                    src={currentOrder.product.productImages[0]}
                    alt="_"
                    className="w-50"
                    style={{ marginLeft: "25%" }}
                  />
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Product:{" "}
                    {currentOrder.product.productTitle
                      .split(" ")
                      .slice(0, 6)
                      .join(" ")}{" "}
                    ...
                  </h5>
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Quantity: {currentOrder.quantity}
                  </h5>
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Ordered By: {currentOrder.orderedBy.userName}
                  </h5>
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Email: {currentOrder.orderedBy.userEmail}
                  </h5>
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Address:
                  </h5>
                  <h6>Full Address: {currentOrder.userAddress.address}</h6>
                  <h6>PinCode: {currentOrder.userAddress.pincode}</h6>
                  <h6>Phone Number:+91 {currentOrder.userAddress.userPhone}</h6>
                  <h6>Landmark: {currentOrder.userAddress.landmark}</h6>

                  <h4 className="h4 mt-5">Status: {status}</h4>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
