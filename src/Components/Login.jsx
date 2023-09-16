import React from "react";

export default function Login() {
  return (
    <>
    {/* header */}
    <div className="container pt-3">
      <div className="row justify-content-center">
        <div className="col col-12">
          <h3 className="text-center" style={{color:'#5c0431',fontSize:'2rem'}}>Login</h3>
        </div>
      </div>
    </div>



    {/* form */}
      <form className="container mt-5 pt-5">
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-4 ">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mb-3 col-2 mt-5">
            <button className="btn btn-success w-100">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}
