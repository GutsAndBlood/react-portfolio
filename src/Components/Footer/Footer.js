import React from 'react'
import './Footer.css'
import LogoWhite from '../../Images/logoWhite.png'


const Footer = () => {

    return(
        <footer className="footerMain">
            <img src={LogoWhite}  alt="logo"/>
            <p>Living, Learning &amp; Leveling up one day at a time.</p>
        </footer>
    )
}

export default Footer