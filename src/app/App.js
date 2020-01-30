import React from 'react';
import Layout from './Layout';

class App extends React.Component {  
  constructor(){
    super();
    this.state = {
      info: {
        numBars: '',
        algo: ''
      },
      barsArray: [],
      num: 0
    }
  }

  generateArray = (change) => {   
        
    const barsArray = this.state.barsArray;    
    let bars = [];

    if(change <= 60){
      if(this.state.num < change){
        for(let i = 0; i < barsArray.length; i++){
          bars.push(barsArray[i]);
        }
        for(let i = bars.length; i < change; i++){
          let numero = Math.floor(Math.random() * (450 - 10)) + 10;
          bars.push(numero);
        }

      }else{

        for(let i = 0; i < change; i++){
          bars.push(barsArray[i]);
        }
      }
      
      
    }else{
      for(let i = 0; i < barsArray.length; i++){
        bars.push(barsArray[i]);
      }
      for(let i = bars.length; i < 60; i++){
        let numero = Math.floor(Math.random() * (450 - 10)) + 10;
        bars.push(numero);
      }
    }

    const state = {
      ...this.state,
      barsArray: bars,
      num: change
    }
    this.setState(state)
  }

  
  

  render(){
    return(
      <div>
        
        <Layout 
          generateArray={this.generateArray} 
          barsArray={this.state.barsArray}
          

        />
      </div>
    )
  }
  
}

export default App;
