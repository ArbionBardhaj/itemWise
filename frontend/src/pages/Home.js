import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../components/protect/HiddenLink";

const Home = () => {


  
  return (
    <div className="body">
      <div className="overlay-div">
        <h1>ItemWise</h1>
        <p>
          Say goodbye to inventory headaches! Introducing ItemWise the ultimate
          solution for seamless inventory management. Real-time tracking,
          barcode scanning, and custom reports at your fingertips. Boost
          productivity and make informed decisions effortlessly. Try it FREE
          today!
        </p>
        <ShowOnLogout>
          <button className="f-link">
            <Link to="/register" className="register-btn">
              Register
            </Link>
          </button>
        </ShowOnLogout>
      </div>
      <div className="home">
        <nav>
          <ShowOnLogin>
          <button className="dashboard-btn">
              {" "}
              <Link className="link" to="/dashboard">
                Dashboard
              </Link>
            </button>
          </ShowOnLogin>
     
         
        </nav>
        <ShowOnLogout>
          <button className="button">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        </ShowOnLogout>
      </div>
    </div>
  );
};

export default Home;
