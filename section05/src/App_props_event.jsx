import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx'
import ClickButton from './components/ClickButton.jsx'

// 확장자를 모두 쓰지 않아도, import가 가능함

function App() {
  
    const btnSpreadProps ={
      text : "spread",
      bgc : "lightyellow",
      secText : 'rest', 
      a: 1,
      b: 2,
      c: 3,
    };

  return (
    <>
    {/* <h1>Welcome to My App</h1>

    <Header />

    <Main />

    <Footer /> */}
    {/* 렌더링을 위하여 상단에 작성한 컴포넌트를 배치 */}

    <Button text={'mail'} bgc={"lightblue"} secText='inbox'/>
    <Button text={'blog'} bgc={"#33aaa9"}/>

    {/* 스프레드 연산자를 사용해서 props를 한번에 묶어 전달 가능 */}
    <Button {...btnSpreadProps}/> 

    {/* 만든 컴포넌트 아래에 태그나 컴포넌트를 추가 가능 */}    
    <Button text={'parent'} bgc={"skyblue"}><p style={{backgroundColor : "#ddd"}}>Children Tag</p></Button>
    <Button text={'header'} bgc={"gray"} secText="components open"><Header /></Button>

    {/* Event Handling - 사용자의 요청에 따라 움직이는 버튼 생성 */}
    <ClickButton text={'click'} bgc={"lightgreen"}/>
    </>
  )
}

export default App
