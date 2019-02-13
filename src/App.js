import React, { Component } from 'react';
import './App.css';
import configureStore from './Redux/store';
import * as actions from './Redux/actions'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();   
    this.state = this.store.getState();
    console.log(this.store.getState());
  }

  componentDidMount(){
    this.unsubscribe = this.store.subscribe(()=>{
      this.setState(this.store.getState());
    })

  }

  componentWillUnmount(){
    this.unsubscribe();
  }

   changeHandler= (event)=> {
    this.setState({currentValue:event.target.value});
   }

   increment = () => {
    this.store.dispatch(actions.incrementValue());
    console.log('hello increment');
   }

   decerement = () => {
     this.store.dispatch(actions.decrementValue());
   }
   
   Reset = () => {
     this.store.dispatch(actions.resetValue());
   }

  render() {
    return (
      <div className="App">
       <h1> This is my Redux app example with increament and dcreemnt of values {this.state.currentValue}</h1>
       <input type="text" value={this.state.currentValue}  onChange={this.changeHandler}/>
       <button onClick={this.Reset}>Reset</button> <br/>
       <button onClick={this.increment}>Increment</button> 
       &nbsp;
       <button onClick={this.decerement}>Decremet</button>
      </div>
    );
  }
}

export default App;
