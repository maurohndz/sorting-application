import React from 'react';
import Layout from './Layout';

class App extends React.Component {  

  constructor(){
    super();
    this.state = {
      bars: [],
      data: {
        num_bar: 0,
        algorithm: '' 
      }      
    }
  }

  render(){
    return(
      <div>
        <Layout />
      </div>
    )
  }
  
}

export default App;
