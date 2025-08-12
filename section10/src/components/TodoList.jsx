import './TodoList.css'
import TodoItems from './TodoItems';
import {useState, useMemo} from 'react';

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

    // 일반 함수로 계산식을 호출하는 경우, 계산이 이루어 지지 않아도 해당 함수가 리렌더링 될 떄마다 계속 실행됨
    // 이는 최적화에서 봤을때 불필요한 행위
    // const getAnalyzedData = ()=>{

    //     console.log('reRendering');

    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo)=> todo.isDone).length; 
    //     const notDoneCount = totalCount - doneCount;

    //     return {totalCount, doneCount, notDoneCount}
    // }
    
    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log('reRendering');
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=> todo.isDone).length; 
        const notDoneCount = totalCount - doneCount;

        return {totalCount, doneCount, notDoneCount}
    }, [todos]);
    // 의존성 배열, deps
    // 두번쨰 인자인 배열[]의 값이 변화할 경우에만 첫번째 인자인 콜백함수를 실행
    // 따라서 [todos]의 배열이 바뀌면 그때 앞쪽 계산이 이루어짐


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