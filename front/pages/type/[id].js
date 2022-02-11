import React, {useEffect, useState} from "react";
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
import {createGlobalStyle} from "styled-components";
import Image from "next/image";
import topStyles from "../../styles/test.module.scss";
import cardStyles from "../../styles/onboad.module.scss";
import KakaoShareButton from "../../components/KakaoShareButton";
import useScript from "../../hooks/use-script";
import {message} from "antd";

const Global = createGlobalStyle`
  span{
    width: 100% !important;
    height: 100% !important;
  }
  pre{
    font-family: 'Noto Sans KR', 'Roboto' !important;
  }
`

function ClipboardCopy() {
    const doCopy = text => {
// 흐름 1.
        if (!document.queryCommandSupported("copy")) {
            return message.warning("복사하기가 지원되지 않는 브라우저입니다.");
        }
// 흐름 2.
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.top = 0;
        textarea.style.left = 0;
        textarea.style.position = "fixed";
// 흐름 3.
        document.body.appendChild(textarea);
// focus() -> 사파리 브라우저 서포팅
        textarea.focus();
// select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
        textarea.select();
// 흐름 4.
        document.execCommand("copy");
// 흐름 5.
        document.body.removeChild(textarea);
        message.success("클립보드에 복사되었습니다.");
    };
    return (
        <div className={styles.share_btn_link} onClick={() => doCopy(window.location.href)}></div>
    );
}

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const tagList = {
        dry_oil:["지성", "중성", "건성"],
        sens_regist:["민감","저항"],
        pigment:["색소","비색소"]
    }
    const [dryOilPercent,setDryOilPercent] = useState(0)
    const [sensResistPercent,setSensResistPercent] = useState(0)
    const [pigmentPercent,setPigmentPercent] = useState(0)

    useScript('https://developers.kakao.com/sdk/js/kakao.js')

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

    const dryBlock = [
        ["피지 분비량이 많은 당신!\n" +
        "타입설명: 지성피부는 기름샘과 땀샘 활동이 활발해 피지 분비가 많은 타입입니다 타 피부 타입에 비해 잔주름이 잘 나타나지 않는 편입니다 하지만 유분이 많아 화장이 잘 지워지는 편이라 주의가 필요합니다. 여드름 피부로 확장되기 쉬워 유분 관리가 필요합니다.\n\n"
        ,
        "관리할 때 피지를 조절하고 수분을 공급해 주는 것이 핵심입니다. 얼굴에 유분이 많아 오염물질이 빠져나가기 어려워 꼼꼼한 세안이 중요합니다. 스킨케어는 최소한으로 무거운 제형보다는 로션이나 세럼, 젤 같은 가벼운 타입의 제품을 사용하여 수분은 지켜주되 답답하지 않도록 해주는 것이 좋습니다.\n\n"],

        ["피부가 촉촉하고 유수분 밸런스가 잘 맞는 당신\n" +
        "타입설명: 타고난 유수분 밸런스를 가진 피부로 피부 표면이 촉촉하며 수분량이 적당해 당김이 없는 탄력 있는 피부입니다 피지 분비량이 적당하여 번들거리지 않고 윤기가 있습니다.\n" +
        "피부 결이 섬세해 화장이 잘 받으며 지속력이 좋은 편입니다.\n\n"
        ,
        "유수분 밸런스가 완벽하지만, 환경적 요인에 의한 피부 변화가 있기에 상황에 맞게 관리해 주어야 합니다. 여름에는 유분을 줄이고 산뜻하게, 겨울에는 건조하지 않도록 유수분 충전을 충분히 해주면 좋습니다=\n\n"],

        ["각질층 수분 함량이 10% 미만인 건조함을 자주 느끼는 피부 타입입니다.\n" +
        "모공이 작고 피부결이 섬세하지만 잔주름이나 각질이 비교적 두드러지는 편이에요 \n" +
        "피부 보호막이 얇아 손상되기 쉽기 때문에 꾸준한 관리가 필수적입니다. \n\n"
        ,
        "세안 후 건조함을 느끼기 전에 꼭 보습크림을 발라 기초를 탄탄하게 관리해 주셔야 합니다. 스킨케어 단계에서 충분히 수분을 공급해주고 메이크업 단계에 들어가야 메이크업이 뜨지 않습니다. 일주일에 두세 번 정도 자극 없는 스크럽으로 각질 관리를 해주는 것도 좋습니다.\n\n"]
    ]
    const sensBlock = [
        ["피부가 섬세한 당신!\n" +
        "타입설명: 민감성 피부는 사소한 자극에도 알레르기 반응을 일으키는 피부를 말합니다!\n" +
        "외부 기후 조건에 의해 얼굴이 쉽게 달아오르고 가려움증을 느끼거나 물리적인 자극 시 피부의 즉각적인 반응이 나타나고 화끈거림을 느낄 수 있습니다.\n\n"
        ,
        "피부 자극을 최소화하고 진정시키며 안정감 있게 유지하고 보호하는 게 포인트입니다\n" +
        "자외선, 온도, 습도 등 외부환경의 급격한 변화를 피하는 것이 좋습니다. 민감성 피부는 선천적인 타입만 아니면 외부환경으로 인해 후천적으로 변하는 타입이라 저 자극 민감성 화장품을 사용하면서 관리하는 게 중요합니다.\n\n"],
        ["튼튼한 피부를 가진 당신!\n" +
        "타입설명: 피부 장벽이 견고해서 외부적인 변화에 대해 견디는 힘이 강합니다.\n" +
        "저항성 피부는 여러 가지 피부 제품에 거의 부작용을 겪지 않습니다. 강한 각질층을 가져 흡수가 적기 때문에 유해 성분도 저항하지만 유익한 성분 흡수에 저항성이 있을 수 있다는 단점도 있습니다.\n\n"
        ,
        ""]
    ]
    const pigmentBlock = [
        ["색소 침착이 쉽게 되는 당신!\n" +
        "타입설명: 색소성 피부는 색소 침착이 쉽게 되는 피부를 말합니다. 주근깨, 기미, 검버섯과 같은 색소 침착은 시간이 지나면 자연스럽게 사라지는 일반적인 피부 트러블과는 달리 계속 방치할 경우 오히려 색이 짙어지고 증상이 악화될 수 있기 때문에 집중 관리가 필요합니다.\n\n"
        ,
        "색소침착에 대비하여 자외선 차단제를 계절에 상관없이 매일매일 꼼꼼히 발라 줘야합니다. 건조할수록 쉽게 그을러지기 쉽기 때문에 스킨케어를 꼼꼼히 해줘 촉촉한 피부를 유지시켜주는 것도 중요합니다.\n\n"],
        ["고른 피부색이 가진 당신!\n" +
        "타입설명: 멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입입니다. 갈색 반점이 거의 없고 피부색이 전반적으로 균일한 피부입니다. 그래도 방심하지 말고 피부 노화와 건강을 위해 사계절 내내 매일매일 자외선 차단제 발라주는 것이 좋습니다.\n\n"
        ,
        ""]
    ]

    const dryTitle = [
        "피지 분비량이 많은 당신!\n",
        "피부가 촉촉하고 유수분 밸런스가 잘 맞는 당신!\n",
        "건조한 피부를 가진 당신!\n"
    ]
    const sensTitle = [
        "피부가 섬세한 당신!\n",
        "튼튼한 피부를 가진 당신!\n"
    ]
    const pigmentTitle = [
        "색소 침착이 쉽게 되는 당신!\n",
        "고른 피부색을 가진 당신!\n"
    ]

    const onBackMain = () => {
        Router.back()
    }

    useEffect(() => {
        if (id){
            setDryOilPercent((100 / 6) + (2 - fruitList[id].hash[0]) * (100 / 3))
            setSensResistPercent((100 / 4) + (1 - fruitList[id].hash[1]) * (100 / 2))
            setPigmentPercent((100 / 4) + (1 - fruitList[id].hash[2]) * (100 / 2))
        }
    },[id])

    const onClickTest = () => {
        Router.replace("/test")
    }

    const handleCopyClipBoard = async () => {
        try {
            const currentUrl = window.location.href
            await navigator.clipboard.writeText(currentUrl);
            message.success('링크가 복사되었습니다');
        } catch (error) {
            console.log(error)
        }
    };

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
                <Image src={
                    id
                        ? fruitList[id].image
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
                } width="100%" height="100%"></Image>
            </div>

            <div className={styles.item_title}>{
                id
                    ? fruitList[id].title
                    : ""
            }</div>

            <div className={styles.item_hash}>{
                id
                    ? "#"+tagList.dry_oil[fruitList[id].hash[0]]+" #"+tagList.sens_regist[fruitList[id].hash[1]]+" #"+tagList.pigment[fruitList[id].hash[2]]
                    : ""
            }</div>

            <div className={topStyles.rail_wrapper}>
                <div className={topStyles.rail}>
                    <div style={{backgroundColor:"#897493",left:`${dryOilPercent}%`}} className={topStyles.dot}></div>
                    <div className={topStyles.label_wrapper1}>
                        <div className={topStyles.label}>건성</div>
                    </div>
                    <div className={topStyles.label_wrapper1}>
                        <div className={topStyles.label}>중성</div>
                    </div>
                    <div style={{borderRight: "3px solid #897493"}} className={topStyles.label_wrapper1}>
                        <div className={topStyles.label}>지성</div>
                    </div>
                </div>
            </div>
            <div className={topStyles.rail_wrapper}>
                <div className={topStyles.rail}>
                    <div style={{backgroundColor:"#CFA0B5",left:`${sensResistPercent}%`}} className={topStyles.dot}></div>
                    <div className={topStyles.label_wrapper2}>
                        <div className={topStyles.label}>저항</div>
                    </div>
                    <div style={{borderRight: "3px solid #CFA0B5"}} className={topStyles.label_wrapper2}>
                        <div className={topStyles.label}>민감</div>
                    </div>
                </div>
            </div>
            <div style={{borderBottom: "0.5px solid #e6e6e6"}} className={topStyles.rail_wrapper}>
                <div className={topStyles.rail}>
                    <div style={{backgroundColor:"#DDA753",left:`${pigmentPercent}%`}} className={topStyles.dot}></div>
                    <div className={topStyles.label_wrapper3}>
                        <div className={topStyles.label}>비색소</div>
                    </div>
                    <div style={{borderRight: "3px solid #DDA753"}} className={topStyles.label_wrapper3}>
                        <div className={topStyles.label}>색소</div>
                    </div>
                </div>
            </div>

            <div style={{marginBottom:"16px"}} className={topStyles.type_title}>내 피부의 특징과 관리팁</div>
            <div style={{marginBottom:"34px"}} className={topStyles.tag_text}>{
                id
                    ? "#"+tagList.dry_oil[fruitList[id].hash[0]]+" #"+tagList.sens_regist[fruitList[id].hash[1]]+" #"+tagList.pigment[fruitList[id].hash[2]]
                    : ""
            }</div>

            <div style={{border: "2px solid #897493"}} className={topStyles.card_block}>
                <div className={styles.circle_first}></div>
                <pre style={{fontWeight:"700",marginBottom:"8px",display:"inline-block",width:"calc(100% - 30px)",verticalAlign:"top"}}>{
                    id
                        ? dryTitle[fruitList[id].hash[0]]
                        : ""
                }</pre>
                <pre>{
                    id
                        ? dryBlock[fruitList[id].hash[0]][0]
                        : ""
                }</pre>
                <div className={styles.circle_first}></div>
                <pre style={{fontWeight:"700",marginBottom:"8px",display:"inline-block",width:"calc(100% - 30px)",verticalAlign:"top"}}>피부 관리</pre>
                <pre>{
                    id
                        ? dryBlock[fruitList[id].hash[0]][1]
                        : ""
                }</pre>
            </div>

            <div style={{border: "2px solid #CFA0B5"}} className={topStyles.card_block}>
                <div className={styles.circle_second}></div>
                <pre style={{fontWeight:"700",marginBottom:"8px",display:"inline-block",width:"calc(100% - 30px)",verticalAlign:"top"}}>{
                    id
                        ? sensTitle[fruitList[id].hash[1]]
                        : ""
                }</pre>
                <pre>{
                    id
                        ? sensBlock[fruitList[id].hash[1]][0]
                        : ""
                }</pre>
                {
                    id
                        ?sensBlock[fruitList[id].hash[1]][1] === ""
                            ?<></>
                            :
                            <>
                                <div className={styles.circle_second}></div>
                                <pre style={{fontWeight:"700",marginBottom:"8px",display:"inline-block",width:"calc(100% - 30px)",verticalAlign:"top"}}>피부 관리</pre>
                                <pre>{
                                    id
                                        ? sensBlock[fruitList[id].hash[1]][1]
                                        : ""
                                }</pre>
                            </>
                        :<></>
                }
            </div>

            <div style={{border: "2px solid #DDA753"}} className={topStyles.card_block}>
                <div className={styles.circle_third}></div>
                <pre style={{fontWeight:"700",marginBottom:"8px",display:"inline-block",width:"calc(100% - 30px)",verticalAlign:"top"}}>{
                    id
                        ? pigmentTitle[fruitList[id].hash[2]]
                        : ""
                }</pre>
                <pre>{
                    id
                        ? pigmentBlock[fruitList[id].hash[2]][0]
                        : ""
                }</pre>
                {
                    id
                        ?pigmentBlock[fruitList[id].hash[2]][1] === ""
                            ?<></>
                            :
                            <>
                                <div className={styles.circle_third}></div>
                                <pre style={{fontWeight:"700",marginBottom:"8px",display:"inline-block",width:"calc(100% - 30px)",verticalAlign:"top"}}>피부 관리</pre>
                                <pre>{
                                    id
                                        ? pigmentBlock[fruitList[id].hash[2]][1]
                                        : ""
                                }</pre>
                            </>
                        :<></>
                }
            </div>

            <div className={topStyles.share_title}>피부 타입 공유하기</div>

            <div className={styles.share_btn_wrapper}>
                <KakaoShareButton url={""} hash={
                    id
                        ? "#"+tagList.dry_oil[fruitList[id].hash[0]]+" #"+tagList.sens_regist[fruitList[id].hash[1]]+" #"+tagList.pigment[fruitList[id].hash[2]]
                        : ""
                }></KakaoShareButton>
                <ClipboardCopy></ClipboardCopy>
            </div>
            <div onClick={onClickTest} style={{marginBottom:"30px"}} className={`${cardStyles.card} ${cardStyles.first_card}`}><div>테스트 해보기</div></div>

            <div className={topStyles.copy_right_main}></div>
        </>
    )
}

export default Id
