import React from "react";
import "./SCSS/Error.scss";
import { useNavigate } from "react-router-dom";

export default function Error({ errorMessage }) {
  const navigate = useNavigate();
  return (
    <div className="container-fluid errorr">
      <div align="center" className="msg">
        <h1 align="center"><i className="bi bi-exclamation-triangle-fill"></i> {errorMessage}</h1>
      </div>
      <div className="btns">
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            window.location.reload();
            navigate("/");
          }}
        >
          Go to Home Page
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            window.location.reload();
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
