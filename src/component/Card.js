import React from "react";
import { useState, useEffect } from "react";
import SingleCard from "./SingleCard";

export default function Card(props) {
  let [intity, setintity] = useState();
  let apiurl = `https://fakestoreapi.com/products/category/${props.category}`;
  let data;
  async function pullapi() {
    const response = await fetch(apiurl);
    const responsedata = await response.json();
    data = responsedata.map((element) => {
      return (
        <div key={element.url} className="col md-4">
          <SingleCard
            title={element.title}
            url={element.url}
            urlimg={element.image}
            disc={
              element.description != null
                ? element.description.slice(0, 60)
                : ""
            }
            price={element.price}
            category={element.category}
          />
        </div>
      );
    });
    setintity(data);
  }

  useEffect(() => {
    pullapi();
  }, []);
  return (
    <>
      <h1 style={{ color: "red", fontFamily: "-moz-initial" }} className="my-4">
        {" "}
        <center>__Top Headline {props.head}__</center>
      </h1>
      <div className="container my-4">
        <div className="row ">{intity}</div>
      </div>
    </>
  );
}
