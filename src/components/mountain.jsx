import React from 'react';
import './css/Mountain.css';

const Mountain = (props) => {
    return (
        <div>
            <img alt='mountain' className="mountain" src={require("../images/mountain.png")} />
        </div>
    )
}

export default Mountain;