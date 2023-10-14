import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSellerStart } from "../Redux/Actions";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function Signup({ setShowLogin }) {
  const navigate = useNavigate();
  const createSellerResponse = useSelector(
    (state) => state.createSellerResponse
  );
  const createSellerResponseLoading = useSelector(
    (state) => state.createSellerResponseLoading
  );
  // console.log(createSellerResponse);
  useEffect(() => {
    if (createSellerResponse) {
      if (createSellerResponse.emailAlreadyinUse) {
        setAlreadyUsedEmailError(true);
      } else if (createSellerResponse.userCreated) {
        alert("Congratulations! Your Seller Account is Ready...");
        setPassword1("");
        setSignupData(initialSignup);
        setInterval(() => {
          navigate("/sellerpanel");
          window.location.reload();
        }, 30);
        clearInterval();
      }
    }
  }, [createSellerResponse]);

  const dispatch = useDispatch();
  const initialSignup = {
    ownerName: "",
    shopName: "",
    sellerEmail: "",
    password: "",
  };

  const [signupData, setSignupData] = useState(initialSignup);
  const { ownerName, shopName, sellerEmail, password } = signupData;

  //for first password to check confirm passwrd
  const [password1, setPassword1] = useState("");

  //errors
  const [emptyOwnerNameError, setEmptyOwnerNameError] = useState(false);
  const [emptyShopNameError, setEmptyShopNameError] = useState(false);
  const [emptyEmailError, setEmptyEmailError] = useState(false);
  const [emptyPasswordError, setEmptyPasswordError] = useState(false);
  const [pswrdDosntMatching, setPswrdDoesntMatching] = useState(false);
  // email is already in use error
  const [alreadyUsedEmailError, setAlreadyUsedEmailError] = useState(false);

  const inputChange = (e) => {
    e.preventDefault();

    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };
  const SignUp = (e) => {
    e.preventDefault();

    if (ownerName.length > 0) {
      if (shopName.length > 0) {
        if (
          sellerEmail.length > 0 &&
          sellerEmail.includes(".") &&
          sellerEmail.includes("@")
        ) {
          if (password1.length > 8 || password1.length === 8) {
            if (password1 === password) {
              // ---------
              dispatch(createSellerStart(signupData));
            } else {
              setPswrdDoesntMatching(true);
            }
          } else {
            setEmptyPasswordError(true);
          }
        } else {
          setEmptyEmailError(true);
        }
      } else {
        setEmptyShopNameError(true);
      }
    } else {
      setEmptyOwnerNameError(true);
    }
  };

  if (createSellerResponseLoading) {
    return (
      <>
        <div className="container pt-3">
          <div className="row justify-content-center">
            <div className="col col-12">
              <h3
                className="text-center"
                style={{ color: "#5c0431", fontSize: "2rem" }}
              >
                Sign Up
              </h3>
            </div>
          </div>
        </div>
        <Loading />
      </>
    );
  }
  return (
    <>
      {/* header */}
      <div className="container pt-3">
        <Link
          to={"/"}
          className="btn btn-outline-dark"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          Back to Home
        </Link>
        <div className="row justify-content-center">
          <div className="col col-12">
            <h3
              className="text-center"
              style={{ color: "#5c0431", fontSize: "2rem" }}
            >
              Sign Up
            </h3>
          </div>
        </div>
      </div>

      {/* form */}
      <form className="container mt-5" onSubmit={SignUp}>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="text"
              value={ownerName}
              onChange={inputChange}
              onInput={() => {
                setEmptyOwnerNameError(false);
              }}
              name="ownerName"
              className="form-control"
              placeholder="Enter Shop's Owner Name"
            />
            {emptyOwnerNameError && (
              <p className="text-danger">Please enter your Owner's Name</p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="text"
              value={shopName}
              onChange={inputChange}
              onInput={() => {
                setEmptyShopNameError(false);
              }}
              name="shopName"
              className="form-control"
              placeholder="Enter Shop Name"
            />
            {emptyShopNameError && (
              <p className="text-danger">Please enter your Shop's Name</p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="email"
              value={sellerEmail}
              onChange={inputChange}
              onInput={() => {
                setEmptyEmailError(false);
                setAlreadyUsedEmailError(false);
              }}
              name="sellerEmail"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
            {emptyEmailError && (
              <p className="text-danger">Please enter a Valid Email Address</p>
            )}
            {alreadyUsedEmailError && (
              <p className="text-danger">
                Email is already in use, if it's you Please Login or change the
                email
              </p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              value={password1}
              type="password"
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
              onInput={() => {
                setEmptyPasswordError(false);
              }}
              className="form-control"
              placeholder="Enter Your Password"
            />
            {emptyPasswordError && (
              <p className="text-danger">
                Password Should have minimum 8 letters
              </p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="password"
              value={password}
              onChange={inputChange}
              onInput={() => {
                setPswrdDoesntMatching(false);
              }}
              name="password"
              className="form-control"
              placeholder="Confirm Your Password"
            />
            {pswrdDosntMatching && (
              <p className="text-danger">
                Password are Not matching, Please enter a password you entered
                first
              </p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-2 mt-5">
            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div className="container mt-5 pt-5" id="login__">
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <p className="text-secondary">
              Already have account?{" "}
              <button
                onClick={() => {
                  setShowLogin(true);
                  document.getElementById("login__").style.display = "none";
                }}
                className="btn btn-outline-primary"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// try {
//   return <div>Signup</div>;
// } catch (error) {
//   return <>error</>;
// }
