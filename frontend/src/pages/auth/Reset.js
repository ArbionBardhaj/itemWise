import React from "react";
import styles from "./auth.module.scss";
import "./forgotPassword.scss";
import Card from "../../components/card/Card";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../../services/authService";
import { toast } from "react-toastify";

const initialState = {
  password: "",
  password2: "",
};
function Reset() {
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;

  const {resetToken} = useParams()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async(e)=>{
    e.preventDefault()
    if (password.length < 8) {
      throw new Error("You need to enter a minimum of 8 characters");
    }
    if(password !== password2 ){
      return toast.error("Passwords do not match")

    }
    const userData = {
      password,
      password2
    }
    try {
      const data = await resetPassword(userData, resetToken)
      toast.success(data.message)
      
    } catch (error) {
      console.log(error.message)
    }
}
  return (
    <div>
      <div className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Forgot Password</h2>text
            <form onSubmit={reset}>
              <input
                type="password"
                required
                placeholder="New Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <input
                type="password"
                required
                placeholder="Confirm New Password"
                name="password2"
                value={password2}
                onChange={handleInputChange}
              />

              <button type="submit" className="btn">
                Reset
              </button>
            </form>
          </div>
          <div className={styles.links}>
            <Link to="/" className="link1">
              - Home
            </Link>
            <Link to="/Login" className="link2">
              - Login
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Reset;
