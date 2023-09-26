import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProductStart, editProductStart } from "../Redux/Actions";

export default function EditProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const verifySellerResponse = useSelector(
    (state) => state.verifySellerResponse
  );
  const editProductResponse = useSelector((state) => state.editProductResponse);
  const editProductError = useSelector((state) => state.editProductError);
  const deleteProductResponse = useSelector((state) => state.deleteProductResponse);
  const deleteProductError = useSelector((state) => state.deleteProductError);

  useEffect(() => {
    if (editProductResponse.hasOwnProperty("productUpdated")) {
      if (editProductResponse.productUpdated) {
        alert("Your Product is Updated Successfully");
        setInterval(() => {
          navigate("/sellerpanel");
          window.location.reload();
        }, 30);
        clearInterval();
      }
    }
  }, [editProductResponse]);
  useEffect(() => {
    if (deleteProductResponse.hasOwnProperty("productDeleted")) {
      if (deleteProductResponse.productDeleted) {
        alert("Your Product is Deleted Successfully");
        setInterval(() => {
          navigate("/sellerpanel");
          window.location.reload();
        }, 30);
        clearInterval();
      }
    }
  }, [deleteProductResponse]);

  const [productforEdit, setProductForEdit] = useState({});
  const [imagesLink, setImagesLink] = useState([""]);
  const [removeBtn, setRemoveBtn] = useState(true);

  useEffect(() => {
    if (verifySellerResponse.hasOwnProperty("products")) {
      //finding product that will be editing
      const editingProduct = verifySellerResponse.products.find(
        (item) => item._id === params.id
      );
      //   console.log(editingProduct);
      setProductForEdit(editingProduct);
      setImagesLink(editingProduct.productImages);
    } else {
      navigate("/sellerpanel");
    }
  }, [params.id, verifySellerResponse]);

  //errors
  const [emptyProductTitle, setEmptyProductTitle] = useState(false);
  const [ProductPriceShouldBeNumeric, setProductPriceShouldBeNumeric] =
    useState(false);
  const [ProductRatingShouldBeNumeric, setProductRatingShouldBeNumeric] =
    useState(false);
  const [
    ProductDescriptionShouldBeMin100Letter,
    setProductDescriptionShouldBeMin100Letter,
  ] = useState(false);
  const [ProductStockShouldBeNumeric, setProductStockShouldBeNumeric] =
    useState(false);
  const [youHaveToEnterMinimum1img, setyouHaveToEnterMinimum1img] =
    useState(false);
  const [linksAreNotValid, setlinksAreNotValid] = useState(false);

  const update = (e) => {
    e.preventDefault();
    if (productforEdit.productTitle !== "") {
      if (
        productforEdit.productPrice !== "" &&
        /^\d*$/.test(productforEdit.productPrice)
      ) {
        if (
          productforEdit.productRating <= 5 &&
          /^\d*\.?\d*$/.test(productforEdit.productRating) &&
          productforEdit.productRating > 0
        ) {
          if (productforEdit.productDescription.length > 200) {
            if (
              productforEdit.productStock !== "" &&
              /^\d*$/.test(productforEdit.productStock)
            ) {
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
                  // -----------------------------------
                  const sellerToken = JSON.parse(
                    localStorage.getItem("sellerToken")
                  );
                  const final_Data = {
                    updatedProduct: {
                      ...productforEdit,
                    },
                    sellerAuthInfo: {
                      sellerToken: sellerToken,
                      sellerId: productforEdit.sellerId,
                    },
                  };
                  dispatch(editProductStart(final_Data));
                } else {
                  setlinksAreNotValid(true);
                }
              } else {
                setyouHaveToEnterMinimum1img(true);
              }
            } else {
              setProductStockShouldBeNumeric(true);
            }
          } else {
            setProductDescriptionShouldBeMin100Letter(true);
          }
        } else {
          setProductRatingShouldBeNumeric(true);
        }
      } else {
        setProductPriceShouldBeNumeric(true);
      }
    } else {
      setEmptyProductTitle(true);
    }
  };

  const deleteF = (e) => {
    e.preventDefault();
    const sellerToken = JSON.parse(
        localStorage.getItem("sellerToken")
      );
    dispatch(
      deleteProductStart({
        id: params.id,
        sellerAuthInfo: {
          sellerToken: sellerToken,
          sellerId: productforEdit.sellerId,
        },
      })
    );
  };

  if (editProductError !== "") {
    setInterval(() => {
      navigate("/sellerPanel");
      window.location.reload();
    }, 4000);
    clearInterval();
    return (
      <>
        <h1>{editProductError} Redirecting to Your Panel in 4 seconds</h1>
      </>
    );
  }
  if (deleteProductError !== "") {
    setInterval(() => {
      navigate("/sellerPanel");
      window.location.reload();
    }, 4000);
    clearInterval();
    return (
      <>
        <h1>{deleteProductError} Redirecting to Your Panel in 4 seconds</h1>
      </>
    );
  }
  return (
    <>
      <div
        className="note container-fluid mt-2 mb-4 border-top border-bottom w-50"
        id="note"
      >
        <div className="row d-flex">
          <div className="col-11">
            <h2 className="text-danger">Note</h2>
          </div>
          <div className="col-1">
            <button
              onClick={() => {
                document.getElementById("note").remove();
              }}
              style={{ border: "none" }}
              className="btn btn-outline-dark"
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
        <p className="text-secondary">
          You cannot change your product's category, but if you want then delete
          this product and add new one...
        </p>
        <p className="text-secondary">
          You can only change your product's Title, price, ratings, images,
          stock, and description
        </p>
      </div>
      {/* header */}
      <div className="container pt-5 mt-5">
        <div className="row justify-content-center ">
          <div className="col col-12">
            <h3
              className="text-center"
              style={{ color: "#5c0431", fontSize: "2rem" }}
            >
              Edit or Delete Your Product!
            </h3>
          </div>
        </div>
      </div>

      <form className="container mt-5" onSubmit={update}>
        <div className="row d-flex">
          <div className="mb-3 col-4 ">
            <h6 className="card-title">Title</h6>
            <input
              type="text"
              className="form-control"
              name="productTitle"
              placeholder="Enter Your Product's Title"
              value={productforEdit.productTitle}
              onChange={(e) => {
                setProductForEdit({
                  ...productforEdit,
                  productTitle: e.target.value,
                });
                setEmptyProductTitle(false);
              }}
            />
            {emptyProductTitle && (
              <p className="text-danger">Product's title Cannot be Empty</p>
            )}
          </div>
          <div className="mb-3 col-4 ">
            <h6 className="card-title">Price</h6>
            <input
              type="text"
              className="form-control"
              name="productPrice"
              placeholder="Enter Your Product's Price"
              value={productforEdit.productPrice}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  setProductForEdit({
                    ...productforEdit,
                    productPrice: e.target.value,
                  });
                }
                setProductPriceShouldBeNumeric(false);
              }}
            />
            {ProductPriceShouldBeNumeric && (
              <p className="text-danger">
                Product's Price Can only be Numeric Value
              </p>
            )}
          </div>
          <div className="mb-3 col-4 ">
            <h6 className="card-title">Ratings</h6>
            <input
              type="text"
              className="form-control"
              name="productRating"
              placeholder="Enter Your Product's Rating"
              value={productforEdit.productRating}
              onChange={(e) => {
                if (/^\d*\.?\d*$/.test(e.target.value)) {
                  setProductForEdit({
                    ...productforEdit,
                    productRating: e.target.value,
                  });
                }
                setProductRatingShouldBeNumeric(false);
              }}
            />
            {ProductRatingShouldBeNumeric && (
              <p className="text-danger">
                {"Product's Rating Can only be Numeric Value {0-5}"}
              </p>
            )}
          </div>
        </div>
        <div className="row d-flex">
          <div className="mb-3 col-4 ">
            <h6 className="card-title">Description</h6>
            <textarea
              type="text"
              rows={5}
              className="form-control"
              name="productDescription"
              placeholder="Enter Your Product's Description"
              style={{ resize: "none" }}
              value={productforEdit.productDescription}
              onChange={(e) => {
                setProductForEdit({
                  ...productforEdit,
                  productDescription: e.target.value,
                });
                setProductDescriptionShouldBeMin100Letter(false);
              }}
            ></textarea>
            {ProductDescriptionShouldBeMin100Letter && (
              <p className="text-danger">
                {"Product's Description Should be minimum 50-70 words"}
              </p>
            )}
          </div>
          <div className="mb-3 col-4 ">
            <h6 className="card-title">Stock</h6>
            <input
              type="text"
              className="form-control"
              name="productStock"
              placeholder="Enter Your Product's Stock"
              value={productforEdit.productStock}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  setProductForEdit({
                    ...productforEdit,
                    productStock: e.target.value,
                  });
                }
                setProductStockShouldBeNumeric(false);
              }}
            />
            {ProductStockShouldBeNumeric && (
              <p className="text-danger">
                {"Product's Stock Should be Numeric"}
              </p>
            )}
          </div>
          <div className="mb-3 col-4 ">
            {imagesLink.map((item, index) => (
              <div key={item + index}>
                <h6 className="h6 text-secondary">{`Image ${index + 1}`}</h6>
                <input
                  type="text"
                  value={item}
                  className="form-control"
                  name="productImages"
                  placeholder="Enter Your Product's Images Links"
                  onChange={(e) => {
                    const values = [...imagesLink];
                    values[index] = e.target.value;
                    setImagesLink(values);
                    setProductForEdit({
                      ...productforEdit,
                      productImages: values,
                    });
                    setyouHaveToEnterMinimum1img(false);
                    setlinksAreNotValid(false);
                  }}
                />
                {youHaveToEnterMinimum1img && (
                  <p className="text-danger">Minimum 1 images is Compulsory</p>
                )}
              </div>
            ))}
            {linksAreNotValid && (
              <p className="text-danger">Images Links are not Valid</p>
            )}
            {removeBtn && (
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
                        setRemoveBtn(false);
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

        <div className="row d-flex justify-content-center my-5 py-5">
          <div className="col-3">
            <button onClick={deleteF} className="w-100 btn btn-danger">
              Delete
            </button>
          </div>
          <div className="col-3">
            <button type="submit" className="w-100 btn btn-success">
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
