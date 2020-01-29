import React from 'react';
import Bar from './Bar';
import './css/Bars.css';

const Bars = (props) => {

    return(
        <div className="Container__bars" >
            <div className="Bars__block" >
                <Bar htl={200} />
                <Bar htl={300} />
                <Bar htl={400} />
            </div>
        </div>
    );
}

export default Bars;