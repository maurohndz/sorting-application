import React from 'react';
import './css/Bar.css';

const Bar = (props) => {

    const height = () => {
        
    }

    return(
        <div className="Bar" style={{height: props.htl + 'px'}} ></div>
    );
}

export default Bar;