import {FeedbackUtility} from '../components/FeedbackUtility/FeedbackUtility'
import {Statistics} from '../components/Statistics/Statistics'
import React, { Component } from "react";
import ReactDOM from "react-dom";


export class App extends Component {
  state = {
    good : 0,
    bad : 0,
    neutral: 0,
  };

  addGood = () =>{
    this.setState(prevState =>{
      return {
        ...prevState,
        good : prevState.good +1
      }
    })
  }

  addBad = () =>{
    this.setState(prevState =>{
      return {
        ...prevState,
        bad : prevState.bad +1
      }
    })
  }

  addNeutral = () =>{
    this.setState(prevState =>{
      return {
        ...prevState,
        neutral : prevState.neutral +1
      }
    })
  }


  render() {
    return (
      <div id="app">
        <FeedbackUtility addGood={this.addGood} addBad={this.addBad} addNeutral={this.addNeutral}/>
        <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral}/>
      </div>
  );
  }
  
};

ReactDOM.render(<App />, document.getElementById("root"));


