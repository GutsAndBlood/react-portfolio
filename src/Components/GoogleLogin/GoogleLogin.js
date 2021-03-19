import React from 'react'
import {GoogleLogin} from 'react-google-login'

const LoginByGoogle = () => {


const responseGoogle = (response) => {
    console.log(response);
  }

    return(
        <div>
            <GoogleLogin
            clientId="996402377915-tjfll1oulvn89142gcrjc2ffiad5onm2.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}/>
        </div>
    )
}
export default LoginByGoogle