import { useContext } from 'react';
import {useNavigate} from "react-router-dom";

import Button from './Button';
import {getEmoImg} from '../util/get-emo-img.js';

import './DiaryItem.css';

const DiaryItem = ({id, emotionID, createDate, content}) =>{

    // const emoID = emotionID;
    // css 제작용 임시 데이터, 굳이 필요 없음

    const nav = useNavigate();


    return (
        <div className="diaryItem">
            <div onClick={()=>nav(`/diary/${id}`)} className={`img_sec bg_img_${emotionID}`}>
                <img src={getEmoImg(emotionID)} alt="" />
            </div>
            <div className="info_sec" onClick={()=>nav(`/diary/${id}`)}>
                <p className="diary_date">{new Date(createDate).toLocaleDateString()}</p>
                <p className="diary_con">{content}</p>
            </div>
            <div onClick={()=>nav(`/edit/${id}`)} className="btn_sec">
                <Button text={'수정'}/>
            </div>
        </div>
    )
}

export default DiaryItem;