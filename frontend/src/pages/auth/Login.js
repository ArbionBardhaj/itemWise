import React from 'react'
import styles from "./auth.module.scss"
import "./login.scss"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
         
             <h2>Login</h2>
             <form>
                 <input type="email" required placeholder='email' />
                 <input type="password" required placeholder='password' />
                 <button type='submit' className='btn'>Login</button>

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
