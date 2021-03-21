import React from 'react'
import Logo from '../../Images/logo.png'
import './Header.css'


const Header = (props) => { 


    return (
        <header className="mainDivHeader">
           <a href='/'> <img src={Logo} className='mainLogo' alt='logo'/></a> 

           <a href={props.AboutMe} className='aboutMeHeader'>About me</a> 
           <a href="/contact" className='contact'>Contact</a> 
        </header>
    )

}


export default Header;