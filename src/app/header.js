import React from 'react';
import './css/header.css';

const Header = (props) => {
    return(
        <div className="Header" >
            <div className="Header__title" >
                <h1>Bar Classification</h1>
            </div>
            <div className="Header__config" >
                <div className="Header__container" >
                    <div className="Container_input-large" >
                        <label className="label_input" >Number of bars: </label>
                        <input type="number"  placeholder="max 50 bars" />
                    </div>
                    <div className="Container_btn-start" >
                        <button>Start</button>
                    </div>
                    <div className="Container_input-select" >
                    <label className="label_input" >Algorithm Type: </label>
                    <select  >
                        <option>Large select</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;