import React, {useState} from "react";
import Router, {useRouter} from "next/router";
import styles from "../../styles/type.module.scss";
import fruit_1 from "../../images/type/fruit_1.svg";
import fruit_2 from "../../images/type/fruit_2.svg";
import fruit_3 from "../../images/type/fruit_3.svg";
import fruit_4 from "../../images/type/fruit_4.svg";
import fruit_5 from "../../images/type/fruit_5.svg";
import fruit_6 from "../../images/type/fruit_6.svg";
import fruit_7 from "../../images/type/fruit_7.svg";
import fruit_8 from "../../images/type/fruit_8.svg";
import fruit_9 from "../../images/type/fruit_9.svg";
import fruit_10 from "../../images/type/fruit_10.svg";
import fruit_11 from "../../images/type/fruit_11.svg";
import fruit_12 from "../../images/type/fruit_12.svg";
import {Progress} from "antd";
import {createGlobalStyle} from "styled-components";
import Image from "next/image";
import topStyles from "../../styles/test.module.scss";

const Global = createGlobalStyle`
  span{
    width: 100% !important;
    height: 100% !important;
  }
`

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const tagList = {
        dry_oil:["지성", "중성", "건성"],
        sens_regist:["민감","저항"],
        pigment:["색소","비색소"]
    }
    const fruitList = [
        {
            title:"예민한 밤",
            hash:[2,0,0],
            color:"#9E6C50",
            image:fruit_1
        },
        {
            title:"가을타는 블루베리",
            hash:[2,1,0],
            color:"#9B8DCF",
            image:fruit_2
        },
        {
            title:"추위타는 감",
            hash:[2,0,1],
            color:"#FF885D",
            image:fruit_3
        },
        {
            title:"깨끗한 사과",
            hash:[2,1,1],
            color:"#FF6262",
            image:fruit_4
        },
        {
            title:"수줍어하는 복숭아",
            hash:[1,0,0],
            color:"#FFBAA2",
            image:fruit_5
        },
        {
            title:"매끈한 바나나",
            hash:[1,1,0],
            color:"#FFBF00",
            image:fruit_6
        },
        {
            title:"센치한 자몽",
            hash:[1,0,1],
            color:"#FF885D",
            image:fruit_7
        },
        {
            title:"쫀쫀한 애플망고",
            hash:[1,1,1],
            color:"#FFBB31",
            image:fruit_8
        },
        {
            title:"사춘기 홍시",
            hash:[0,0,0],
            color:"#FF8917",
            image:fruit_9
        },
        {
            title:"부유한 올리브",
            hash:[0,1,0],
            color:"#A2BE50",
            image:fruit_10
        },
        {
            title:"연약한 귤",
            hash:[0,0,1],
            color:"#FFA61A",
            image:fruit_11
        },
        {
            title:"튼튼한 코코넛",
            hash:[0,1,1],
            color:"#563520",
            image:fruit_12
        },
    ]

    const onBackMain = () => {
        Router.back()
    }

    return(
        <>
            <Global />

            <div className={topStyles.top_wrapper}>
                <div className={topStyles.back_btn} onClick={onBackMain}></div>
                <div className={topStyles.top_text} onClick={onBackMain}>돌아가기</div>
                <div className={topStyles.close_btn} onClick={onBackMain}></div>
            </div>

            <div className={styles.type_title}>내 피부 타입은...</div>

            <div className={styles.img_wrapper}>
                <Image src={fruitList[id].image}></Image>
            </div>

            <div className={styles.item_title}>{fruitList[id].title}</div>

            <div className={styles.item_hash}>{
                "#"+tagList.dry_oil[fruitList[id].hash[0]]+" #"+tagList.sens_regist[fruitList[id].hash[1]]+" #"+tagList.pigment[fruitList[id].hash[2]]
            }</div>

            <div className={styles.progress_wrapper}>
                <div className={styles.progress_text}>지성</div>
                <Progress className={`${styles.progress} ${styles.progress_1}`} percent={fruitList[id].hash[0] * 50} showInfo={false} status="active" />
                <div className={styles.progress_text}>건성</div>
            </div>

            <div className={styles.progress_wrapper}>
                <div className={styles.progress_text}>민감</div>
                <Progress className={`${styles.progress} ${styles.progress_2}`} percent={fruitList[id].hash[1] * 100} showInfo={false} status="active" />
                <div className={styles.progress_text}>저항</div>
            </div>

            <div className={styles.progress_wrapper} style={{borderBottom:"0.5px solid #E6E6E6"}}>
                <div className={styles.progress_text}>색소</div>
                <Progress className={`${styles.progress} ${styles.progress_3}`} percent={fruitList[id].hash[2] * 100} showInfo={false} status="active" />
                <div className={styles.progress_text}>비색소</div>
            </div>

        </>
    )
}

export default Id
