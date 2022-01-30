import React, {useEffect, useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/test.module.scss";
import cardStyles from "../../styles/onboad.module.scss";
import Router from "next/router";
import { Radio } from 'antd';
import {createGlobalStyle} from "styled-components";
import Link from "next/link"

const Global = createGlobalStyle`
  
  body{
    overflow: hidden;
  }
  
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
    let { className, style, onClick } = props;
    return (
        <div className={styles.prev_arrow} onClick={onClick}></div>
    );
}

const Test = () => {
    const [slideNum, setSlideNum] = useState(1)
    //7~13 건성/ 14~17 중성/ 18~28 지성
    const [dryOily, setDryOily] = useState({
        "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0,
    })
    //9∼15점: 저항성 피부 / 15.5∼36점: 민감성 피부
    const [sensResist, setSensResist] = useState({
        "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0,
    })
    //7∼14.5점: 비색소침착성 피부 유형/ 15∼28점: 색소침착성 피부 유형
    const [pigment, setPigment] = useState({
        "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0,
    })
    const [onBtn, setOnBtn] = useState(false)
    const [list,setList] = useState([
        {
            title:"지성, 건성 진단",
            subTitle:"세안 이후 기초제품, 보습제 등 아무것도 바르지 않은 상태에서 2~3시간 후에 양 볼을 보면 어떤가요?",
            checkList:[
                "매우 거칠거나 각질이 일어난다.","당기는 느낌이 든다.","적당히 촉촉하다.","윤기가 흐르고 번들거린다."
            ],
            alert:""
        },
        {
            title:"지성, 건성 진단",
            subTitle:"파우더를 사용하지 않고 기초 화장(베이스, 파운데이션)만 한 상태에서 2∼3시간 후에 당신의 화장 상태는 어떤가요?",
            checkList:[
                "각질이 일어나거나 주름 사이에 끼어 있다.", "매끈하다.", "적당히 광이 난다.","윤기가 흐르고 번들거린다.","나는 기초화장(파운데이션)을 하지 않는다."
            ],
            alert:""
        },
        {
            title:"지성, 건성 진단",
            subTitle:"거울로 얼굴을 보면 바늘 끝 크기 혹은 더 큰 크기의 커다란 모공이 얼마나 많이 있나요?",
            checkList:[
                "없다.", "T존(이마와 코)에만 약간 있다.","많다.","대단히 많다.","모른다."
            ],
            alert:"다시 한 번 보세요. 결정할 수 없을 때에만 “⑤”로 답해주세요"
        },
        {
            title:"지성, 건성 진단",
            subTitle:"자신이 느끼는 얼굴 피부는 다음 중에서 어떤 상태인가요?",
            checkList:[
                "건성","중성","복합","지성"
            ],
            alert: ""
        },
        {
            title:"지성, 건성 진단",
            subTitle:"클렌징폼으로 세안한 직후 얼굴 피부는 어떤가요?",
            checkList:[
                "건조하거나 갈라지는 느낌이 든다.","약간 건조하나 갈라지는 느낌은 없다.","정상적인 느낌이다.","기름기가 있는 느낌이다.","나는 클렌징폼을 사용하지 않는다."
            ],
            alert: "제품에 의해 당신의 피부가 건조해지면 “①”을 고르세요."
        },
        {
            title:"지성, 건성 진단",
            subTitle:"얼굴의 T존(이마와 코)에 기름기가 있나요?",
            checkList:[
                "전혀 없다.","가끔 있다.","자주 있다.","항상 있다."
            ],
            alert: ""
        },
        {
            title:"지성, 건성 진단",
            subTitle:"보습제를 바르고 2∼3시간 이후에 양 볼은 어떤가요?",
            checkList:[
                "매우 거칠거나, 각질이 일어난다.","매끄럽다.","약간 윤기가 흐른다.","윤기가 흐르고 번들거린다. 혹은 보습제의 필요성을 못 느껴서 사용하지 않는다.","귀찮아서 보습제를 사용하지 않는다. "
            ],
            alert: ""
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"얼굴에 붉게 돌출된 트러블이 발생한 경험이 있나요?",
            checkList:[
                "전혀 없다.","거의 없다.","최소한 1개월에 1회 있다.","최소한 1주일에 1회 있다."
            ],
            alert: ""
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"피부 관리용 제품(클렌저, 보습제, 색조화장품, 및 화장품 등을 포함)을 사용하면 얼굴에 뾰루지가 나거나 발진, 가려움증 혹은 따끔거리는 증상 등이 나타난 경험이 있나요?",
            checkList:[
                "전혀 없다.","거의 없다.","자주 있다.","항상 있다.","얼굴에 피부 관리용 제품을 바르지 않는다."
            ],
            alert: ""
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"과거에 여드름에 대한 진단을 받은 적이 있나요?",
            checkList:[
                "없다.","지인이 나에게 이런 증상이 있다고 얘기한다.","진단을 받았다.","심각한 경우에 해당한다.","잘 모르겠다."
            ],
            alert: ""
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"홍조 등의 얼굴이 붉어지는 증상이 있나요?",
            checkList:[
                "전혀 안 나타난다.","거의 안 나타난다.","자주 나타난다.","항상 나타난다.","잘 모르겠다."
            ],
            alert: ""
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"과거에 아토피 피부염, 습진, 또는 접촉성 피부염(알레르기성 피부 발진)으로 진단을 받은 적이 있나요?",
            checkList:[
                "없다.","지인이 나에게 이런 질환이 있는 것 같다고 한다.","있다.","심각한 경우에 해당한다.","잘 모르겠다."
            ],
            alert: ""
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"향료가 포함된 거품 입욕제, 바디로션 등을 사용하면 피부 발진이 생기거나, 가렵거나 건조한 느낌이 있나요?",
            checkList:[
                "전혀 없다.","거의 없다.","자주 나타난다.","항상 나타난다.","나는 이런 종류의 제품을 전혀 사용하지 않는다."
            ],
            alert: "이런 제품에 의해 피부에 문제가 생겨서 사용하지 않으면 “④”로 답해주세요"
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"얼굴이나 코에 붉거나 푸른색의 혈관이 얼마나 많이 보이나요?",
            checkList:[
                "없다.","드물게 보인다(얼굴 전체에서 1∼3개).","약간 보인다(얼굴 전체에서 4∼6개).","많이 보인다(얼굴 전체에서 7개 이상)."
            ],
            alert: ""
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"화장품, 자외선 차단제, 피부 관리용 제품을 사용한 후에 피부의 발적, 가려움증, 부종의 경험이 있나요?",
            checkList:[
                "전혀 없다.","때때로 있다.","자주 있다.","항상 있다.","이런 제품을 사용하지 않는다."
            ],
            alert: "발적, 가려움증, 혹은 부종 때문에 이런 제품을 사용하지 않는다면 “④”로 답하세요"
        },
        {
            title:"민감성, 저항성 진단",
            subTitle:"가족 중에서 아토피 피부염, 습진, 천식, 알레르기로 진단받은 분이 있나요?",
            checkList:[
                "없다.","가족 중 한 명이 진단 받았다.","가족 중 몇 명이 진단 받았다.","가족 중 많은 사람이 피부염, 습진, 천식, 알레르기를 가지고 있다.","잘 모르겠다."
            ],
            alert: ""
        },
        {
            title:"색소성, 비색소성 진단",
            subTitle:"트러블 발생 후 혹은 피부 속으로 파고 들어간 모발에 의해 짙은 갈색이나 검은 점이 생기나요?",
            checkList:[
                "전혀 생기지 않는다.","때때로 생긴다.","자주 생긴다.","항상 생긴다.","여드름이나 피부 속으로 파고 들어간 모발이 전혀 없다."
            ],
            alert: ""
        },
        {
            title:"색소성, 비색소성 진단",
            subTitle:"자주 접히는 피부(팔꿈치, 겨드랑이 등)에 색소침착이 있나요?",
            checkList:[
                "전혀없다.","약간 있는 편이다.","약간 짙다.","짙게 있다."
            ],
            alert: ""
        },
        {
            title:"색소성, 비색소성 진단",
            subTitle:"과거에 얼굴 기미(옅거나 짙은 갈색 혹은 회색 반점)로 진단받은 적이 있거나 현재 기미가 있나요?",
            checkList:[
                "없다.","한 번 있었지만, 소실되었다.","있다.","있으며, 심각한 경우이다.","잘 모르겠다."
            ],
            alert: ""
        },
        {
            title:"색소성, 비색소성 진단",
            subTitle:"얼굴, 가슴, 등, 혹은 양 팔에 작은 갈색 점(주근깨, 일광 흑자)이 있거나, 있었던 적이 있나요?",
            checkList:[
                "없다.","약간 있다(1∼5개).","많이 있다(6∼15개).","대단히 많다(16개 이상)."
            ],
            alert: ""
        },
        {
            title:"색소성, 비색소성 진단",
            subTitle:"며칠 동안 계속해서 햇빛에 노출되면 어떤 일이 일어났나요?",
            checkList:[
                "햇빛에 타서 물집이 생겼으나 피부색은 변하지 않는다.","피부색이 약간 짙어졌다.","피부색이 많이 짙어졌다.","원래 피부색이 짙어서 더 짙어졌는지 구분이 어렵다."
            ],
            alert: ""
        },
        {
            title:"색소성, 비색소성 진단",
            subTitle:"햇볕에 나가면, 주근깨(작은 1∼2 mm 크기의 편평한 점)가 생기나요?",
            checkList:[
                "전혀 생기지 않는다.","매년 약간씩 작은 주근깨가 생긴다.","자주 주근깨가 생긴다.","피부가 이미 짙어서 주근깨가 있는 지 구분이 어렵다.","햇볕에 전혀 나가지 않는다."
            ],
            alert: ""
        },
        {
            title:"색소성, 비색소성 진단",
            subTitle:"부모님 중의 어느 한 분이라도 주근깨가 있나요? ",
            checkList:[
                "없다.","얼굴에 약간 있었다.","얼굴에 많이 있었다.","얼굴, 가슴, 목, 양쪽 어깨에 많이 있었다.","잘 모르겠다."
            ],
            alert: "두 분이 모두 있으면 주근깨가 가장 많았던 분과 관련된 질문에 답해 주세요."
        },
    ])

    const settings = {
        id:"slider",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setSlideNum(next + 1)
            for (let i = 1; i < next + 1; i++) {
                if (dryOily[`${i}`] === 0){
                    console.log(i)
                    alert(`${i}번 문항을 입력해주세요`)
                    break
                }else if (sensResist[`${i - 7}`] === 0){
                    console.log(i - 7)
                    alert(`${i}번 문항을 입력해주세요`)
                    break
                }else if (pigment[`${i - 16}`] === 0){
                    console.log(i - 16)
                    alert(`${i}번 문항을 입력해주세요`)
                    break
                }
            }
        },
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const onBackMain = () => {
        Router.back()
    }

    const onChange = (e) => {
        if (slideNum < 8){
            const field = {}
            if (e.target.value !== 4){
                field[`${slideNum}`] = e.target.value + 1
            }else {
                field[`${slideNum}`] = 2.5
            }
            setDryOily({...dryOily, ...field})
        }
        else if(slideNum < 17){
            const field = {}
            if (e.target.value !== 4){
                field[`${slideNum - 7}`] = e.target.value + 1
            }else {
                field[`${slideNum - 7}`] = 2.5
            }
            setSensResist({...sensResist, ...field})
        }
        else {
            const field = {}
            if (e.target.value !== 4){
                field[`${slideNum - 16}`] = e.target.value + 1
            }else {
                field[`${slideNum - 16}`] = 2.5
            }
            setPigment({...pigment, ...field})
        }
    }

    useEffect(() => {
        let setter = true
        for (let i = 1; i < 24; i++) {
            if (dryOily[`${i}`] === 0){
                setter = false
                break
            }else if (sensResist[`${i - 7}`] === 0){
                setter = false
                break
            }else if (pigment[`${i - 16}`] === 0){
                setter = false
                break
            }
        }
        setOnBtn(setter)
    },[dryOily,sensResist,pigment])

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
                                <Radio.Group onChange={onChange}>
                                    {
                                        v.checkList.map((x,i) =>(
                                            <>
                                                <Radio value={i}>{x}</Radio>
                                                <div></div>
                                            </>
                                        ))
                                    }
                                </Radio.Group>
                                <div className={styles.alert_text}>{v.alert}</div>
                            </div>
                        </div>
                    ))
                }
            </Slider>

            <div className={styles.nav_group}>{slideNum} / 23</div>
            {
                onBtn
                    ? <Link href={{
                        pathname: `/test/analysis`, // 라우팅 id
                        query: {
                            dry: JSON.stringify(dryOily),
                            sens: JSON.stringify(sensResist),
                            pigment: JSON.stringify(pigment),
                        }, // props
                    }}
                    ><a><div className={`${cardStyles.card} ${cardStyles.first_card} ${styles.card}`}><div>진단 결과 보기</div></div></a></Link>
                    : <div style={{cursor:"none", background:"#e8e8e8"}} className={`${cardStyles.card} ${cardStyles.first_card} ${styles.card}`}><div>진단 결과 보기</div></div>
            }
            <div className={styles.copy_right}></div>


        </>
    )
}

export default Test
