import React, { useEffect, useState } from "react";
import logo from "../Media/logo.png";
import "./SCSS/Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifySellerStart } from "../Redux/Actions";
import { SpinnerDotted } from "spinners-react";

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
              <> <SpinnerDotted
              size={40}
              thickness={180}
              speed={180}
              color="#5c0431"
            /></>
            ) : (
              <div className="text-end">
                {loginned ? (
                  <>
                    <Link
                      to={"/sellerpanel"}
                      className="btn btn-outline-primary"
                      style={{ borderRadius: "0" }}
                    >
                      Dashboard
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to={"/sellerpanel"}
                      className="btn btn-outline-primary"
                      style={{ borderRadius: "0" }}
                    >
                      Login
                    </Link>
                    <Link
                      to={"/sellerpanel"}
                      className="btn btn-primary"
                      style={{ borderRadius: "0" }}
                    >
                      Create Account
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <header className="container-fluid offcanvasHeader fixed-top">
        <div className="row d-flex">
          <div className="col-3">
            {" "}
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-6"></div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i class="bi bi-caret-right"></i>
            </button>
          </div>
        </div>
      </header>

      {/* canvas */}
      <div
        className="offcanvas offcanvasH offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={logo} alt="Logo" className="w-75" />
          </h5>
          <button
            type="button"
            className="bi bi-caret-left text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <NavLink to={"/sellonline"} className="nav-link px-2 link-dark">
            Sell Online
          </NavLink>
          <NavLink to={"/howitworks"} className="nav-link px-2 link-dark">
            How it Works
          </NavLink>
          <NavLink
            to={"/pricingandcommission"}
            className="nav-link px-2 link-dark"
          >
            Price & Commission
          </NavLink>
          <NavLink
            to={"/shippingandreturns"}
            className="nav-link px-2 link-dark"
          >
            Shipping & Returns
          </NavLink>
          <NavLink to={"/growbusiness"} className="nav-link px-2 link-dark">
            Grow Business
          </NavLink>
          {verifySellerResponseLoading ? (
            <>Loading...</>
          ) : (
            <div className="text-end">
              {loginned ? (
                <>
                  <Link
                    to={"/sellerpanel"}
                    className="btn btn-outline-primary"
                    style={{ borderRadius: "0" }}
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/sellerpanel"}
                    className="btn btn-outline-primary"
                    style={{ borderRadius: "0" }}
                  >
                    Login
                  </Link>
                  <Link
                    to={"/sellerpanel"}
                    className="btn btn-primary"
                    style={{ borderRadius: "0" }}
                  >
                    Create Account
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
