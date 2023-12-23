import React from 'react'
import { logout } from '../../services/authService'
import { selectName ,SET_LOGIN } from '../../redux/features/auth/authSlice'
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from 'react-router';

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = useSelector(selectName)

  const logOut = ()=>{
      logout();
      dispatch(SET_LOGIN(false))
      navigate("/login")
      
  }

  return (
    <div className='--pad header'>
      <div className='--flex-end '>
        <h3>
          <span className='--fw-thin'>Welcome,</span>
          <span className='--color-danger'>{name}</span>
        </h3>
        <button className='--btn --btn-danger --mx'onClick={logOut} >Logout</button>

      </div>
      <hr />
    </div>
  )
}

export default Header
