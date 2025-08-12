import './TodoList.css'
import TodoItems from './TodoItems';
import {useState, useMemo, useContext} from 'react';
import { TodoStateContext } from '../App';

const TodoList = () =>{

    // useContext로 사용 할 예정, {todos, updateList, deleteList} 제거
    // const {todos} = useContext(TodoStateContext); 
    // 최초 TodoContext는 객체로 전달했지만, TodoStateContext todos를 그냥 전달하므로, 선언문 자체도 객체로 받지 않음
    const todos = useContext(TodoStateContext);

    const [search, setSearch ] = useState("");

    const onSearch = (e) =>{
        setSearch(e.target.value);
    };

    const getFilter = () =>{
        if(search===""){
            return todos;
        }

        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteringTodos = getFilter();

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log('reRendering');
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=> todo.isDone).length; 
        const notDoneCount = totalCount - doneCount;

        return {totalCount, doneCount, notDoneCount}
    }, [todos]);

    return<div className="todoList">
            <h4>Todo List ⭐</h4>
            <div>
                <div>Total : {totalCount}</div>
                <div>Finish : {doneCount}</div>
                <div>Not Done : {notDoneCount} </div>
            </div>
            <input value={search} onChange={onSearch} placeholder="검색어를 입력하세요"/>
            <div className="todos">
                {filteringTodos.map((todo)=>{
                    return <TodoItems key={todo.id} {...todo} />
                    // return <TodoItems key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                })}
            </div>
    </div>
    
}

export default TodoList;