import React from 'react';
import './Callme.css'
import {useHistory} from 'react-router-dom'

const Callme = () => {

    const history = useHistory()

    return(
        <section className='callMeBox'>
                <div className="callMeFlex">
                    <h3>Start a Project</h3>
                    <p>Interested in working together? Let&apos;s schedule a call</p>
                    <button onClick={() => history.push('/react-portfolio/contact')} className="buttonTalk">Let&apos;s Talk</button>
                </div>
        </section>
    )

}

export default Callme