import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: '#ffffff'
  }
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
      <h2>{name === '리액트' && '리액트 입니다.'}</h2>
      <h2>{name || 'undefined입니다.'}</h2>
      <div style={style}>{name} inline Style</div>
      <div className="react">{name} Class Style</div>
      <input></input>
    </>
  );
}

export default App;
