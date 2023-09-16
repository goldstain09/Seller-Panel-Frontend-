import React from "react";
import "./SCSS/SupplySupport.scss";

export default function SupplySupport() {
  return (
    <>
      <div className="container-fluid support">
        <div className="container  mt-5 py-5">
          <div className="row d-flex">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <h1>
                Seesho Supplier Support <br />
                Available 24/7
              </h1>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <p className="w-75">
                Seesho supplier support is available to solve all your doubts
                and issues before and after you start your online selling
                business.
              </p>
              <div className="row">
                <div className="col-1">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="col-4">
                  You can reach out to <span>sell@Seesho.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
