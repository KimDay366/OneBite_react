import './TodoItems.css'

import {memo, useContext } from 'react';
import { TodoDispatchContent } from '../App';

const TodoItems = ({id, isDone, content, date})=>{

    // useContext 로 불러올 객체함수 {onUpdate, onDelete}
    const {onUpdate, onDelete} = useContext(TodoDispatchContent);

    const onChangeCheck = ()=>{
        onUpdate(id);
    }

    const clickDel = () =>{
        onDelete(id);
    }

    return (
    <div className="todoItems">
        <input onChange={onChangeCheck} readOnly checked={isDone} type="checkbox" />
        <h6>{content}</h6>
        <p>{new Date(date).toLocaleDateString()}</p>
        <button onClick={clickDel}> Del</button>
    </div>)
}

export default memo(TodoItems);
