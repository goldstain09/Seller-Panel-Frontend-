import React from "react";
import { Link } from "react-router-dom";
import "./SCSS/CardForPanel.scss";

export default function CardForPanel({ item }) {
  return (
    <>
      <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3 card">
        <div className="card-body">
          <img
            src={item.productImages[0]}
            alt="Image"
            className="card-top-image"
          />
          <h1 className="card-title">
            {item.productTitle.split(" ").slice(0, 6).join(" ")} ...
          </h1>
          <Link
            className="btn col-6 btn-warning"
            to={`/sellerpanel/editproduct/${item._id}`}
          >
            <i className="bi bi-pencil-square"></i> Edit
          </Link>
          <a
            href={`https://ecommerce-project-yy9l.onrender.com/product/${item._id}`}
            className="btn col-6 btn-outline-primary"
          >
            <i className="bi bi-link"></i> View on website
          </a>
        </div>
      </div>
    </>
  );
}
