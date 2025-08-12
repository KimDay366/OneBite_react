// 여러 페이지에서 사용하는 경우,
// 매 페이지마다 불러오는 구문을 작성하면 내용이 길어지므로 
// 이와같이 별도의 js 파일을 만들어 사용 

import emotion1 from '../assets/emotion1.png';
import emotion2 from '../assets/emotion2.png';
import emotion3 from '../assets/emotion3.png';
import emotion4 from '../assets/emotion4.png';
import emotion5 from '../assets/emotion5.png';

export function getEmoImg(emoID){
    switch(emoID){
        case 1: 
            return emotion1;
        case 2: 
            return emotion2;
        case 3: 
            return emotion3;
        case 4: 
            return emotion4;
        case 5: 
            return emotion5;
        default : 
            return null;
    }
}