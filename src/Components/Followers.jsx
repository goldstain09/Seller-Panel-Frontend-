import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifySellerStart } from "../Redux/Actions";
import Loading from "./Loading";
import Error from "./Error";
import "./SCSS/Followers.scss";

export default function Followers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [followers, setFollowers] = useState([]);
  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  const verifySellerResponseLoading = useSelector(
    (state) => state.verifySellerResponseLoading
  );
  const verifySellerResponseError = useSelector(
    (state) => state.verifySellerResponseError
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

  if (verifySellerResponseLoading) {
    return (
      <>
        <div className="container pt-3   mnvbarrr">
          <div className="row justify-content-center">
            <div className="col col-12">
              <h3 className="text-center">Followers</h3>
            </div>
          </div>
        </div>
        <Loading />
      </>
    );
  } else if (verifySellerResponseError !== "") {
    return (
      <>
        <Error errorMessage={verifySellerResponseError} />
      </>
    );
  }
  return (
    <>
      {/* header */}
      <div className="container pt-3   mnvbarrr">
        <Link
          to={"/sellerpanel"}
          className="btn btn-outline-dark"
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            border: "none",
            fontSize: "1.4rem",
            zIndex: "1",
          }}
        >
          <i className="bi bi-box-arrow-left"></i>{" "}
        </Link>
        <div className="row justify-content-center">
          <div className="col col-12">
            <h3 className="text-center">Followers</h3>
          </div>
        </div>
      </div>

      <div className="container followers">
        <div className="row d-flex">
          {followers.length > 0 && <h4 className="h4">Users List</h4>}
          {followers.length > 0 ? (
            followers.map((item, index) => (
              <div className="col col-12 col-sm-12 " key={index}>
                <h1 className="h1">{`${index + 1}*  ${item.userName}`}</h1>
              </div>
            ))
          ) : (
            <>
              <div className="noFollowers">
                <div>
                  <h2 className="h2">No Followers</h2>
                  <Link to={"/sellerpanel"} className="btn btn-primary">
                    Return to Dashboard
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
