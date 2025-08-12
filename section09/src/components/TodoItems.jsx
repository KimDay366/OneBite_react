import './TodoItems.css'

// const TodoItems = ({todoItem})=>{
//     return (
//     <div className="todoItems">
//         <input type="checkbox" />
//         <h6>{todoItem.content}</h6>
//         <p>{todoItem.date}</p>
//         <button>Del</button>
//     </div>)
// }

const TodoItems = ({id, isDone, content, date, onUpdate, onDelete})=>{

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

export default TodoItems;