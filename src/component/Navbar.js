import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingleCard";

export default function Navbar(props) {
  const [Categories, setCategories] = useState("Categories");
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-dark`}>
        <div className="container-fluid">
          <h3 className={`navbar-brand text-light`}>Shopping Mall</h3>
          <button
            style={{ color: "red" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">⬇️</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link
                  className={`nav-link text-light`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <div class="dropdown">
                <button
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={`btn btn-sm dropdown-toggle my-1 text-light`}
                >
                  {Categories}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link
                      className={`dropdown-item text-dark`}
                      to="/men"
                      onClick={() => {
                        setCategories("Men's clothing");
                      }}
                    >
                      Men's clothing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item text-dark`}
                      to="/women"
                      onClick={() => {
                        setCategories("Women's clothing");
                      }}
                    >
                      Women's clothing
                    </Link>
                    <li>
                      <Link
                        className={`dropdown-item text-dark`}
                        to="/jewelery"
                        onClick={() => {
                          setCategories("Jewelery");
                        }}
                      >
                        Jewelery
                      </Link>
                    </li>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item text-dark`}
                      to="/electronics"
                      onClick={() => {
                        setCategories("Electronics");
                      }}
                    >
                      Electronics
                    </Link>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <Link
                  className={`nav-link text-light`}
                  aria-current="page"
                  to="/addProduct"
                >
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-light`} to="/">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-light`} to="/about">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
