import React, { useState } from "react";
import "./register.scss";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import {useDispatch} from "react-redux"
import { registerUser, validateEmail } from "../../services/authService";
import {SET_LOGIN, SET_NAME} from "../../redux/features/auth/authSlice"
const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async(e) => {
    e.preventDefault();


    if(!name || !email || !password ){
      return toast.error("All fields are required")

    }

    if(password.length < 8 ){
      return toast.error("You need to enter a minimum of 8 characters")

    }
    if(!validateEmail(email)){
      return toast.error("Please enter a valid email")
    }

    if(password !== password2 ){
      return toast.error("Passwords do not match")

    }

    const userData = {
      name, email, password
    }

    setIsLoading(true)
    try {
      const data = await registerUser(userData)
      // console.log(data)
      await dispatch(SET_LOGIN(true))
      await dispatch(SET_NAME(data.name))
      navigate("/dashboard")
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error.message);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={register}>
            <input
              type="text"
              required
              placeholder="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              required
              placeholder="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              required
              placeholder="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              required
              placeholder="repeat password"
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn-primary">
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
