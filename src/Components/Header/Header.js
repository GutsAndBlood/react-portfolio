import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Logo from '../../Images/logo.png'
import './Header.css'


const Header = (props) => { 

    return (
        <header className="mainDivHeader">
           <a href='/react-portfolio/'> <img src={Logo} className='mainLogo' alt='logo'/></a> 

           <a href={props.AboutMe} className='aboutMeHeader'>About me</a> 
           <Link to="/react-portfolio/contact" className='contact'>Contact</Link> 
        </header>
    )

}


export default Header;