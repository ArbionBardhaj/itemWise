import React from 'react'
import styles from "./auth.module.scss"
import "./forgotPassword.scss"
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
function Reset() {
  return (
    <div>
    <div className={`container ${styles.auth}`}>
   <Card>
       <div className={styles.form}>
    
        <h2>Forgot Password</h2>
        <form>
            <input type="password" required placeholder='New Password' />
            <input type="password" required placeholder='Confirm New Password' />

            <button type='submit' className='btn'>Reset</button>

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

export default Reset
