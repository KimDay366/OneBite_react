import {memo} from 'react';

const Header = () =>{

    return <>
        <h3>오늘은 🗓️</h3>
        <h1>{new Date().toDateString()}</h1>
    </>
}

// const MemoHeader = memo(Header);

// export default MemoHeader;

export default memo(Header);