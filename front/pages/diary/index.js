import React, {useState} from "react";
import topStyles from "../../styles/test.module.scss";
import Router from "next/router";
import typeStyles from "../../styles/type.module.scss";
import textStyles from "../../styles/onboad.module.scss";
import styles from "../../styles/diary.module.scss";
import {message} from "antd";

const Diary = () => {
    const [id, setId] = useState("")
    const onChangeId = (e) => {
        setId(e)
    }

    const onBackMain = () => {
        Router.back()
    }

    const onClickNext = () => {
        if (id.length < 4){
            return message.warning("정확한 ID 또는 핸드폰 번호를 입력해주세요.")
        }
        Router.push("/diary/upload")
    }

    return(
        <>
            <div className={topStyles.top_wrapper}>
                <div className={topStyles.back_btn} onClick={onBackMain}></div>
                <div className={topStyles.top_text} onClick={onBackMain}>돌아가기</div>
                <div className={topStyles.close_btn} onClick={onBackMain}></div>
            </div>

            <div style={{marginTop:"38px"}} className={typeStyles.text_wrapper}>
                <div style={{display:"inline-block",margin:"0"}} className={textStyles.black_title}>AI의 </div>
                <div style={{display:"inline-block",margin:"0 0 0 10px"}} className={textStyles.green_title}>피부 분석 리포트</div>
            </div>

            <div className={styles.main_text}>
                하루가 시작되는 매일 아침
                <br/>
                분석 결과를 보내드려요.
            </div>

            <div className={styles.main_img}></div>

            <input className={styles.input} type="text" value={id} onChange={(e) => onChangeId(e.target.value)} placeholder={"카카오톡 ID 또는 핸드폰 번호를 입력해주세요"}/>
            <div onClick={() => onClickNext()} style={{margin:"20px 25px 42px"}} className={`${textStyles.card} ${textStyles.first_card}`}><div>다이어리 작성하기</div></div>

            <div className={topStyles.copy_right_main}></div>
        </>
    )
}

export default Diary
