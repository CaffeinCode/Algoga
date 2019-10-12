import React from 'react';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}
export class GLogin extends React.Component<any, any> {
  render(): JSX.Element {
    return (
      <div>
      <GoogleLogin
        clientId="789856856521-q704e307uhpstngn3c1cqju3o4h0eomk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </div>
    );
  }
}
export default GLogin;