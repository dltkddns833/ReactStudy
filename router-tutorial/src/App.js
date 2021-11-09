import { Route, Routes, Link } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Profiles from './components/Profiles';
import Profile from './components/Profile';
import HistorySample from './components/HistorySample';
import WithRouterSample from './components/WithRouterSample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about?detail=true">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/profiles" element={<Profiles/>}>
          <Route path="" element={<div>사용자를 선택해주세요!</div>} />
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  )
}


export default App;
