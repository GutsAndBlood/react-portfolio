import React from 'react';
import {useHistory} from 'react-router-dom'
import SuccessLogo from '../../Images/mailbox.svg'
import './Success.css'


const Success = () => {

    const history = useHistory()

    return (
        <seccion className='mainDivSuccess'>
            <div>
                <img height='350' src={SuccessLogo} alt="succes logo"></img>
                <h2>Message received. Thanks</h2>
                <p>I will in touch with you shortly</p>
                <button onClick={() => history.push('/react-portfolio/')} >Back To HomePage</button>
            </div>         
        </seccion>
        
    );
}

export default Success;