import React from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";


const initialState = {
  email: "",
  password: "",
  name: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const login = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        throw new Error("All fields are required");
      }

      if (password.length < 8) {
        throw new Error("You need to enter a minimum of 8 characters");
      }

      if (!validateEmail(email)) {
        throw new Error("Please enter a valid email");
      }

      const userData = { email, password };
      setIsLoading(true);

      const data = await loginUser(userData);
      console.log(data);

      dispatch({ type: SET_LOGIN(), payload: true });
      dispatch({ type: SET_NAME(), payload: data.name });
      

      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={login}>
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
              onChange={handleInputChange }
            />
            <button type="submit" className="--btn" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          <Link to="/forgot" className="link">
            Forgot Password
          </Link>

          <span className={styles.register}>
            <Link to="/" className="link">
              Home
            </Link>
            <p>&nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register" className="link">
              Register
            </Link>
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Login;
