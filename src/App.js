import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { Toaster } from "react-hot-toast";
import Card from "./component/Card";
import AllProduct from "./component/AllProduct";
import Footer from "./component/Footer";
import AddProduct from "./component/AddProduct";
import AboutPage from "./component/AboutPage";
import Signup from "./component/Signup";
import ContactUsPage from "./component/ContactUsPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
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
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
