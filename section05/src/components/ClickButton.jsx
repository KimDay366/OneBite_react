const ClickButton = ({text, bgc}) => {

    // 1. 직접 입력 방법
    // return <button 
    //     onClick = {()=>{
    //         alert(`on ${text}`);
    //     }}
    //     style={{backgroundColor : bgc, border : "1px solid #ddd", margin: "2px 5px", padding : '5px 10px'}}>
    //         {text} 
    //     </button>

    // 2. 함수 선언 후 출력 방법 : 콜백함수 사용하는 것처럼 함수 이름만 지정, 함수() 이렇게 쓰는거 아님

    const onBtnClick = ()=>{alert(text)};
    const onBtnHover = ()=>{console.log(bgc)};

    return <button 
            onClick = {onBtnClick} 
            onMouseEnter = {onBtnHover}
            style={{backgroundColor : bgc, border : "1px solid #ddd", margin: "2px 5px", padding : '5px 10px'}}>
            {text} 
        </button>
}

export default ClickButton;