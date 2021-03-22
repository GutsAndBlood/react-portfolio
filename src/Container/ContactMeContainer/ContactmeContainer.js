import React from 'react'
import LogoHappy from '../../Images/avatarHappy.svg'
import Header from '../../Components/Header/Header'
import ContactMe from '../../Components/ContactMe/ContactMe'
import './ContactmeContainer.css'

const ContactMeContainer = () =>{ 

    return(
        <div className="ContactMeMain" >
            <Header AboutMe={'/react-portfolio/#aboutMeNav'}/>
            <img className="ContactMeLogo" src={LogoHappy} alt="happy avatar"></img>
            <ContactMe/>
        </div>
    )

}


export default ContactMeContainer