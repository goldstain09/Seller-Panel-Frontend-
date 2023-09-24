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
    productPrice: '',
    productCategory: "",
    productImages:[],
    productStock: '',
    productDescription: "",
    productRating: '',
  };
  
  const [productData, setProductData] = useState(initialProductData);
  const {
    shopName,
    productTitle,
    productPrice,
    // productCategory,
    // productImages,
    productStock,
    productDescription,
    productRating,
  } = productData;
  
  //select -
  const [selectDefault, setSelectDefault] = useState(false);
  //images Links
  const [imagesLink, setImagesLink] = useState(["", ""]);
  // category 
  const [category, setCategory] = useState('');
  
  const inputChange = (e) => {
    e.preventDefault();
    setProductData({
      ...productData,
      productCategory:category,
      [e.target.name]:e.target.value
    })
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log(productData);
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
              Add Product to Your Shop!
            </h3>
          </div>
        </div>
      </div>

      {/* form */}
      <form className="container mt-5" onSubmit={addProduct}>
        <div className="row d-flex">
          <div className="mb-3 col-4 ">
            <input
              type="text"
              value={shopName}
              readOnly
              className="form-control"
            />
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="text"
              className="form-control"
              name="productTitle"
              value={productTitle}
              onChange={inputChange}
              placeholder="Enter Your Product's Title"
            />
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="text"
              className="form-control"
              name="productPrice"
              value={productPrice}
              onChange={(e)=>{
                if(/^\d*$/.test(e.target.value)){
                  setProductData({
                    ...productData,
                    productPrice:e.target.value
                  });
                }
              }}
              placeholder="Enter Your Product's Price"
            />
          </div>
        </div>
        <div className="row d-flex">
          <div className="mb-3 col-4 ">
            <select
              onClick={() => {
                if (!selectDefault) {
                  const el = document.getElementById("selectCategory");
                  el.remove(0);
                  setSelectDefault(true);
                }
              }}
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
              type="text"
              id="selectCategory"
              className="form-control"
              placeholder="Enter Your Email Address"
            >
              <option value="default">
                Select Your Product's Category-
              </option>
              <option value="Women's Clothing">Women's Clothing</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Jewelleries">Jewelleries</option>
              <option value="Beauty">Beauty</option>
              <option value="Handbags">Handbags</option>
              <option value="Belts">Belts</option>
              <option value="Grooming">Grooming</option>
              <option value="Watches">Watches</option>
              <option value="Kid's Clothing">Kid's Clothing</option>
              <option value="Kid's Toys">Kid's Toys</option>
              <option value="Kid's Accessories">Kid's Accessories</option>
              <option value="Kid's Healthcare">Kid's Healthcare</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Kitchen Appliances">Kitchen Appliances</option>
              <option value="Health Care">Health Care</option>
              <option value="Accessories">Accessories</option>
              <option value="Footwear">Footwear</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="tel"
              className="form-control"
              name="productStock"
              value={productStock}
              onChange={(e)=>{
                if(/^\d*$/.test(e.target.value)){
                  setProductData({
                    ...productData,
                    productStock:e.target.value
                  });
                }
              }}
              placeholder="Product's Stock (You can change it on Regular Basis)"
            />
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Product's Ratings"
              name="productRating"
              value={productRating}
              onChange={(e)=>{
                if(/^\d*$/.test(e.target.value)){
                  setProductData({
                    ...productData,
                    productRating:e.target.value
                  });
                }
              }}
            />
          </div>
        </div>
        <div className="row d-flex">
          <div className="mb-3 col-4 ">
            <textarea
              type="text"
              rows={6}
              className="form-control"
              name="productDescription"
              value={productDescription}
              onChange={inputChange}
              placeholder="Product's Description"
              style={{ resize: "none" }}
            ></textarea>
          </div>
          <div className="mb-3 col-8 ">
            {imagesLink.map((item, index) => (
              <div key={index}>
                <h6 className="h6 mt-3" key={index}>{`Image ${index + 1}`}</h6>
                <input
                  type="text"
                  value={item}
                  className="form-control mt-1 "
                  placeholder="Product's Image Links"
                  onChange={(e) => {
                    const values = [...imagesLink];
                    values[index] = e.target.value;
                    setImagesLink(values);
                    setProductData({
                      ...productData,
                      productImages:values
                    })
                  }}
                />
              </div>
            ))}
            <button
              className="btn btn-outline-secondary mt-2"
              onClick={(event) => {
                event.preventDefault();

                let values = [...imagesLink];
                let empty = values.every((item) => item !== "");
                if (empty) {
                  setImagesLink([...imagesLink, ""]);
                }
              }}
            >
              Add more...
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5 pt-5">
          <div className="col-4">
            <button type="submit">Add Product</button>
          </div>
        </div>
      </form>
    </>
  );
}
