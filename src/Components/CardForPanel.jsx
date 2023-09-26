import React from "react";
import { Link } from "react-router-dom";

export default function CardForPanel({ item}) {
  return (
    <>
      <div
        className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3"
        style={{ border: "none" }}
      >
        <div className="card-body" style={{ border: "1px solid grey" }}>
          <img src="" alt="sads" className="w-75 card-top-image" />
          <h1 className="card-title">{item.productTitle}</h1>
          <Link className="btn col-12 btn-warning" to={`/sellerpanel/editproduct/${item._id}`}>Edit</Link>
        </div>
      </div>
    </>
  );
}
