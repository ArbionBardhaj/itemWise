import React from "react";
import "./register.scss";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form>
            <input type="text" required placeholder="name" />
            <input type="email" required placeholder="email" />
            <input type="password" required placeholder="password" />
            <input type="password" required placeholder="repeat password" />
            <button type="submit" className="btn">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <Link to="/" className="link">
              Home
            </Link>
            <p>&nbsp; Already have an account? &nbsp;</p>
            <Link to="/login" className="link">
              Login
            </Link>
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Register;
