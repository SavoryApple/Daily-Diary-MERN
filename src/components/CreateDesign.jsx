import React from 'react'
import './css/createdesign.css'

const CreateDesign = (props) => {
    return (
        <div>
            <div className='postContainer'>
            <div className='leftside'>
            <img className='post' src={require("../images/post_it.png")} />
            <h5 className="write">Write :)</h5>
            </div>
            <div className='rightside'>
                <h3>Create your first entry!</h3>
                <ul className="list">
                    <li>click on calendar on the navbar</li>
                    <li>click on any day</li>
                    <li>fill out the form</li>
                    <li>click create!</li>
                </ul>
                <img className='yellow_clock' src={require("../images/alarm_clock.png")} />
                {/* <img className='yellow_clock' src={require("../images/circleZ.png")} /> */}
            </div>

    
            </div>
        </div>
    )
}

export default CreateDesign