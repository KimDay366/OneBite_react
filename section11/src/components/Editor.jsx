import './Editor.css';
import {useState, useRef, useContext} from 'react';
import { TodoDispatchContent } from '../App';

const Editor = () =>{
    //{onCreate} 더이상 Props로 전달받지 않음
    const {onCreate} = useContext(TodoDispatchContent);

    const [ content, setContent ] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) =>{
        setContent(e.target.value);
        // input 입력 값 받아오기
    }

    const onSubmit = ()=>{
        if(content===""){
            contentRef.current.focus();
            return; 
            // content 값이 없는 경우 강제 종료
            // 입력 창에 포커싱 하기
        }
        onCreate(content);
        setContent("");
        // content 값이 있어서 데이터가 저장 된 경우
        // 입력창의 값을 빈칸으로 만들기
    };

    // Enter(key code : 13)로 입력 하기
    const onKeyEnter =(e)=>{
        if(e.keyCode === 13 ){
            console.log('enter down');
            onSubmit();
        }
    }

    return <>
        <div className="editor">
            <input ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeyEnter} type="text" placeholder="new Todo List" />
            <button onClick={onSubmit}>+ ADD</button>
        </div>
    </>
}

export default Editor;