import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/onboad.module.scss"
import Router from "next/router";

const Main =() => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const onClickFirst = () => {
        Router.push("/test")
    }

    const onClickSecond = () => {
        Router.push("/type")
    }

    const onClickThird = () => {
        Router.push("/diary")
    }

    return(
        <>
            <Slider {...settings}>
                <div className={styles.boad_wrapper}>
                    <div className={styles.green_title}>셀카 </div>
                    <div className={styles.black_title}>
                         한 장으로 간단하게
                    </div>
                    <div className={styles.side_title}>누구나 쉽게 피부 확인 가능</div>
                    <div className={styles.boad_img}></div>
                </div>
                <div className={styles.boad_wrapper}>
                    <div className={styles.green_title}>AI와 문진으로 </div>
                    <div className={styles.black_title}>
                         정확하게
                    </div>
                    <div className={styles.side_title}>누구나 쉽게 피부 확인 가능</div>
                    <div className={styles.boad_img}></div>
                </div>
                <div className={styles.boad_wrapper}>
                    <div className={styles.green_title}>매일아침 </div>
                    <div className={styles.black_title}>
                        꾸준하게
                    </div>
                    <div className={styles.side_title}>누구나 쉽게 피부 확인 가능</div>
                    <div className={styles.boad_img}></div>
                </div>
            </Slider>
            <div className={`${styles.card} ${styles.first_card}`} onClick={onClickFirst}><div>피부타입 테스트 시작하기</div></div>
            <div className={`${styles.card} ${styles.second_card}`} onClick={onClickSecond}><div>피부타입 종류</div></div>
            <div className={`${styles.card} ${styles.third_card}`} onClick={onClickThird}><div>피부 다이어리 시작하기</div></div>
            <div className={styles.etc}></div>
        </>
    )
}

export default Main
