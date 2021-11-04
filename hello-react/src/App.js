import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";

const App = () => {
  return (
    <div>
      <MyComponent name={"react"} favoriteNumber={3}>리액트</MyComponent>
      <br/>
      <Counter name={"react"} favoriteNumber={3}>리액트</Counter>
      <br/>
      <Say/>
      <br/>
      <EventPractice/>
    </div>
  )
}

export default App;