const Controller = ({calcApp}) =>{

    return <>
        <div>
            {/* <button onClick={calcApp(-100)}>-100</button> Hook을 사용 할 때에는 함수 안에서 써야 하므로, 기존 onClilk과 구조가 다름*/}
            <button onClick={()=>{calcApp(-100)}}>-100</button>
            <button onClick={()=>{calcApp(-10)}}>-10</button>
            <button onClick={()=>{calcApp(-1)}}>-1</button>
            <button onClick={()=>{calcApp(1)}}>+1</button>
            <button onClick={()=>{calcApp(10)}}>+10</button>
            <button onClick={()=>{calcApp(100)}}>+100</button>            
        </div>
    </>
}

export default Controller;