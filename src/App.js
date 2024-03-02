import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Card from "./component/Card";
import AllProduct from "./component/AllProduct";
import Footer from "./component/Footer";
import AddProduct from "./component/AddProduct";
import AboutPage from "./component/AboutPage";
import ContactUsPage from "./component/ContactUsPage";
function App() {
  const [Mode, setMode] = useState("Dark Mode");
  const change = () => {
    if (Mode === "Dark Mode") {
      document.body.style.backgroundColor = "blue";
      setMode("light Mode");
      <Login Mode={Mode} />;
    } else {
      document.body.style.backgroundColor = "white";
      setMode("Dark Mode");
      <Login Mode={Mode} />;
    }
  };
  return (
    <>
      <Router>
        <Navbar Mode={Mode} change={change} />
        <Routes>
          <Route exact path="/" element={<AllProduct />} />
          <Route exact path="/home" element={<AllProduct />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/aboutpage" element={<AboutPage />} />
          <Route exact path="/contactuspage" element={<ContactUsPage />} />

          <Route
            exact
            path="/men"
            element={
              <Card
                category="men's clothing"
                key="men's clothing"
                head="Men's clothing"
              />
            }
          />
          <Route
            exact
            path="/women"
            element={
              <Card
                category="women's clothing"
                key="women's clothing"
                head="Women's clothing"
              />
            }
          />
          <Route
            exact
            path="/electronics"
            element={
              <Card
                category="electronics"
                key="electronics"
                head="Electronics"
              />
            }
          />

          <Route
            exact
            path="/jewelery"
            element={
              <Card category="jewelery" key="jewelery" head="Jewelery" />
            }
          />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Toaster />

        <Footer />
      </Router>
    </>
  );
}

export default App;
