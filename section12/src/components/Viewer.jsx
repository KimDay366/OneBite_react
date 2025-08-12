import './Viewer.css';

import { getEmoImg } from "../util/get-emo-img";
import { emoLIst } from "../util/constants";


const Viewer = ({emoId, content})=>{

    const emoText = emoLIst.find((item)=> String(item.emoId) === String(emoId));

    return <>
        <div className="viewer">
            <div>
                <h5>오늘의 감정</h5>
                <div className={`emo_box emo_on_${emoId}`}>
                    <img src={getEmoImg(emoId)} />
                    <p>{emoText.emoName}</p>
                </div>
            </div>
            <div className="diary_content">
                <h5>오늘의 일기</h5>
                <p>{content}</p>
            </div>
        </div>
    </>
}

export default Viewer;
