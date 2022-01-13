import React, {useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/test.module.scss";
import Router from "next/router";
import { Radio } from 'antd';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  .ant-radio-group{
    text-align: left;
    >label{
      width: 100%;
      min-width: 300px;
      vertical-align: top;
      padding-bottom: 5px;
      border-bottom: 1px solid rgba(85, 85, 85, 0.5);
      >span{
        vertical-align: top;
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 34px;
        letter-spacing: 0.15px;
        color: #181818;
      }
    }
  }
  .ant-radio-wrapper{
    >span{
      vertical-align: top;
    }
  }
  .ant-radio{
    width: 24px;
    height: 28px;
    padding-top: 8px;
    > input{
      width: 24px;
      height: 24px;
    }
    > span{
      width: 24px;
      height: 24px;
    }
  }
`

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={styles.next_arrow} onClick={onClick}></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={styles.prev_arrow} onClick={onClick}></div>
    );
}

const Test = () => {
    const [slideNum, setSlideNum] = useState(1)
    const [toggle, setToggle] = useState(0)
    const [list,setList] = useState([
        {
            title:"지성, 건성 진단",
            subTitle:"세안 이후 기초제품, 보습제 등 아무것도 바르지 않은 상태에서 2~3시간 후에 양 볼을 보면 어떤가요?",
            checkList:[
                "매우 거칠거나 각질이 일어난다.","당기는 느낌이 든다.","적당히 촉촉하다.","윤기가 흐르고 번들거린다."
            ]
        },
        {
            title:"지성, 건성 진단",
            subTitle:"세안 이후 기초제품, 보습제 등 아무것도 바르지 않은 상태에서 2~3시간 후에 양 볼을 보면 어떤가요?",
            checkList:[
                "매우 거칠거나 각질이 일어난다.","당기는 느낌이 든다.","적당히 촉촉하다.","윤기가 흐르고 번들거린다."
            ]
        },
        {
            title:"지성, 건성 진단",
            subTitle:"세안 이후 기초제품, 보습제 등 아무것도 바르지 않은 상태에서 2~3시간 후에 양 볼을 보면 어떤가요?",
            checkList:[
                "매우 거칠거나 각질이 일어난다.","당기는 느낌이 든다.","적당히 촉촉하다.","윤기가 흐르고 번들거린다."
            ]
        },
        {
            title:"지성, 건성 진단",
            subTitle:"세안 이후 기초제품, 보습제 등 아무것도 바르지 않은 상태에서 2~3시간 후에 양 볼을 보면 어떤가요?",
            checkList:[
                "매우 거칠거나 각질이 일어난다.","당기는 느낌이 든다.","적당히 촉촉하다.","윤기가 흐르고 번들거린다."
            ]
        },
        {
            title:"지성, 건성 진단",
            subTitle:"세안 이후 기초제품, 보습제 등 아무것도 바르지 않은 상태에서 2~3시간 후에 양 볼을 보면 어떤가요?",
            checkList:[
                "매우 거칠거나 각질이 일어난다.","당기는 느낌이 든다.","적당히 촉촉하다.","윤기가 흐르고 번들거린다."
            ]
        },
    ])

    const settings = {
        id:"slider",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setSlideNum(next + 1),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const onBackMain = () => {
        Router.push("/")
    }

    const onChange = (e) => {
        setToggle(e.target.value)
    }

    return(
        <>
            <Global />
            <div className={styles.top_wrapper}>
                <div className={styles.back_btn} onClick={onBackMain}></div>
                <div className={styles.top_text} onClick={onBackMain}>설문 나가기</div>
                <div className={styles.close_btn} onClick={onBackMain}></div>
            </div>
            <Slider {...settings}>
                {
                    list.map((v) => (
                        <div>
                            <div className={styles.test_title}>{v.title}</div>
                            <div className={styles.test_sub_title}>
                                {v.subTitle}
                            </div>
                            <div className={styles.check_box_group}>
                                <Radio.Group onChange={onChange} value={toggle}>
                                    {
                                        v.checkList.map((x,i) =>(
                                            <>
                                                <Radio value={i}>{x}</Radio>
                                                <div></div>
                                            </>
                                        ))
                                    }
                                </Radio.Group>
                            </div>
                        </div>
                    ))
                }
            </Slider>



            <div className={styles.nav_group}>

                <div>{slideNum} / 12</div>

            </div>

        </>
    )
}

export default Test
