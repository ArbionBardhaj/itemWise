import React from 'react'

function Header() {
  return (
    <div className='--pad header'>
      <div className='--flex-end '>
        <h3>
          <span className='--fw-thin'>Welcome,</span>
          <span className='--color-danger'>Arbion</span>
        </h3>
        <button className='--btn --btn-danger --mx' >Logout</button>

      </div>
      <hr />
    </div>
  )
}

export default Header
