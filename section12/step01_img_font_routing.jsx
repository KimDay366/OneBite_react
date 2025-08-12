import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// 라우트에 맞춰서 알맞은 페이지를 불러오기 위한 작업
// Link : HTML 에서 사용하는 <a>태그를 대신하는 훅으로 단순 클릭용으로 사용.
//        HTML 태그로 페이지를 이동하면, 페이지가 새로고침 되면서 서버에서 특정 페이지 정보를 받아오지만
//        해당 훅을 사용하면, 필요한 부분의 렌더링만 받아오게 됨. 
// useNavigate : Link 훅과 다르게 실제 버튼이 있는 경우, 특정 조건이나 이벤트가 이뤄지면 페이지를 이동시킬때 사용. 

// 1. '/' : 모든 일기를 조회하는 Home Paage
// 2. '/new' : 새로운 일기를 작성하는 New Page 
// 3. '/diary' : 일기를 상세히 조회하는 Diary Page

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

// 이모지 파일 불러오기 
import {getEmoImg} from './util/get-emo-img.js'

function App(){

  const nav = useNavigate();

  const onClickBtn = () => {
    nav('/login');
  }

  return <>
  <div>
    <img src={getEmoImg(1)}/>
    <img src={getEmoImg(2)}/>
    <img src={getEmoImg(3)}/>
    <img src={getEmoImg(4)}/>
    <img src={getEmoImg(5)}/>
  </div>
  <div>
    <Link to={'/'}>Home</Link>
    <Link to={'/new'}>New</Link>
    <Link to={'/diary'}>Diary</Link>
  </div>
  <button onClick={onClickBtn}>Login Page</button>
  <Routes>
    {/* 여기 안에는 Route 컴포넌트만 작성 가능 */}
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<New />} />
    <Route path="/diary/:id" element={<Diary />} />
    <Route path="*" element={<Notfound />} />
    {/* path="*" : 와일드 카드, default 값으로 셋팅하지 않은 모든 값을 연결함 */}
  </Routes>
  <div> '[Routes]' 컴포넌트 외부에 배치 할 경우 어떤 페이지든 보여지게 됨 , 이건 적절하지 않음 </div>
  </>
}
export default App
