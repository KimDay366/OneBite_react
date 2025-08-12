import './Header.css'

function Header ({title, leftChild, rightChild}){

    return (
    <header className='header'>
        <div className='hd_left'>{leftChild}</div>
        <div className='hd_center'>{title}</div>
        <div className='hd_right'>{rightChild}</div>
    </header>
    )
}

export default Header;