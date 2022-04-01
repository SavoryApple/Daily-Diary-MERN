import React from 'react';
import './css/intro.modules.css';

const Intro = (props) => {
    return (
        <div>
            <h1 className="welcome text-center">Welcome! <br />
                <div className="intro1">
                    {/* <img src={require('circle.jpeg')} alt='background' className='circle' /> */}
                    <h4 className="type">Customizable Calendar</h4>
                    <br />
                </div>
                <div className="intro2">
                    <h4 className="type2">Creative Design</h4></div>
                <div className="intro3">
                    <div className="type3">All in One</div>
                </div>
                <br />
                <div className="intro4"><div className="type4">Securely stored</div></div>
            </h1>
        </div >
    )
}

export default Intro