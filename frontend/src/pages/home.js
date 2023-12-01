import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="home">
        <nav>
          <button className="nav-btn"><Link className="link" to="/dashboard">Dashboard</Link></button>
        </nav>
        <div className="auth-nav">
          <nav>
            <button className="nav-btn"><Link className="link" to="/login">Login</Link></button>
            <button className="nav-btn"><Link className="link" to="/register">Sign Up</Link></button>
          </nav>
        </div>
      </div>

      <div className="body">
        <h1>Optimize Your Business with ItemWise!</h1>
        <p>
          Say goodbye to inventory headaches! Introducing ItemWise the ultimate
          solution for seamless inventory management. Real-time tracking,
          barcode scanning, and custom reports at your fingertips. Boost
          productivity and make informed decisions effortlessly. Try it FREE
          today!
        </p>
        <button><Link className="f-link" to="/dashboard">Free Trial</Link></button>
 
      </div>
      {/* <div className="image">
          <img className ="hero-img" src={heroImg} alt="img" style={{float: "right"}} />
        </div>  */}
    </div>
  );
};

export default Home;
