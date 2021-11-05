import React, { useState, useRef } from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import ValidSample from "./components/VaildSample";
import ScrollBox from "./components/ScrollBox";

const App = () => {
  const scrollBox = useRef();
  return (
    <div>
      <MyComponent name={"react"} favoriteNumber={3}>리액트</MyComponent>
      <br/>
      <Counter name={"react"} favoriteNumber={3}>리액트</Counter>
      <br/>
      <Say/>
      <br/>
      <EventPractice/>
      <br/>
      <ValidSample/>
      <br/>
      <div>
        <ScrollBox ref={scrollBox}/>
        <button onClick={() => scrollBox.current.scrollToBottom()}>맨 밑으로</button>
      </div>
    </div>
  )
}

export default App;