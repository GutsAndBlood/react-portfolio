import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ContactMeContainer from '../ContactMeContainer/ContactmeContainer'

const RouterFolder = () => {

    return(
        <Router>
            <Switch>
                <Route path='/contact' exact component={ContactMeContainer}/>
                <Route path='/' component={HomePage} />
            </Switch>
        </Router>
    )
}

export default RouterFolder