import React from 'react';

import NavBar from './Navbar';

const Header = () =>{
  return(
  <div className='bg-gray-200'>  
    <h1>
      <img className='h-60 py-4 mx-auto' src="./logo.png" alt="logo"/>
    </h1>
    <NavBar/>
  </div>
  );
}

export default Header;