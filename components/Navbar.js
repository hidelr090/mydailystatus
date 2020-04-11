import React from 'react';

import Link from 'next/link';

const NavLink=({href, children})=>{
  return(
    <Link href={href}>
        <a className='p-2 hover:underline hover:text-blue-800 text-center'>{children}</a>
    </Link>
  );
}

const NavBar=()=>{
  return(
    <div className='bg-gray-500 py-4 text-center'>
      <NavLink href='/Sobre'> 
        Sobre
      </NavLink>
      <NavLink href='/Cadastro'>
        <a>Cadastre-se</a>
      </NavLink>
      <NavLink href='/Login'>
        <a>Entrar</a>
      </NavLink>
    </div>
  );
}

export default NavBar;