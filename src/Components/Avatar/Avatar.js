import React from 'react'
import HoverImage from "react-hover-image"
import './Avatar.css'
import Avatar from '../../Images/avatar.svg'
import AvatarWink from '../../Images/avatarWink.svg'



const AvatarCom = () => {

    return(
        <section className="homeMainDiv">
            <h1> &lt; Hello world /&gt;</h1>
            <p>I want to be part of a team and consolidate professionally in a company where personal achievements and performance are recognized,
            in addition to allowing opportunities for personal and professional development.</p>
            <HoverImage className="avatarSize" src={Avatar} alt="avatar" hoverSrc={AvatarWink}/>
        </section>
    )
    
}


export default AvatarCom