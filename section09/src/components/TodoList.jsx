import './TodoList.css'
import TodoItems from './TodoItems';
import {useState} from 'react';

const TodoList = ({todos, updateList, deleteList}) =>{

    const [search, setSearch ] = useState("");

    const onSearch = (e) =>{
        setSearch(e.target.value);
    };

    // 필터링 된 todos를 반환하는 역할
    const getFilter = () =>{
        if(search===""){
            return todos;
        }

        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase()))
        // .toLowerCase() : 영문자를 소문자로 바꿔주는 역할
    }

    const filteringTodos = getFilter();

    return<div className="todoList">
        <h4>Todo List ⭐</h4>
            <input value={search} onChange={onSearch} placeholder="검색어를 입력하세요"/>
            <div className="todos">
                {filteringTodos.map((todo)=>{
                    return <TodoItems key={todo.id} {...todo} onUpdate={updateList} onDelete={deleteList} />
                })}
                {/* 필터링 전 todos
                    {todos.map((todo)=>{
                        return <TodoItems key={todo.id} {...todo}/>
                    })} 
                 */}
                {/* 내가 만든 todos
                    {todos.map((todo)=>{
                        return <TodoItems todoItem={todo}/>
                    })} 
                 */}
            </div>
    </div>
    
}

export default TodoList;