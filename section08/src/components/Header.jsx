const Header = () =>{

    return <>
        <h3>오늘은 🗓️</h3>
        <h1>{new Date().toDateString()}</h1>
    </>
}

export default Header;