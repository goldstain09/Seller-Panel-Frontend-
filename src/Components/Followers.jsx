import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifySellerStart } from "../Redux/Actions";

export default function Followers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [followers, setFollowers] = useState([]);
  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );

  useEffect(() => {
    const sellerToken = JSON.parse(localStorage.getItem("sellerToken"));
    if (sellerToken) {
      dispatch(verifySellerStart(sellerToken));
    } else {
      navigate("/sellerpanel");
    }
  }, []);
  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("verificationSuccess")) {
      if (verifySellerResponse.verificationSuccess) {
        setFollowers(verifySellerResponse.followers);
      } else {
        navigate("/sellerpanel");
      }
    }
  }, [verifySellerResponse]);

  return (
    <>
      {/* header */}
      <div className="container pt-3">
        <Link
          to={"/sellerpanel"}
          className="btn btn-outline-dark"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          Back to Panel
        </Link>
        <div className="row justify-content-center">
          <div className="col col-12">
            <h3
              className="text-center"
              style={{ color: "#5c0431", fontSize: "2rem" }}
            >
              Your Followers
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
            <h4>Users List</h4>
          {followers.length > 0 ? (
            followers.map((item, index) => (
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h1>{item.userName}</h1>
              </div>
            ))
          ) : (
            <>
              <h1>No Followers</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}
