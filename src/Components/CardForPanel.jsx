import React from "react";
import { Link } from "react-router-dom";

export default function CardForPanel() {
  return (
    <>
      <div
        className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3"
        style={{ border: "none" }}
      >
        <div className="card-body" style={{ border: "1px solid grey" }}>
          <img src="" alt="sads" className="w-75 card-top-image" />
          <h1 className="card-title">Shining Sareee</h1>
          <Link className="btn col-6 btn-outline-warning ">Edit</Link>
          <Link className="btn  col-6 btn-outline-danger">Delete</Link>
        </div>
      </div>
    </>
  );
}
