import React from 'react';
import {useHistory} from 'react-router-dom'
import ErrorLogo from '../../Images/Error.svg'
import './Error.css'


const Error = () => {

    const history = useHistory()

    return (
        <seccion className='mainDivError'>
            <div>
                <img src={ErrorLogo} alt="error logo"></img>
                <h2>Page not found!</h2>
                <button onClick={() => history.push('/react-portfolio/')} >Go To HomePage</button>
            </div>         
        </seccion>
        
    );
}

export default Error;