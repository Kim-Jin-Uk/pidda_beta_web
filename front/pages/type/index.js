import React, {useState} from "react";
import styles from "../../styles/type.module.scss";
import topStyles from "../../styles/test.module.scss";
import textStyles from "../../styles/onboad.module.scss";
import Router from "next/router";
import fruit_1 from "../../images/type/fruit_1.svg"
import fruit_2 from "../../images/type/fruit_2.svg"
import fruit_3 from "../../images/type/fruit_3.svg"
import fruit_4 from "../../images/type/fruit_4.svg"
import fruit_5 from "../../images/type/fruit_5.svg"
import fruit_6 from "../../images/type/fruit_6.svg"
import fruit_7 from "../../images/type/fruit_7.svg"
import fruit_8 from "../../images/type/fruit_8.svg"
import fruit_9 from "../../images/type/fruit_9.svg"
import fruit_10 from "../../images/type/fruit_10.svg"
import fruit_11 from "../../images/type/fruit_11.svg"
import fruit_12 from "../../images/type/fruit_12.svg"
import Image from "next/image";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    span{
      width: 100% !important;
      height: 100% !important;
    }
`

function FruitItem(v) {

    const onClickItem = (i) => {
        Router.push(`/type/${i}`)
    }

    return(
        <div className={styles.fruit_item_wrapper} onClick={() => onClickItem(v.i)}>
            <div className={styles.fruit_title} style={{color:`${v.v.color}`}}>{v.v.title}</div>
            <div className={styles.fruit_hash}>{v.v.hash}</div>
            <div className={styles.fruit_img}>
                <Image src={v.v.image}></Image>
            </div>
        </div>
    )
}

const Type = () => {
    const onBackMain = () => {
        Router.back()
    }

    const fruitList = [
        {
            title:"예민한 밤",
            hash:"#건성 #민감 #색소",
            color:"#9E6C50",
            image:fruit_1
        },
        {
            title:"가을타는 블루베리",
            hash:"#건성 #저항 #색소",
            color:"#9B8DCF",
            image:fruit_2
        },
        {
            title:"추위타는 감",
            hash:"#건성 #민감 #비색소",
            color:"#FF885D",
            image:fruit_3
        },
        {
            title:"깨끗한 사과",
            hash:"#건성 #저항 #비색소",
            color:"#FF6262",
            image:fruit_4
        },
        {
            title:"수줍어하는 복숭아",
            hash:"#중성 #민감 #색소",
            color:"#FFBAA2",
            image:fruit_5
        },
        {
            title:"매끈한 바나나",
            hash:"#중성 #저항 #색소",
            color:"#FFBF00",
            image:fruit_6
        },
        {
            title:"센치한 자몽",
            hash:"#중성 #민감 #비색소",
            color:"#FF885D",
            image:fruit_7
        },
        {
            title:"쫀쫀한 애플망고",
            hash:"#중성 #저항 #비색소",
            color:"#FFBB31",
            image:fruit_8
        },
        {
            title:"사춘기 홍시",
            hash:"#지성 #민감 #색소",
            color:"#FF8917",
            image:fruit_9
        },
        {
            title:"부유한 올리브",
            hash:"#지성 #저항 #색소",
            color:"#A2BE50",
            image:fruit_10
        },
        {
            title:"연약한 귤",
            hash:"#지성 #민감 #비색소",
            color:"#FFA61A",
            image:fruit_11
        },
        {
            title:"튼튼한 코코넛",
            hash:"#지성 #저항 #비색소",
            color:"#563520",
            image:fruit_12
        },
    ]

    return(
        <>
            <Global />
            <div className={topStyles.top_wrapper}>
                <div className={topStyles.back_btn} onClick={onBackMain}></div>
                <div className={topStyles.top_text} onClick={onBackMain}>돌아가기</div>
            </div>

            <div className={styles.text_wrapper}>
                <div className={textStyles.green_title}>AI가 </div>
                <div className={textStyles.black_title}>분석한</div>
                <div className={textStyles.black_title}>피부 타입 종류</div>
            </div>

            <div className={styles.fruit_list_wrapper}>
                {fruitList.map((v, i) => (
                    <FruitItem v={v} i ={i}></FruitItem>
                ))}
            </div>
        </>
    )
}

export default Type
