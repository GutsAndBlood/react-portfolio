import React from 'react'

import './Home.css'
import Desktop from '../../Images/desktop.png'
import MobileDev from '../../Images/mobileDev.svg'
import WebDev from '../../Images/webDev.svg'
import BackDev from '../../Images/backDev.svg'


const Home = () => { 

    return (
        
        <section className="aboutMe" id="aboutMeNav">
            <img className="desktop" src={Desktop} alt="desktop"/>
            <div className="desciption" >
                <h3>Hello there, I'm Javier. Plesure to meet you</h3>
                <p>Coming from Mazatlan, Sin, Mexico. I started my journey as a developer in 2019.
                I have speacial interest in Front-end and Mobile development. A fan of learning and interacting with new technologies,
                these are the skills I have learned and improved during my journey.</p>
            </div>
            <div className="desciptionSkillsMainDiv">
                <div className="desciptionSkills">
                    <div className="desciptionSkillsItems">
                        <img src={MobileDev} alt="phone"/>
                        <h3>Mobile Development</h3>
                        <p className="triplePara">I have worked in a couple of apis on my own. I&apos;m curious about this and can&apos;t wait to dig into it.</p>
                        <p className="languageAndTools">Languages and tools I&apos;ve learned and used</p>
                        <p>JavaScrip, React Native, Expo</p>
                    </div>
                    <div className="desciptionSkillsItems">
                        <img src={WebDev} alt="web icon"/>
                        <h3>Front-end Development</h3>
                        <p className="triplePara">My main path, I have worked mainly as a front-end developer, I like to bring my ideas to life in the browser.</p>
                        <p className="languageAndTools">Languages and tools I&apos;ve learned and used</p>
                        <p>JavaScrip, Html, Css, React, Redux</p>
                    </div>
                    <div className="desciptionSkillsItems">
                        <img src={BackDev} alt="backend icons"/>
                        <h3>Back-end &amp; others</h3>
                        <p className="triplePara">Technologies that I&apos;ve used in my journey, some of them are crucial in my day to day, others are eager to use them again.</p>
                        <p className="languageAndTools">Languages and tools I&apos;ve learned and used</p>
                        <p>Nodejs, Flask, Git, Linux, MongoDB, SQL</p>
                    </div>
                </div>
            </div>
        </section>
        
    )

}


export default Home;