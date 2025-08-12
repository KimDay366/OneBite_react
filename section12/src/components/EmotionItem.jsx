import { getEmoImg } from "../util/get-emo-img";

import './EmotionItem.css';

const EmotionItem = ({emoId, emoName, isSelected, onClick })=>{

    return <div onClick={onClick} className={`emoItem ${isSelected ? `emo_on_${emoId}` : "" }`}>
        <img src={getEmoImg(emoId)} />
        <p>{emoName}</p>
    </div>
    
}

export default EmotionItem;