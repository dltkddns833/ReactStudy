import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

const App = () => {
  return (
    <div>
      <MyComponent name={"react"} favoriteNumber={3}>리액트</MyComponent>
      <br/>
      <Counter name={"react"} favoriteNumber={3}>리액트</Counter>
      <br/>
      <Say/>
    </div>
  )
}

export default App;