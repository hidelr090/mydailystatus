import React from 'react';
import Header from '../components/Header';

const Index = ()=>{
  return (
    <div>
      <h1>Home</h1>
      <a href="/api/login" className='py-4 px-2 rounded bg-blue-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white'>Comece Aqui</a>
    </div>
  );
}

export default Index;