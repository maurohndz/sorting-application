import React from 'react';
import './css/Bar.css';

const Bar = (props) => {

    return(
        <div className="Bar" style={{height: props.htl + 'px'}} ></div>
    );
}

export default Bar;