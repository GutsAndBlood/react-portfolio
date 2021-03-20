import React from 'react'
import Logo from '../../Images/logo.png'
import './Header.css'


const Header = () => { 


    return (
        <header className="mainDivHeader">
           <a href='/'> <img src={Logo} className='mainLogo' alt='logo'/></a> 

           <a href="#aboutMeNav" className='aboutMeHeader'>About me</a> 
           <a href="/#" className='contact'>Contact</a> 
        </header>
    )

}


export default Header;