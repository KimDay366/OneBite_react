import './Main.css';

const Main = () => {

    const user = {
        name : 'kjs',
        isLogin : true,
    };

    // if문을 사용해 직관적으로 작성하기
    if (user.isLogin) {
        return <button className="logOut">Log Out</button>
    }else {
        return <button>Login</button>
    }

    // return <>
    //     {user.isLogin ? <button>로그아웃</button> : <button>로그인</button>}
    // </>;
}; 

export default Main;