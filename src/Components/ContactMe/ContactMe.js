import React from 'react'
import {useHistory} from 'react-router-dom'
import './ContactMe.css'
import emailjs from 'emailjs-com'

const ContactMe = () => {

    const history = useHistory()

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_8ahnor2', 'template_wiebdph', e.target, 'user_sUn094p1cG37UTui3FITi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          history.push('/react-portfolio/success')

      }

    return( 
        <section className='contactMeh2'>
            <h2>Thanks for taking the time to reach out.</h2>
            <h2>How can I help you?</h2>

                    <form className='loginForm' onSubmit={sendEmail}>

                        <div className="contactMeLabel">
                            <label htmlFor="login_field" id='loginLabel1'>Your Name</label>
                            <label htmlFor="email" id='loginLabel2'>Email Address</label>
                        </div>
                        
                        <div className="contactMeInput">
                            <input type="text" id="login_field" name="name" placeholder="Name" required/>                        
                            <input type="email" id="email" name="email" placeholder="email" required/>
                        </div>
                        
                        <div>
                            <label>Your Message Here
                                <textarea rows="6" cols="50" name="message" required/>
                            </label>
                        </div>
                        
                        <button type="submit">Submit</button>
                    </form>
    
                
        </section>
    )
}

export default ContactMe