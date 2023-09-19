import React, { useState } from "react";

export default function Login() {
  const initialLoginData = {
    userEmail: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);
  const {userEmail, password} = loginData;

  //errors
  const [emptyEmailError,setEmptyEmailError] = useState(false);
  const [emptyPasswordError,setEmptyPasswordError] = useState(false);

  const inputChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault();
    if(userEmail.length > 0 && userEmail.includes('.') && userEmail.includes('@')){
      if(password.length>8 || password.length === 8){
        // /--------
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
              name="userEmail"
              value={userEmail}
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
              }}
              className="form-control"
              placeholder="Enter Your Password"
            />{
              emptyPasswordError && <p className="text-danger">Please Enter a Correct Password</p>
            }
            {/* {
              emptyEmailError && <p className="text-danger">Email or Password is Incorrect</p>
            } */}
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
