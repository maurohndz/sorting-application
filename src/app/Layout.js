import React from 'react';
import Header from './header';
import Bars from './Bars';

const Layout = (props) => {
    const {
        barsArray,
        generateArray,
    } = props;

    return(
        <div>
            <Header generateArray={generateArray} />
            <Bars barsArray={barsArray} />
        </div>
    );
}

export default Layout;