import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot() : JS에서 'app'과 같이 기본이 되는 DOM 요소를 설정하고 렌더링하는 함수
// render() : React 컴포넌트 중 <App>을 해당 DOM 요소에 렌더링하는 함수

// 즉, 현재 파일은 바닐라 자바스크립트에서 "index.js"와 같은 역할을 하며,
// React 애플리케이션의 진입점 역할을 함.

