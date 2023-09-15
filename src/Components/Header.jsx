import React from "react";
import logo from "../Media/logo.png";
import "./SCSS/Header.scss";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="p-3 mb-3 border-bottom fixed-top Headerr">
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
                <NavLink to={"/pricingandcommission"} className="nav-link px-2 link-dark">
                  Price & Commission
                </NavLink>
              </li>
              <li>
                <NavLink to={"/shippingandreturns"} className="nav-link px-2 link-dark">
                  Shipping & Returns
                </NavLink>
              </li>
              <li>
                <NavLink to={"/growbusiness"} className="nav-link px-2 link-dark">
                  Grow Business
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <Link to={"/"} className="btn btn-outline-primary">
                Login
              </Link>
              <Link to={"/"} className="btn btn-primary">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
