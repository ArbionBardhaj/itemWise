import React from "react";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <div className="dashboard-btn">
          <button className="btn-dashboard">Dashboard</button>
        </div>
        <div className="auth-btn">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
      <div className="body">
        <h1 className="main-title">Optimize Your Business with ItemWise!</h1>
        <p>
          Say goodbye to inventory headaches! Introducing ItemWise the
          ultimate solution for seamless inventory management. Real-time
          tracking, barcode scanning, and custom reports at your fingertips.
          Boost productivity and make informed decisions effortlessly. Try it
          FREE today!
        </p>
        <button>Free trial</button>
      </div>
    </div>
  );
};

export default Home;
