import React, { useState, useRef } from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import ValidSample from "./components/VaildSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";

const App = () => {
  const scrollBox = useRef();
  return (
    <div>
      <IterationSample/>
    </div>
  )
}

export default App;