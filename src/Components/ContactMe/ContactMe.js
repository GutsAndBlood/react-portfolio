import React from 'react'
import './ContactMe.css'

const ContactMe = () => {

    return( 
        <section>
            <h2>Thanks for taking the time to reach out.</h2>
            <h2>How can I help you?</h2>

            <div className='divForm'>
                    <form className='loginForm'>
                        <label htmlFor="login_field" id='loginLabel1'>Username or email address</label><br/>
                        <input type="text" id="login_field" 
                        /><br/>
    
                        <label htmlFor="password" id='loginLabel2'>Password</label><br/>
                        <input type="password" id="password" 
                        className='passw' />
    
                        <button type="submit"  >Sign in</button>
                    </form>
    
                </div>  
        </section>
    )
}

export default ContactMe