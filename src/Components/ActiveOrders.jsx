import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatusStart, verifySellerStart } from "../Redux/Actions";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import "./SCSS/ActiveOrders.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ActiveOrders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openOrders, setOpenOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [status, setStatus] = useState("Order Placed");

  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  const orderStatusUpdationResponse = useSelector(
    (state) => state.orderStatusUpdationResponse
  );
  const verifySellerResponseLoading = useSelector(
    (state) => state.verifySellerResponseLoading
  );
  const orderStatusUpdationResponseLoading = useSelector(
    (state) => state.orderStatusUpdationResponseLoading
  );
  const verifySellerResponseError = useSelector(
    (state) => state.verifySellerResponseError
  );
  const orderStatusUpdationResponseError = useSelector(
    (state) => state.orderStatusUpdationResponseError
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
        setOpenOrders(verifySellerResponse.openOrders);
      } else {
        navigate("/sellerpanel");
      }
    }
  }, [verifySellerResponse]);

  useEffect(() => {
    const ele = document.getElementById(status.replace(/\s/g, ""));
    if (ele) {
      ele.setAttribute("selected", "");
    }
  }, [status]);
  useEffect(() => {
    if (orderStatusUpdationResponse.hasOwnProperty("statusUpdated")) {
      if (orderStatusUpdationResponse.orderDelivered) {
        navigate("/sellerpanel/completedOrders");
        toast.success("Status Updated!", {
          theme: "dark",
          autoClose: 7000,
          position: "top-right",
          draggable: true,
          pauseOnHover: true,
        });
        setInterval(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.success("Status Updated!", {
          theme: "dark",
          autoClose: 7000,
          position: "top-right",
          draggable: true,
          pauseOnHover: true,
        });
        setInterval(() => {
          window.location.reload();
        }, 1000);
      }
    }
  }, [orderStatusUpdationResponse]);

  if (orderStatusUpdationResponseLoading || verifySellerResponseLoading) {
    return (
      <>
        <div className="container pt-3 activeHeading  mnvbarrr">
          <div className="row justify-content-center">
            <div className="col col-12">
              <h3 className="text-center">Active Order</h3>
            </div>
          </div>
        </div>
        <Loading />
      </>
    );
  } else if (orderStatusUpdationResponseError !== "") {
    return (
      <>
        <Error errorMessage={orderStatusUpdationResponseError} />
      </>
    );
  } else if (verifySellerResponseError !== "") {
    return (
      <>
        <Error errorMessage={verifySellerResponseError} />
      </>
    );
  }
  return (
    <>
      {/* header */}
      <div className="container pt-3 activeHeading mnvbarrr">
        <Link
          to={"/sellerpanel"}
          className="btn btn-outline-dark"
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            border: "none",
            fontSize: "1.4rem",
            zIndex: "1",
          }}
        >
          <i className="bi bi-box-arrow-left"></i>{" "}
        </Link>
        <div className="row justify-content-center">
          <div className="col col-12">
            <h3 className="text-center">Active Order</h3>
          </div>
        </div>
      </div>

      <div className="container activeOrders">
        <div className="row d-flex">
          {openOrders.length > 0 ? (
            openOrders.map((item, index) => (
              <div
                key={index}
                className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3"
                style={{ border: "none" }}
              >
                <div className="card-body" style={{ border: "1px solid grey" }}>
                  <img
                    src={item.product.productImages[0]}
                    alt="sads"
                    className="w-100 card-top-image"
                  />
                  <h1 className="card-title">
                    {item.product.productTitle.split(" ").slice(0, 6).join(" ")}
                  </h1>
                  <button
                    className="btn btn-outline-danger"
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
              <div className="noOrders">
                <div>
                  <h2 className="h2">No Orders</h2>
                  <Link to={"/sellerpanel"} className="btn btn-primary">
                    Return to Dashboard
                  </Link>
                </div>
              </div>
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
                      .join(" ")}
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

                  <h4 className="h4 mt-5">Status</h4>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option id="OrderPlaced" value="Order Placed">
                      Order Placed
                    </option>
                    <option
                      id="PreparingForDispatch"
                      value="Preparing For Dispatch"
                    >
                      Preparing for dispatch
                    </option>
                    <option id="OrderShipped" value="Order Shipped">
                      Order Shipped
                    </option>
                    <option id="Orderisonit'sway" value="Order is on it's way">
                      Order is on it's way
                    </option>
                    <option
                      id="Reachedatnearesthub"
                      value="Reached at nearest hub"
                    >
                      Reached at nearest hub
                    </option>
                    <option id="Outfordelivery" value="Out for delivery">
                      Out for delivery
                    </option>
                    <option id="OrderisDelivered" value="Order is Delivered">
                      Order is Delivered
                    </option>
                  </select>
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

              <button
                // type="button"
                className="btn btn-primary updateStatus"
                onClick={() => {
                  const sellerToken = JSON.parse(
                    localStorage.getItem("sellerToken")
                  );
                  //   console.log(currentOrder);
                  dispatch(
                    updateOrderStatusStart({
                      orderStatus: status,
                      sellerToken: sellerToken,
                      sellerId: verifySellerResponse.id,
                      orderDetails: currentOrder,
                    })
                  );
                }}
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {/*  */}
    </>
  );
}
