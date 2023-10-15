import React, { useEffect, useState } from "react";
import logo from "../Media/logo.png";
import "./SCSS/Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifySellerStart } from "../Redux/Actions";

export default function Header() {
  const dispatch = useDispatch();

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
      setLoginned(false);
    }
  }, []);
  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("verificationSuccess")) {
      if (verifySellerResponse.verificationSuccess) {
        setLoginned(true);
      } else {
        setLoginned(false);
      }
    }
  }, [verifySellerResponse]);

  const [loginned, setLoginned] = useState(false);

  return (
    <>
      <header className="p-3 mb-3  fixed-top Headerr">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <img src={logo} alt="Logo" className="w-75" />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to={"/sellonline"} className="nav-link px-2 link-dark">
                  Sell Online
                </NavLink>
              </li>
              <li>
                <NavLink to={"/howitworks"} className="nav-link px-2 link-dark">
                  How it Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/pricingandcommission"}
                  className="nav-link px-2 link-dark"
                >
                  Price & Commission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shippingandreturns"}
                  className="nav-link px-2 link-dark"
                >
                  Shipping & Returns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/growbusiness"}
                  className="nav-link px-2 link-dark"
                >
                  Grow Business
                </NavLink>
              </li>
            </ul>

            {verifySellerResponseLoading ? (
              <>Loading...</>
            ) : (
              <div className="text-end">
                {loginned ? (
                  <>
                    <Link
                      to={"/sellerpanel"}
                      className="btn btn-outline-primary"
                    >
                      Your Panel
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to={"/sellerpanel"}
                      className="btn btn-outline-primary"
                    >
                      Login
                    </Link>
                    <Link to={"/sellerpanel"} className="btn btn-primary">
                      Create Account
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
