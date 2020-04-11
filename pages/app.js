import React, {useEffect} from 'react';
import auth0 from '../lib/auth0';
import router from 'next/router';

const App = () =>{
  useEffect(()=>{
    if(!props.isAuth){
      router.push('/');
    }
  });
  if(!props.isAuth){
    return null;
  }
  return(
    <h1>APP</h1>
  );
}

export default App;

export async function getServerSideProps({req, res}){
  const session = await auth0.getSession(req);

  if(session){
    return{
      props:{
        isAuth: true,
        user: session.user
      }
    }
  }

  return{
    props: {
      user:{
        isAuth: false,
        name:'Hidel'
      }
    }
  };
}
