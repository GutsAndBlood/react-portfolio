import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ContactMeContainer from '../ContactMeContainer/ContactmeContainer'
import Error from '../../Components/Error/Error'
import Success from '../../Components/Success/Success'

const RouterFolder = () => {

    return(
        <Router>
            <Switch>
                <Route path='/react-portfolio/contact' component={ContactMeContainer}/>
                <Route path='/react-portfolio/success' component={Success} />
                <Route path='/react-portfolio/' exact component={HomePage} />
                <Route component={Error} />

            </Switch>
        </Router>
    )
}

export default RouterFolder