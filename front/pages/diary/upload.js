import React from "react";
import topStyles from "../../styles/test.module.scss";
import Router from "next/router";
import typeStyles from "../../styles/type.module.scss";
import textStyles from "../../styles/onboad.module.scss";
import styles from "../../styles/diary.module.scss";

const Upload = () => {

    const onBackMain = () => {
        Router.back()
    }

    return(
        <>
            <div className={topStyles.top_wrapper}>
                <div className={topStyles.back_btn} onClick={onBackMain}></div>
                <div className={topStyles.top_text} onClick={onBackMain}>돌아가기</div>
                <div className={topStyles.close_btn} onClick={onBackMain}></div>
            </div>

            <div style={{marginTop:"38px"}} className={typeStyles.text_wrapper}>
                <div style={{display:"inline-block",margin:"0"}} className={textStyles.green_title}>매일매일</div>
                <div style={{display:"inline-block",margin:"0 0 0 10px"}} className={textStyles.black_title}>AI로 기록하는 </div>
                <div style={{margin:"0"}} className={textStyles.green_title}>피부 다이어리</div>
            </div>

            <div className={styles.main_text}>
                하루 한 번, 셀카 한 장으로 피부 기록
            </div>

            <div className={styles.upload_img}></div>

            <div className={styles.group_img}></div>

            <div className={styles.bottom_text}>개인정보이용정책</div>

            <div className={topStyles.copy_right_main}></div>
        </>
    )
}

export default Upload
