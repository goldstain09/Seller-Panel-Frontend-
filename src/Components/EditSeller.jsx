import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSellerStart, loginSellerStart } from "../Redux/Actions";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import "./SCSS/EditSeller.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditSeller() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  const editSellerResponse = useSelector((state) => state.editSellerResponse);
  const editSellerResponseError = useSelector(
    (state) => state.editSellerResponseError
  );
  const editSellerResponseLoading = useSelector(
    (state) => state.editSellerResponseLoading
  );
  useEffect(() => {
    // if(editSellerResponse.res){  // both are usable conditions here and for future i have to see myself what to put there like situation properly
    if (editSellerResponse.hasOwnProperty("updated")) {
      switch (editSellerResponse.updated) {
        case true:
          setEditData(initialEditData);
          toast.success("Info is Updated!", {
            theme: "dark",
            autoClose: 7000,
            position: "top-right",
            draggable: true,
            pauseOnHover: true,
          });
          setInterval(() => {
            navigate("/sellerpanel");
            window.location.reload();
          }, 1000);
          break;
        case false:
          setIncorrectPasswordError(true);
          break;
        case "alreadyUsedEmail":
          setEmailAlreadyInUse(true);
          break;
      }
    }
  }, [editSellerResponse]);

  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("ownerName")) {
    } else {
      navigate("/sellerpanel");
    }
  }, [verifySellerResponse]);

  const { ownerName, sellerEmail, shopName } = verifySellerResponse;
  //initialEditData
  const initialEditData = {
    ownerName: ownerName,
    sellerEmail: sellerEmail,
    shopName: shopName,
    password: "",
  };
  const [editData, setEditData] = useState(initialEditData);

  //errors
  const [emptyOwnerNameError, setEmptyOwnerNameError] = useState(false);
  const [emptyShopNameError, setEmptyShopNameError] = useState(false);
  const [emptySellerEmailError, setEmptySellerEmailError] = useState(false);
  const [emptyPasswordError, setEmptyPasswordError] = useState(false);
  //password is incorrect
  const [incorrectPasswordError, setIncorrectPasswordError] = useState(false);
  // email is already in use error
  const [emailAlreadyInUse, setEmailAlreadyInUse] = useState(false);

  const update = (e) => {
    e.preventDefault();
    if (editData.ownerName.length > 0) {
      if (editData.shopName.length > 0) {
        if (
          editData.sellerEmail.length > 0 &&
          editData.sellerEmail.includes(".") &&
          editData.sellerEmail.includes("@")
        ) {
          if (editData.password.length > 8 || editData.length === 8) {
            //-------
            editData.oldEmail = verifySellerResponse.sellerEmail;
            dispatch(editSellerStart(editData));
          } else {
            setEmptyPasswordError(true);
          }
        } else {
          setEmptySellerEmailError(true);
        }
      } else {
        setEmptyShopNameError(true);
      }
    } else {
      setEmptyOwnerNameError(true);
    }
  };
  const inputChange = (e) => {
    e.preventDefault();
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  if (editSellerResponseLoading) {
    return (
      <>
        <div className="container pt-5 mt-5 mnvbarrr">
          <div className="row justify-content-center ">
            <div className="col col-12">
              <h3 className="text-center">Personal Info!</h3>
            </div>
          </div>
        </div>
        <Loading />
      </>
    );
  } else if (editSellerResponseError !== "") {
    return (
      <>
        <Error errorMessage={editSellerResponseError} />
      </>
    );
  }
  return (
    <>
      {/* header */}
      <div className="container pt-5 mt-5 mnvbarrr">
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
        <div className="row justify-content-center ">
          <div className="col col-12">
            <h3 className="text-center">Personal Info!</h3>
          </div>
        </div>
      </div>

      {/* form */}
      <form className="container  pt-5 editSeller" onSubmit={update}>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="text"
              name="ownerName"
              onChange={inputChange}
              onInput={() => {
                setEmptyOwnerNameError(false);
              }}
              value={editData.ownerName}
              className="form-control"
              placeholder="Enter Your Email Address"
            />
            {emptyOwnerNameError && (
              <p className="text-danger">Please Enter an Owner Name</p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="text"
              name="shopName"
              onChange={inputChange}
              onInput={() => {
                setEmptyShopNameError(false);
              }}
              value={editData.shopName}
              className="form-control"
              placeholder="Enter Your Email Address"
            />
            {emptyShopNameError && (
              <p className="text-danger">Please Enter a Proper Shop Name</p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="email"
              name="sellerEmail"
              onChange={inputChange}
              onInput={() => {
                setEmptySellerEmailError(false);
                setEmailAlreadyInUse(false);
              }}
              value={editData.sellerEmail}
              className="form-control"
              placeholder="Enter Your Email Address"
            />
            {emptySellerEmailError && (
              <p className="text-danger">Please Enter a Valid Email</p>
            )}
            {emailAlreadyInUse && (
              <p className="text-danger">
                Email is Already in use... try another one or don't Change
                previous...
              </p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="password"
              name="password"
              onChange={inputChange}
              onInput={() => {
                setEmptyPasswordError(false);
                setIncorrectPasswordError(false);
              }}
              value={editData.password}
              className="form-control"
              placeholder="Enter Your Password"
            />
            {emptyPasswordError && (
              <p className="text-danger">Please Enter a Correct Password</p>
            )}
            {incorrectPasswordError && (
              <p className="text-danger">Password is Incorrect</p>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-2 mt-5">
            <button type="submit" className="btn btn-success w-100">
              Update
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
