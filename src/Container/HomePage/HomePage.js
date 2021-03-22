import React from 'react'
import AvatarCom from '../../Components/Avatar/Avatar'
import Callme from '../../Components/CallMe/Callme'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Home from '../../Components/Home/Home'


const HomePage = () => {

    return (
        <div>
            <Header AboutMe={'/react-portfolio/#aboutMeNav'}/>
            <AvatarCom/>
            <Home/>
            <Callme/>
            <Footer/>
        </div>
    )

}


export default HomePage