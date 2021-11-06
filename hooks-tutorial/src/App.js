import { useState } from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
import Info_Reduce from "./components/Info_Reduce";
import Average from "./components/Average";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter/>
      <br/>
      <div>
        <button onClick={() => {setVisible(!visible)}}>{visible ? '숨기기' : '보이기'}</button>
        <hr/>
        {visible && <Info/>}
      </div>
      <br/>
      <Info_Reduce/>
      <br/>
      <Average/>
    </>
  )
}

export default App;
