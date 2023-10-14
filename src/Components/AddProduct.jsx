import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProductStart } from "../Redux/Actions";
import Loading from "./Loading";

export default function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  const addProductResponse = useSelector((state) => state.addProductResponse);
  const addProductResponseLoading = useSelector(
    (state) => state.addProductResponseLoading
  );
  const addproductError = useSelector((state) => state.addproductError);

  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("ownerName")) {
    } else {
      navigate("/sellerpanel");
    }
  }, [verifySellerResponse]);

  useEffect(() => {
    if (addProductResponse.hasOwnProperty("itemSavedSuccessfully")) {
      if (addProductResponse.itemSavedSuccessfully) {
        alert("Your Product is added Successfully");
        setInterval(() => {
          navigate("/sellerpanel");
          window.location.reload();
        }, 30);
        clearInterval();
      }
    }
  }, [addProductResponse]);
  //   --------------------------

  const initialProductData = {
    sellerId: verifySellerResponse.id,
    shopName: verifySellerResponse.shopName,
    productTitle: "",
    productPrice: "",
    productCategory: "",
    productImages: [],
    productStock: "",
    productDescription: "",
    productRating: "",
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

  // errors
  const [emptyProductTitle, setEmptyProductTitle] = useState(false);
  const [emptyProductCategory, setEmptyProductCategory] = useState(false);
  const [youHaveToEnterMinimum1img, setyouHaveToEnterMinimum1img] =
    useState(false);
  const [linksAreNotValid, setlinksAreNotValid] = useState(false);
  const [ProductPriceShouldBeNumeric, setProductPriceShouldBeNumeric] =
    useState(false);
  const [ProductStockShouldBeNumeric, setProductStockShouldBeNumeric] =
    useState(false);
  const [
    ProductDescriptionShouldBeMin100Letter,
    setProductDescriptionShouldBeMin100Letter,
  ] = useState(false);
  const [ProductRatingShouldBeNumeric, setProductRatingShouldBeNumeric] =
    useState(false);
  // const [,set] = useState(false);

  //select -
  const [selectDefault, setSelectDefault] = useState(false);
  //images Links
  const [imagesLink, setImagesLink] = useState(["", ""]);
  const [removebutton, setRemoveButton] = useState(true);
  // category
  const [category, setCategory] = useState("");

  const inputChange = (e) => {
    e.preventDefault();
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (productTitle !== "") {
      if (productPrice !== "" && /^\d*$/.test(productPrice)) {
        if (category !== "") {
          if (productStock !== "" && /^\d*$/.test(productStock)) {
            if (
              productRating <= 5 &&
              /^\d*\.?\d*$/.test(productRating) &&
              productRating > 0
            ) {
              if (productDescription.length > 200) {
                let images = [...imagesLink];
                let resultForEmpty = images.every((item) => item === "");
                if (!resultForEmpty) {
                  //empty values will be out here
                  let onlyValues = images.filter((item) => item !== "");
                  if (
                    onlyValues.length >= 1 &&
                    onlyValues.every((item) =>
                      /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/.test(
                        item
                      )
                    )
                  ) {
                    const sellerToken = JSON.parse(
                      localStorage.getItem("sellerToken")
                    );
                    // sending data
                    const final_Data = {
                      product: {
                        ...productData,
                      },
                      sellerAuthInfo: {
                        sellerToken: sellerToken,
                        sellerId: productData.sellerId,
                      },
                    };
                    // console.log(final_Data);
                    dispatch(addProductStart(final_Data));
                  } else {
                    setlinksAreNotValid(true);
                  }
                } else {
                  setyouHaveToEnterMinimum1img(true);
                }
              } else {
                setProductDescriptionShouldBeMin100Letter(true);
              }
            } else {
              setProductRatingShouldBeNumeric(true);
            }
          } else {
            setProductStockShouldBeNumeric(true);
          }
        } else {
          setEmptyProductCategory(true);
        }
      } else {
        setProductPriceShouldBeNumeric(true);
      }
    } else {
      setEmptyProductTitle(true);
    }
  };

  if (addproductError !== "") {
    setInterval(() => {
      navigate("/sellerPanel");
      window.location.reload();
    }, 4000);
    clearInterval();
    return (
      <>
        <h1>{addproductError} Redirecting to Your Panel in 4 seconds</h1>
      </>
    );
  } else if (addProductResponseLoading) {
    return (
      <>
        <div className="container pt-5 mt-5">
          <div className="row justify-content-center ">
            <div className="col col-12">
              <h3
                className="text-center"
                style={{ color: "#5c0431", fontSize: "2rem" }}
              >
                Adding!
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
      <div className="container pt-5 mt-5">
        <Link
          to={"/sellerpanel"}
          className="btn btn-outline-dark"
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
        >
          Back to Panel
        </Link>
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
              onInput={() => {
                setEmptyProductTitle(false);
              }}
              placeholder="Enter Your Product's Title"
            />
            {emptyProductTitle && (
              <p className="text-danger">Please enter your Product Title</p>
            )}
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="text"
              className="form-control"
              name="productPrice"
              value={productPrice}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  setProductData({
                    ...productData,
                    productPrice: e.target.value,
                  });
                }
                setProductPriceShouldBeNumeric(false);
              }}
              placeholder="Enter Your Product's Price"
            />
            {ProductPriceShouldBeNumeric && (
              <p className="text-danger">Price should be a numeric value</p>
            )}
          </div>
        </div>
        <div className="row d-flex">
          <div className="mb-3 col-4 ">
            <select
              onChange={(e) => {
                if (!selectDefault) {
                  const el = document.getElementById("selectCategory");
                  el.remove(0);
                  setSelectDefault(true);
                }
                setCategory(e.target.value);
                setProductData({
                  ...productData,
                  productCategory: e.target.value,
                });
                setEmptyProductCategory(false);
              }}
              type="text"
              id="selectCategory"
              className="form-control"
              placeholder="Enter Your Email Address"
            >
              <option value="default">Select Your Product's Category-</option>
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
            {emptyProductCategory && (
              <p className="text-danger">Please choose any one category</p>
            )}
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="tel"
              className="form-control"
              name="productStock"
              value={productStock}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  setProductData({
                    ...productData,
                    productStock: e.target.value,
                  });
                }
                setProductStockShouldBeNumeric(false);
              }}
              placeholder="Product's Stock (You can change it on Regular Basis)"
            />
            {ProductStockShouldBeNumeric && (
              <p className="text-danger">
                Enter your Product's Stock you have... (only numeric)
              </p>
            )}
          </div>
          <div className="mb-3 col-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Product's Ratings"
              name="productRating"
              value={productRating}
              onChange={(e) => {
                if (/^\d*\.?\d*$/.test(e.target.value)) {
                  setProductData({
                    ...productData,
                    productRating: e.target.value,
                  });
                }
                setProductRatingShouldBeNumeric(false);
              }}
            />
            {ProductRatingShouldBeNumeric && (
              <p className="text-danger">
                {"Enter your Product's Ratings (only numeric {0-5})"}
              </p>
            )}
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
              onInput={() => {
                setProductDescriptionShouldBeMin100Letter(false);
              }}
              placeholder="Product's Description"
              style={{ resize: "none" }}
            ></textarea>
            {ProductDescriptionShouldBeMin100Letter && (
              <p className="text-danger">
                Product's Description Should be Minimum 50-80 words...
              </p>
            )}
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
                  onInput={(e) => {
                    const values = [...imagesLink];
                    values[index] = e.target.value;
                    setImagesLink(values);
                    setProductData({
                      ...productData,
                      productImages: values,
                    });
                    setyouHaveToEnterMinimum1img(false);
                    setlinksAreNotValid(false);
                  }}
                />
              </div>
            ))}
            {youHaveToEnterMinimum1img && (
              <p className="text-danger">You have to enter minimum 1 image</p>
            )}
            {linksAreNotValid && (
              <p className="text-danger">Links are not Valid...</p>
            )}

            {removebutton && (
              <button
                id="addmore"
                className="btn btn-outline-secondary mt-2"
                onClick={(event) => {
                  event.preventDefault();

                  let values = [...imagesLink];
                  let empty = values.every((item) => item !== "");
                  let length = values.length;
                  if (empty) {
                    if (length < 5) {
                      setImagesLink([...imagesLink, ""]);
                      if (length === 4) {
                        setRemoveButton(false);
                      }
                    }
                  }
                }}
              >
                Add more...
              </button>
            )}
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
