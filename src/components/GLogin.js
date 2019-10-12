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
        clientId=""
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