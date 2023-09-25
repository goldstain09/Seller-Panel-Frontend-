import React from "react";
import { Link } from "react-router-dom";

export default function CardForPanel({ item }) {
  return (
    <>
      <div
        className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3"
        style={{ border: "none" }}
      >
        <div className="card-body" style={{ border: "1px solid grey" }}>
          <img src="" alt="sads" className="w-75 card-top-image" />
          <h1 className="card-title">{item.productTitle}</h1>
          <Link className="btn col-6 btn-outline-warning ">Edit</Link>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            className="btn  col-6 btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>

      {/* modal for delete */}
      <div
        className="modal-dialog modal-dialog-centered modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
