import auth0 from '../../lib/auth0';

const callback = async(request, response) =>{
  await auth0.handleCallback(request, response, {redirectTo:'/app'});
}

export default callback;