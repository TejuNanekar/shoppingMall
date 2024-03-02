import React from "react";
// import PropTypes from "prop-types";
import "../assets/css/SingleCard.css";
const SingleCard = (props) => {
  return (
    <>
      <div className="d-flex container d-flex justify-content-evenly my-4">
        <div className="card" style={{ width: "22rem" }}>
          <img
            style={{ height: "250px" }}
            src={props.urlimg}
            className=" card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.disc}...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price : {props.price}</li>
            <li className="list-group-item">Category : {props.category}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
