import React from 'react'
import Logo from '../../logo.png'
import './Header.css'


const Header = () => { 


    return (
        <nav className="mainDivHeader">
           <a href='/'> <img src={Logo} className='mainLogo' alt='logo'/></a> 

           <a href="/#" className='aboutMe'>About me</a> 
        </nav>
    )

}


export default Header;