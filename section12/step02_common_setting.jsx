import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// 1. '/' : 모든 일기를 조회하는 Home Paage
// 2. '/new' : 새로운 일기를 작성하는 New Page 
// 3. '/diary/ID' : 일기를 상세히 조회하는 Diary Page
// 4. '/edit/ID' : 일기 내용을 수정하는 Edit Page

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Notfound from './pages/Notfound';

// 이모지 파일 불러오기 
import {getEmoImg} from './util/get-emo-img.js'

// 컴포넌트 불러오기
import Button from './components/Button.jsx';
import Header from './components/Header.jsx';

function App(){

  const nav = useNavigate();

  const onClickBtn = () => {
    nav('/login');
  }

  return <>
  {/* 버튼 구현 완료
  <Button text={'click'} type={'DEFAULT'} onClick={()=>{console.log('click!!!!!');}}/>
  <Button text={'click'} type={'POSITIVE'} onClick={()=>{console.log('신규 추가');}}/>
  <Button text={'click'} type={'NEGATIVE'} onClick={()=>{console.log('삭제 버튼');}}/> */}
  
  {/* Header 구현 완료
  <Header title={'header'} leftChild={<Button text={"left"} />} rightChild={<Button text={"left"}/>} /> */}

  <Routes>
    {/* 여기 안에는 Route 컴포넌트만 작성 가능 */}
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<New />} />
    <Route path="/diary/:id" element={<Diary />} />
    <Route path="/edit/:id" element={<Edit />} />
    <Route path="*" element={<Notfound />} />
    {/* path="*" : 와일드 카드, default 값으로 셋팅하지 않은 모든 값을 연결함 */}
  </Routes>
  </>
}
export default App
