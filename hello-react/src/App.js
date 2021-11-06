import React, { useState, useRef } from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import ValidSample from "./components/VaildSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";
import { Component } from "react/cjs/react.production.min";
import LifeCycleSample from "./components/LifeCycleSample";

// // 함수형
// const App = () => {
//   const scrollBox = useRef();
//   return (
//     <div>
//       <IterationSample/>
//     </div>
//   )
// }

// 클래스형
function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  state = {
    color : '#000000'
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor()
    })
  }

  render(){
    return(
      <div>
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color}/>
      </div>
    )
  }
}

export default App;