import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null,
    discount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("Product details saved Successfully!", productData);

    if (
      (productData.name === "") |
      (productData.price === "") |
      (productData.image === null) |
      (productData.description === "") |
      (productData.discount === "")
    ) {
      toast.error("Please fill all fields");
    } else if (productData.category === "") {
      toast.error("Please Select Category");
    } else {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: "test product",
          price: 13.5,
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",
        }),
      });
      const data = await response.json();
      console.log({ response });
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="container mt-5 py-3 px-5"
        style={{
          width: "850px",
          padding: "0px 50px",
          background: "rgb(234 234 234)",
        }}
      >
        <h2
          className="mb-3"
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Fill Product Details
        </h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required="true"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            placeholder="Product name"
          />
        </div>
        <div className="mb-3">
          <select
            className="form-control"
            id="category"
            required="true"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            <option value="mens">Men's</option>
            <option value="womens">Women's</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="number"
            title="Please enter a valid number"
            className="form-control"
            id="price"
            name="price"
            required="true"
            value={productData.price}
            onChange={handleInputChange}
            placeholder="Product price"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="discount"
            name="discount"
            required="true"
            value={productData.discount}
            onChange={handleInputChange}
            placeholder="Product discount"
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="description"
            name="description"
            required="true"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Product description"
          ></textarea>
        </div>
        <center>
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </center>
      </div>
    </>
  );
};

export default AddProduct;
