import React, {useCallback, useEffect, useRef} from "react";
import topStyles from "../../styles/test.module.scss";
import Router, {useRouter} from "next/router";
import typeStyles from "../../styles/type.module.scss";
import textStyles from "../../styles/onboad.module.scss";
import styles from "../../styles/diary.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {IMAGE_DONE, IMAGE_REQUEST, IMAGE_UPLOAD_REQUEST} from "../../reducers/user";
import Image from 'next/image'
import {message} from "antd";

const Upload = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const {id} = router.query
    const {imageUrl,imageDone} = useSelector((state) => state.user);
    const imageInput = useRef();
    let userId = null
    if (typeof id !== "undefined"){
        userId = JSON.parse(id)
        console.log(userId)
    }
    const onBackMain = () => {
        Router.back()
    }

    const onChangeImages = useCallback((e) => {
        const imageFormData = new FormData();
        imageFormData.append('image', e.target.files[0]);
        dispatch({
            type: IMAGE_UPLOAD_REQUEST,
            data: imageFormData
        });
    },[])

    const onCLickChangeDiaryImage = useCallback(() => {
        imageInput.current.click()
    },[imageInput.current])

    useEffect(() => {
        if (imageUrl){
            if (imageUrl.fileName){
                dispatch({
                    type:IMAGE_REQUEST,
                    data:{key:userId,url:imageUrl.fileName}
                })
                message.success("성공적으로 업로드 되었습니다.")
            }
        }
    },[imageUrl])

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

            <div onClick={() => onCLickChangeDiaryImage()} className={styles.upload_img}>
                <img className={styles.inner_img} src={
                    imageUrl
                        ? imageUrl.fileName
                        : "https://pida-aws.s3.ap-northeast-2.amazonaws.com/upload.svg"
                }></img>
            </div>
            <input type="file" name="image" hidden ref={imageInput} onChange={onChangeImages} />

            <div className={styles.group_img}></div>

            <div className={topStyles.copy_right_main}></div>
        </>
    )
}

export default Upload
