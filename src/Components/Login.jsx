import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSellerStart } from "../Redux/Actions";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
// abcd@gmail.com
  const loginSellerResponse = useSelector((state) => state.loginSellerResponse);
  useEffect(()=>{
    if(loginSellerResponse.hasOwnProperty('loginSuccess')){
      switch (loginSellerResponse.loginSuccess) {
        case true:
          alert('Login SuccessFully...');
          setLoginData(initialLoginData);
          setInterval(() => {
            navigate('/sellerpanel');
            window.location.reload();
          }, 30);
          clearInterval();
          break;
        case false:
          setEmailORpasswordIsIncorrect(true);
          break;
      }
    }
  },[loginSellerResponse]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialLoginData = {
    sellerEmail: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);
  const {sellerEmail, password} = loginData;

  //errors
  const [emptyEmailError,setEmptyEmailError] = useState(false);
  const [emptyPasswordError,setEmptyPasswordError] = useState(false);
  // email or password is incorrect error
  const [emailORpasswordIsIncorrect,setEmailORpasswordIsIncorrect] = useState(false);

  const inputChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault();
    if(sellerEmail.length > 0 && sellerEmail.includes('.') && sellerEmail.includes('@')){
      if(password.length>8 || password.length === 8){
        // /--------
        dispatch(loginSellerStart(loginData));
      }else{
        setEmptyPasswordError(true);
      }
    }else{
      setEmptyEmailError(true);
    }
  }

  return (
    <>
      {/* header */}
      <div className="container pt-5 mt-5">
      <Link to={'/'} className="btn btn-outline-dark" style={{position:"absolute",top:'1rem',left:'1rem'}}>Back to Home</Link>
        <div className="row justify-content-center ">
          <div className="col col-12">
            <h3
              className="text-center"
              style={{ color: "#5c0431", fontSize: "2rem" }}
            >
              Login
            </h3>
          </div>
        </div>
      </div>

      {/* form */}
      <form className="container  pt-5" onSubmit={login}>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="email"
              name="sellerEmail"
              value={sellerEmail}
              onChange={inputChange}
              onInput={()=>{
                setEmptyEmailError(false);
              }}
              className="form-control"
              placeholder="Enter Your Email Address"
            />{
              emptyEmailError && <p className="text-danger">Please Enter Your Email</p>
            }
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="password"
              name="password"
              value={password}
              onChange={inputChange}
              onInput={()=>{
                setEmptyPasswordError(false);
                setEmailORpasswordIsIncorrect(false);
              }}
              className="form-control"
              placeholder="Enter Your Password"
            />{
              emptyPasswordError && <p className="text-danger">Please Enter a Correct Password</p>
            }
            {
              emailORpasswordIsIncorrect && <p className="text-danger">Email or Password is Incorrect</p>
            }
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-2 mt-5">
            <button type="submit" className="btn btn-success w-100">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}
