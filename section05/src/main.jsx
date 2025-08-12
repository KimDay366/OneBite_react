import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)

// strict mode = react 작업 시 경고를 많이 보여줌
// 입문자가 작업하는 환경에서는 너무 과도한 경고를 띄워서 혼란스럽게 함
// => 확장 프로그램 [ESLint]를 통해 경고를 관리하는 것이 좋음
//    해당 프로그램 설치 후, 생성되어 있는 .eslint.config.js 파일을 수정하여 경고 수준을 조정
