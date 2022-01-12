import React, {useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/test.module.scss";
import Router from "next/router";

const Test = () => {
    const [slideNum, setSlideNum] = useState(1)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSlideNum(next + 1)
    };

    const onBackMain = () => {
        Router.push("/")
    }

    return(
        <>
            <div className={styles.top_wrapper}>
                <div className={styles.back_btn} onClick={onBackMain}></div>
                <div className={styles.top_text} onClick={onBackMain}>설문 나가기</div>
                <div className={styles.close_btn} onClick={onBackMain}></div>
            </div>
            <Slider {...settings}>
                <div>
                    <div className={styles.test_title}>지성, 건성 진단</div>
                    <div className={styles.test_sub_title}>
                        자신이 느끼는 피부타입은
                        <br/>
                        무엇인가요?
                    </div>
                    <div className={styles.check_box_group}>

                    </div>
                </div>
            </Slider>

            <div className={styles.nav_group}>
                <div></div>
                <div>{slideNum} / 12</div>
                <div></div>
            </div>

        </>
    )
}

export default Test
