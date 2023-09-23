import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );

  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("ownerName")) {
    } else {
      navigate("/sellerpanel");
    }
  }, [verifySellerResponse]);
  //   --------------------------

  const initialProductData = {
    sellerId: verifySellerResponse.id,
    shopName: verifySellerResponse.shopName,
    productTitle: "",
    productPrice: 0,
    productCategory: "",
    productImages: [""],
    productStock: 0,
    productDescription: "",
    productRating: 0,
  };

  const [productData, setProductData] = useState(initialProductData);
  const {
    shopName,
    productTitle,
    productPrice,
    productCategory,
    productImages,
    productStock,
    productDescription,
    productRating,
  } = productData;

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
              Add Products to Your Shop!
            </h3>
          </div>
        </div>
      </div>

      {/* form */}
      <form className="container mt-5">
        <div className="row d-flex">
          <div className="mb-3 col-4 ">
            <input
              type="text"
              value={shopName}
              readOnly
              className="form-control"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Product's Title"
            />
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Product's Price"
            />
          </div>
        </div>
      </form>
    </>
  );
}
