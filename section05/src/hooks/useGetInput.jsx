// 3. [커스텀 훅]
// 커스텀 훅의 기능을 하기 위해 훅 이름 앞에 use를 써 주어야 함
import {useState, useRef} from 'react';

const useGetInput =()=>{

    const [input,setInput] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }

    return [input, onChangeInput]
}

export default useGetInput;