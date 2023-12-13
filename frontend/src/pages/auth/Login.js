import React from 'react'
import styles from "./auth.module.scss"
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {  loginUser, validateEmail } from "../../services/authService";
import {SET_LOGIN, SET_NAME} from "../../redux/features/auth/authSlice"


const initialState = {
 
  email: "",
  password: "",
  name:""

};

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState);
  const { email, password} = formData;
  const [isLoading, setIsLoading] = useState(false);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async(e)=>{
      e.preventDefault()

      if( !email || !password ){
        return toast.error("All fields are required")
  
      }
    
      if(password.length < 8 ){
        return toast.error("You need to enter a minimum of 8 characters")
  
      }
      if(!validateEmail(email)){
        return toast.error("Please enter a valid email")
      }

      const userData = {
         email, password
      }
      setIsLoading(true)
      try {
        const data = await loginUser(userData)
        console.log(data)
        await dispatch(SET_LOGIN(true))
        await dispatch(SET_NAME(data.name))
        navigate("/dashboard")
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error.message);
      }
  
  }


  

  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
         
             <h2>Login</h2>
             <form onSubmit={login}>
                 <input type="email" required placeholder='email' value={email} onChange={handleInputChange} />
                 <input type="password" required placeholder='password' onChange={handleInputChange} value={password} />
                 <button type='submit' className='--btn'>Login</button>

             </form>
             <Link to="/forgot" className='link'>Forgot Password</Link>

             <span className={styles.register}>
              <Link to="/" className='link'>Home</Link>
              <p>&nbsp; Don't have an account? &nbsp;</p>
              <Link to="/register" className='link'>Register</Link>
             </span>
            </div>
        </Card>
    </div>
  )
}

export default Login
