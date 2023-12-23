import React from 'react'
import styles from "./auth.module.scss"
import "./forgotPassword.scss"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { validateEmail } from '../../services/authService'
import { forgotPassword } from '../../services/authService'

function Forgot() {
   const [email, setEmail] = useState("");
   const forgot =async(e)=>{
    e.preventDefault()


    if (!email) {
      throw new Error("Please enter an email");
    }

    if (!validateEmail(email)) {
      throw new Error("Please enter a valid email");
    }

    const userData = { email };

    await forgotPassword(userData)
    setEmail("")

   }

  return (
    <div>
         <div className={`container ${styles.auth}`}>
        <Card>
            <div className={styles.form}>
         
             <h2>Forgot Password</h2>
             <form onSubmit={forgot}>
                 <input type="email" required placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
                 <button type='submit' className='btn'>Get Reset Email</button>

             </form>
         </div>
         <div className={styles.links}>
          <Link to="/" className='link1'>- Home</Link>
          <Link to="/Login"className='link2'>- Login</Link>
         </div>

        </Card>
    </div>
      
    </div>
  )
}

export default Forgot
