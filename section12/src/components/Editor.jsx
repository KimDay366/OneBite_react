import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import EmotionItem from '../components/EmotionItem';
import { emoLIst } from "../util/constants";
import {getStringDate} from '../util/get-date'

import './Editor.css';


// onSubmit : 현재 Editor 페이지가 New / Edit 두개 페이지에서 사용되므로,
//            각 페이지 마다 "작성완료"의 기능이 약간 다르므로 
//            '작성완료' 클릭 시 적용 할 함수를 외부에서 정함
const Editor = ({initData, onSubmit})=>{

    const [input, setInput] = useState({
        createDate : new Date(),
        emotionID : 3,
        content : "",
    });

    useEffect(()=>{
        if(initData){
            setInput({
                ...initData,
                createDate : new Date(Number(initData.createDate)),
            })
        }
    },[initData])

    const onChangeDate = (e)=>{

        // 단순히 한가지 데이터만 바꾸는 것이 아니라, 여러 데이터를 넣을 수 있도록 셋팅
        // console.log(e.target.name); 
        // console.log(e.target.value);

        let name = e.target.name;
        let value = e.target.value;

        if(name === "createDate"){
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value
            // createDate : new Date(e.target.value),
        })
    }

    const onClickSubmit = ()=>{
        onSubmit(input);
    }

    const nav = useNavigate();

    return (
        <section className="editor">
            <div className="editor_date">
                <h6>오늘의 날짜</h6>
                <input name={'createDate'} type="date" value={getStringDate(input.createDate)} onChange={onChangeDate} />
            </div>
            <div className="editor_emo">
                <h6>오늘의 감정</h6>
                <div className="emo_list_wrapper">
                    {emoLIst.map((item)=> 
                    <EmotionItem key={item.emoId} {...item} isSelected={item.emoId === input.emotionID} 
                        onClick={()=>onChangeDate({
                            target: {
                                name: "emotionID",
                                value : item.emoId
                            }
                        })} />
                        )
                    }
                    {/* Props로 사용하던 emoId={item.emoId} emoName={item.emoName}는 {...item}으로 사용 가능 */}
                </div>

                {/* 아래와 같은 방법도 가능하지만, 해당 방법으로 하면 유지보수가 힘듦
                <EmotionItem emoId={1} emoName={'완전 좋음'}/>
                <EmotionItem emoId={2} emoName={'좋음'}/>
                <EmotionItem emoId={3} emoName={'그럭저럭'}/>
                <EmotionItem emoId={4} emoName={'나쁨'}/>
                <EmotionItem emoId={5} emoName={'끔찍함'}/> */}
            </div>
            <div className="editor_con">
                <h6>오늘의 일기</h6>
                <textarea name={'content'} onChange={onChangeDate} value={input.content} placeholder='오늘은 어땠나요?'/>
            </div>
            <div className="editor_btn">
                <Button text={"취소하기"} onClick={()=>nav('/')}/>
                <Button text={"작성완료"} type={"POSITIVE"} onClick={onClickSubmit}/>
            </div>
        </section>
    )
}

export default Editor;