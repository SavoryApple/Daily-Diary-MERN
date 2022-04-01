import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './css/ViewOne.css'
import { Link } from 'react-router-dom';

const ViewOne = (props) => {

    // grab the variable from the url :id :var :whatever
    const { id } = useParams();
    console.log(id);

    const [entry, setEntry] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/calendar/entry/" + id)
            .then(res => {
                console.log(res.data);
                setEntry(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div >
            <div className="main">
                <div className="viewContainer">
                    {/* <img className="vector" src={require("../images/vector.png")}/> */}
                    {/* <img className="vector" src={require("../images/pngegg.png")}/> */}
                    <div className="fit">
                    
                        <h3 className="viewTitle">First Journal</h3>
                        <h5>dear diary, Seann and I created a calendar journal. We had our ups and downs, but we are finished now! Yay!! Time to celebrate with some Korean BBQ :)</h5>
                        <h5><br /> Hard-coding makes life so much easier haha !!</h5>
                        <img style={{width: "100px", height:"100px"}} src="https://www.kindpng.com/picc/m/111-1115271_transparent-emoji-smiley-png-chinatown-market-smiley-face.png"/><br/><br/>
                        <h5>reminder: chocolate cake in the fridge~~</h5>
                        <h5>You feel... EXCITED.</h5>
                        {/* <h5>Did you finish your journal? {entry.checkbox ? '<img src={require("../images/alarm_clock.png")}' : ""} </h5> */}
                        <button className="button">
                            <Link  to = '/calendar/entry/update/6244f6ce98af81f16497f1a2' className="no-underline text-light">Update</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOne;

//6244a6376672eb7c0b6bb7df (random id for testing)