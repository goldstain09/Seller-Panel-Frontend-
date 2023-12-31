import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link, useNavigate } from "react-router-dom";
import CardForPanel from "./CardForPanel";
import { useDispatch, useSelector } from "react-redux";
import { logoutStart, verifySellerStart } from "../Redux/Actions";
import Error from "./Error";
import "./SCSS/SellerPanel.scss";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SellerPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  const verifySellerResponseError = useSelector(
    (state) => state.verifySellerResponseError
  );
  const createSellerResponseError = useSelector(
    (state) => state.createSellerResponseError
  );
  const loginSellerResponseError = useSelector(
    (state) => state.loginSellerResponseError
  );
  const verifySellerResponseLoading = useSelector(
    (state) => state.verifySellerResponseLoading
  );
  const createSellerResponseLoading = useSelector(
    (state) => state.createSellerResponseLoading
  );
  const loginSellerResponseLoading = useSelector(
    (state) => state.loginSellerResponseLoading
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
  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("verificationSuccess")) {
      if (verifySellerResponse.verificationSuccess) {
        if (verifySellerResponse.hasOwnProperty("loginSuccess")) {
          toast.success("Successfully LoggedIn!", {
            theme: "dark",
            autoClose: 1000,
            position: "top-right",
            draggable: true,
            pauseOnHover: true,
          });
          setNotHasSellerToken(false);
        }
        if (verifySellerResponse.hasOwnProperty("verifiedANDLoggedIn")) {
          toast.success("Successfully LoggedIn!", {
            theme: "dark",
            autoClose: 1000,
            position: "top-right",
            draggable: true,
            pauseOnHover: true,
          });
          setNotHasSellerToken(false);
        }
        if (verifySellerResponse.hasOwnProperty("sellerCreated")) {
          toast.success("Your Seller Account is Ready!", {
            theme: "dark",
            autoClose: 1000,
            position: "top-right",
            draggable: true,
            pauseOnHover: true,
          });
          setNotHasSellerToken(false);
        }
      }
    }
    if (verifySellerResponse.hasOwnProperty("logout")) {
      setNotHasSellerToken(true);
    }
  }, [verifySellerResponse]);

  //for showing Login--
  const [showLogin, setShowLogin] = useState(false);
  if (notHasSellerToken) {
    if (loginSellerResponseLoading || createSellerResponseLoading) {
      return (
        <>
          <Loading />
        </>
      );
    } else
      return (
        <>
          <Signup setShowLogin={setShowLogin} />
          {showLogin && <Login />}
        </>
      );
  }

  if (
    loginSellerResponseLoading ||
    createSellerResponseLoading ||
    verifySellerResponseLoading
  ) {
    return (
      <>
        <div className="container pt-3 mnvbarrr">
          <div className="row justify-content-center">
            <div className="col col-12">
              <h3 className="text-center">Dashboard</h3>
            </div>
          </div>
        </div>
        <Loading />
      </>
    );
  }
  if (loginSellerResponseError !== "") {
    return (
      <>
        <Error errorMessage={loginSellerResponseError} />
      </>
    );
  } else if (verifySellerResponseError !== "") {
    return (
      <>
        <Error errorMessage={verifySellerResponseError} />
      </>
    );
  } else if (createSellerResponseError !== "") {
    return (
      <>
        <Error errorMessage={createSellerResponseError} />
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
          <div className="container pt-3 mnvbarrr">
            <Link
              to={"/"}
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
                <h3 className="text-center">Dashboard</h3>
              </div>
            </div>
          </div>
          <div className="container sellerPanel mt-5">
            <div className="row d-flex  border-top border-bottom py-4">
              <div className="col-9">
                <div className="row d-flex">
                  <div className="col col-4">
                    <h4 className="h4">Shopname:</h4>
                    <h4 className="h4">Owner: </h4>
                  </div>
                  <div className="col col-4">
                    <h3 className="h3"> {verifySellerResponse.shopName}</h3>
                    <h3 className="h3"> {verifySellerResponse.ownerName}</h3>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <Link
                  to={"/sellerpanel/edit"}
                  className=" btn btn-outline-secondary editSeller"
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <button
                  title="Danger Operation"
                  onClick={() => {
                    localStorage.removeItem("sellerToken");
                    dispatch(logoutStart());
                  }}
                  className="btn btn-danger logout"
                >
                  Log Out
                </button>
              </div>
            </div>
            <div className="row d-flex py-4 activities">
              <h5 className="h5 text-secondary">Activities:</h5>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <Link
                  to={"/sellerpanel/activeOrders"}
                  className=" btn btn-outline-primary"
                >
                  Your Active Orders{" "}
                </Link>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <Link
                  to={"/sellerpanel/completedOrders"}
                  className=" btn btn-outline-primary "
                >
                  Your Completed Orders
                </Link>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <Link
                  to={"/sellerpanel/followers"}
                  className=" btn btn-outline-primary "
                >
                  Your Followers
                </Link>
              </div>
            </div>

            <div className="row d-flex mt-3 border-bottom py-4 yourProducts">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h5 className="h5 text-secondary">Your Products:</h5>
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-end">
                <Link
                  to={"/sellerpanel/addproduct"}
                  className=" btn btn-primary"
                >
                  Add a new Product
                </Link>
              </div>
            </div>
            <div className="row d-flex mt-3 border-bottom py-4">
              {verifySellerResponse.products.length > 0 ? (
                verifySellerResponse.products.map((item) => (
                  <CardForPanel key={item._id} item={item} />
                ))
              ) : (
                <>
                  <h1
                    className="h1 text-center mt-5 bi bi-emoji-frown"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      color: "#5c0431",
                    }}
                  >
                    &nbsp;No Products Added!
                  </h1>
                </>
              )}
            </div>
          </div>

          <ToastContainer />
        </>
      );
  }
}
