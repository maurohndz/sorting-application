import React from 'react';
import Bar from './Bar';
import './css/Bars.css';

const Bars = (props) => {
    const {
        barsArray
    } = props;
    
    const generateContent = () => {
        return(
            <div className="Bars__block" >
                {
                    barsArray.map((htl, key)=>(
                        <Bar htl={htl} key={key} />
                    ))
                }
            </div>
        )
    }

    return(
        <div className="Container__bars" >           
            {generateContent()}
        </div>
    );
}

export default Bars;