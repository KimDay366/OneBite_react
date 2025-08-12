import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* 브라우저의 주소를 감지하여 APP 컴포넌트가 적절하게 렌더링 하게 됨 */}
        <App />
    </BrowserRouter>
)
