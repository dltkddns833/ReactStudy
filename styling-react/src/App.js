import { Component } from "react";
import SassComponent from "./components/SassComponent";
import CssModule from "./components/CSSModule";
import StyledComponent from './components/StyledComponent'

class App extends Component{
  render(){
    return(
      <div>
        <SassComponent/>
        <br/>
        <CssModule/>
        <br/>
        <StyledComponent/>
      </div>
    )
  }
}
export default App;
