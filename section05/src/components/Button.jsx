const Button = ({text, bgc, secText = "all", children}) => {

    // object{text:'mail',bgc='lightblue'}... = this.state와 비슷한 구조
    // 따라서 props를 구조분해할당 구조로 받아서 값을 저장해 쓴다

    // 사용 할 때에는 현재 선언한 key값과, 불러오는 key 값을 동일하게 사용해야 함

    return <button style={{backgroundColor : bgc, border : "1px solid #ddd", margin: "2px 5px", padding : '5px 10px'}}>
                {text} - {secText}
                {children} 
                {/* children은 props에서 기본으로 제공 해 주는 key값으로, 컴포넌트에 자식태그 추가 컴포넌트가 있을 때 사용 */}
            </button>
}

export default Button;

//const Button = (props) => {
    // props 자체에 객체로 저장되어 있기 때문에, 객체의 값을 사용해서 적용한다
    // console.log(props);    

    // return <button>click</button>

    // return <button style={{backgroundColor : props.bgc, border : "1px solid #ddd", margin: "2px 5px", padding : '5px 10px'}}>
    //             {props.text} - {props.secText}
    //         </button>

// }
// props를 한번에 불러오는 구조로 사용하면 props의 초기값 설정이 힘들어지므로 맨 위와 같이 별도의 기본값을 설정 해 주어 오류를 막음