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
`

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
        "지성피부는 기름샘과 땀샘 활동이 활발해 피지가 많이 분비되는 타입이에요😊 다른 피부 타입에 비해 잔주름이 잘 나타나지 않는 특징을 가지고 있어요👍🏻피지 분비량이 많아 모공이 크고 피부가 번들거려서 화장이 잘 지워지는 편이에요💦 여드름 피부로 확장되기 쉬워 유분 관리가 필요해요!\n" +
        "\n" +
        "관리할 때 피지 분비를 조절하고 수분💧을 공급해 주는 것이 핵심이에요! 얼굴에 유분이 많으면 오염물질과 피지가 섞이기 쉬워 꼼꼼한 세안😶‍🌫️이 중요해요. 그러나 과도한 세안은 피부에 자극이 갈 수 있으니 클렌징 워터나 로션 등의 산뜻한 제품으로 1차 세안 후 pH 수치를 맞출 수 있는 약산성 폼으로 가볍게 마무리해 주면 좋아요!\n" +
        "스킨케어는 최소한으로 무거운 제형보다는 로션이나 세럼, 젤 같은 가벼운 타입의 제품을 사용하여 수분은 지켜주되 답답하지 않도록 해줘요🌿",

        "Wow 타고난 유수분 밸런스를 가졌어요👍🏻 피부 표면이 촉촉하며 탄력 있고 수분량이 적당하여 당김 현상이 없고 피부 표면에 윤기가 있어요✨ 피지 분비량이 적당하여 번들거리지 않아요.\n" +
        "피부 결이 섬세하고 화장이 잘 받으며 지속력이 좋아요.\n" +
        "\n" +
        "유수분 밸런스가 완벽한 피부 타입이지만 계절🍁이나 환경적 요인💨에 의해 피부 변화가 일어날 수 있기 때문에 상황에 맞게 관리해 주어야 해요!\n" +
        "여름🏖에는 산뜻하게 기초 케어를 해주고, 겨울❄️에는 유수분 충분히 챙겨주어야 해요.\n" +
        "주 2회 정도는 깨끗하게 딥 클렌징해 주고 아침🌤 세안은 약산성 비누로 가볍게, 저녁🌙에는 메이크업에 따라 클렌저를 고르고, 찬물로 마무리하면 좋아요👍🏻",

        "각질층 수분 함량이 10% 미만인 피부로 피지 분비량이 적어서 건조함을 자주 느끼는 피부 타입이에요😊 세안 후 따로 스킨케어를 해주지 않으면 피부가 땡기는 느낌이 종종 드셨을 거예요. 모공이 작고 피부결이 섬세하지만 때문에 잔주름이나 화장 들뜸이 다른 피부 타입에 비해 심한 편이에요ㅠㅠ\n" +
        "\n" +
        "피부 보호막이 얇아 손상되기 쉬워 꾸준한 관리가 필요해요!\n" +
        "세안으로 인해 수분을 지나치게 뺏지 않고 보습크림으로 수분을 유지시켜 건조함을 완화시켜줘야 해요. 낮☀️에는 자극 없는 세안제로 얼굴을 씻고 스킨케어 단계에서 수분을 충분히 공급해 주고 메이크업 단계에 들어가야 메이크업이 잘 먹고 뜨지 않아요!\n" +
        "밤🌙에도  마찬가지로 자극 없는 세안제로 가볍게 세안하고 미지근한 물로 마무리해 주세요😶‍🌫️\n" +
        "세안 후 건조함을 느끼기 전에 꼭 수분크림💧등을 발라 기초를 탄탄하게 관리해 주셔야 해요. 건성 피부는 다른 피부 타입에 비해 각질이 많아 피부가 쉽게 칙칙해지고 거칠어 보이기 때문에 일주일에 한 번 정도 자극 없는 스크럽을 사용해 주는 것도 좋아요👍🏻"
    ]
    const sensBlock = [
        "민감성 피부는 사소한 자극에도 알레르기 반응을 일으키는 피부를 말해요😊\n" +
        "피부 표피가 얇아 많은 자극을 느낄 수 있는 선천적인 요인과 피부관리를 잘못했거나 컨디션이 안 좋아서 생기는 후천적인 요인이 있어요.\n" +
        "외부 기후 조건에 의해 얼굴이 쉽게 달아오르고 가려움증💥을 느끼거나\n" +
        "물리적인 자극 시 피부의 즉각적인 반응이 나타나고 화끈거림을 느낄 수 있어요.\n" +
        "\n" +
        "정상 피부에 비해 조절 기능과 면역기능이 저하되어 있어 피부 자극을 최소화하고 진정시키며 안정감 있게 유지하고 보호하는 게 포인트에요✨\n" +
        "자외선☀️, 온도🌡, 습도💧등 외부환경의 급격한 변화를 피하는 것이 좋아요. 민감성 피부는 선천적인 타입만 아니면 외부환경으로 인해 후천적으로 변하는 타입이라 균형 있는 식사🍴를 하고 저자극 민감성 화장품을 사용하면서 관리하는 게 중요해요!\n" +
        "물을 자주 마셔 체내 수분을 공급해 주고, 보습제를 통해 피부 수분을 관리해 줘야 해요! 특히 봄철에는 자외선도 자외선이지만 일교차가 커지고 황사🌫,꽃가루🌸에 대한 노출이 늘어나기 때문에 외출 전에 미세먼지, 황사, 자외선 지수를 확인하는 습관을 들이는 게 좋아요👍🏻피부가 섬세한 당신!\n" +
        "민감성 피부는 사소한 자극에도 알레르기 반응을 일으키는 피부를 말해요😊\n" +
        "피부 표피가 얇아 많은 자극을 느낄 수 있는 선천적인 요인과 피부관리를 잘못했거나 컨디션이 안 좋아서 생기는 후천적인 요인이 있어요.\n" +
        "외부 기후 조건에 의해 얼굴이 쉽게 달아오르고 가려움증💥을 느끼거나\n" +
        "물리적인 자극 시 피부의 즉각적인 반응이 나타나고 화끈거림을 느낄 수 있어요.\n" +
        "\n" +
        "정상 피부에 비해 조절 기능과 면역기능이 저하되어 있어 피부 자극을 최소화하고 진정시키며 안정감 있게 유지하고 보호하는 게 포인트에요✨\n" +
        "자외선☀️, 온도🌡, 습도💧등 외부환경의 급격한 변화를 피하는 것이 좋아요. 민감성 피부는 선천적인 타입만 아니면 외부환경으로 인해 후천적으로 변하는 타입이라 균형 있는 식사🍴를 하고 저자극 민감성 화장품을 사용하면서 관리하는 게 중요해요!\n" +
        "물을 자주 마셔 체내 수분을 공급해 주고, 보습제를 통해 피부 수분을 관리해 줘야 해요! 특히 봄철에는 자외선도 자외선이지만 일교차가 커지고 황사🌫,꽃가루🌸에 대한 노출이 늘어나기 때문에 외출 전에 미세먼지, 황사, 자외선 지수를 확인하는 습관을 들이는 게 좋아요👍🏻",

        "피부 장벽이 견고해서 외부적인 스트레스에 대해 견디는 힘이 강해요😊\n" +
        "저항성 피부는 여러 가지 피부 제품에 거의 부작용을 겪지 않아요💎 강한 각질층을 가져 흡수가 적기 때문에 유해 성분도 저항하지만 유익한 성분 흡수에 저항성이 있을 수 있다는 단점이 있어요."
    ]
    const pigmentBlock = [
        "색소성 피부는 멜라닌이 비정상적으로 과잉 생성되면서 색소 침착이 쉽게 되는 피부를 말해요😊 자외선, 스트레스, 여성호르몬, 내장 장애 등의 원인으로 발생해요.\n" +
        "기미, 주근깨, 갈색 반점이 잘 생기는 피부에요.\n" +
        "주근깨, 기미, 검버섯과 같은 색소 침착은 시간⏰이 지나면 자연스럽게 사라지는 일반적인 피부 트러블과는 달리 계속 방치할 경우 오히려 색이 짙어지고 증상이 악화될 수 있기 때문에 집중 관리가 필요해요🌿\n" +
        "\n" +
        "자외선 차단제는 계절에 상관없이 필수로 매일매일 꼼꼼히 발라줘야 해요.\n" +
        "건조할수록 햇빛☀️에 저항성이 약해져 쉽게 그을러져서 세포 노화를 촉진하고 피부 세포 재생을 더디게 해서 피부색이 칙칙해지기 쉬워서 수분크림 등 수분이 함유된 스킨케어 제품으로 촉촉한 피부💧색소 침착이 쉽게 되는 당신!\n" +
        "색소성 피부는 멜라닌이 비정상적으로 과잉 생성되면서 색소 침착이 쉽게 되는 피부를 말해요😊 자외선, 스트레스, 여성호르몬, 내장 장애 등의 원인으로 발생해요.\n" +
        "기미, 주근깨, 갈색 반점이 잘 생기는 피부에요.\n" +
        "주근깨, 기미, 검버섯과 같은 색소 침착은 시간⏰이 지나면 자연스럽게 사라지는 일반적인 피부 트러블과는 달리 계속 방치할 경우 오히려 색이 짙어지고 증상이 악화될 수 있기 때문에 집중 관리가 필요해요🌿\n" +
        "\n" +
        "자외선 차단제는 계절에 상관없이 필수로 매일매일 꼼꼼히 발라줘야 해요.\n" +
        "건조할수록 햇빛☀️에 저항성이 약해져 쉽게 그을러져서 세포 노화를 촉진하고 피부 세포 재생을 더디게 해서 피부색이 칙칙해지기 쉬워서 수분크림 등 수분이 함유된 스킨케어 제품으로 촉촉한 피부💧를 유지시켜주는 것도 중요해요!",

        "멜라닌 활성도가 낮아 눈에 보이는 색소가 적은 타입이에요😊 피부에 갈색 반점이 없고 피부색이 전반적으로 균일해요✨ 그래도 방심하지 말고 피부 노화와 건강을 위해 사계절 내내 매일매일 자외선 차단제 발라주는 거 잊지 마세요🌿"
    ]

    const dryTitle = [
        "a. 피지 분비량이 많은 당신!\n\n",
        "a. 피부가 촉촉하고 유수분 밸런스가 잘 맞는 당신!\n\n",
        "a. 건조한 피부를 가진 당신!\n\n"
    ]
    const sensTitle = [
        "b. 피부가 섬세한 당신!\n\n",
        "b. 튼튼한 피부를 가진 당신!\n\n"
    ]
    const pigmentTitle = [
        "c. 색소 침착이 쉽게 되는 당신!\n\n",
        "c. 고른 피부색을 가진 당신!\n\n"
    ]

    const onBackMain = () => {
        Router.back()
    }

    useEffect(() => {
        setDryOilPercent((100 / 6) + (2 - fruitList[id].hash[0]) * (100 / 3))
        setSensResistPercent((100 / 4) + (1 - fruitList[id].hash[1]) * (100 / 2))
        setPigmentPercent((100 / 4) + (1 - fruitList[id].hash[2]) * (100 / 2))
    },[id])

    const onClickTest = () => {
        Router.replace("/test")
    }

    useScript('https://developers.kakao.com/sdk/js/kakao.js')

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
                        : ""
                }></Image>
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

            <div className={topStyles.card_block}>
                <pre style={{fontWeight:"700"}}>{
                    id
                        ? dryTitle[fruitList[id].hash[0]]
                        : ""
                }</pre>
                <pre>{
                    id
                        ? dryBlock[fruitList[id].hash[0]]
                        : ""
                }</pre>
            </div>

            <div className={topStyles.card_block}>
                <pre style={{fontWeight:"700"}}>{
                    id
                        ? sensTitle[fruitList[id].hash[1]]
                        : ""
                }</pre>
                <pre>{
                    id
                        ? sensBlock[fruitList[id].hash[1]]
                        : ""
                }</pre>
            </div>

            <div className={topStyles.card_block}>
                <pre style={{fontWeight:"700"}}>{
                    id
                        ? pigmentTitle[fruitList[id].hash[2]]
                        : ""
                }</pre>
                <pre>{
                    id
                        ? pigmentBlock[fruitList[id].hash[2]]
                        : ""
                }</pre>
            </div>

            <div className={topStyles.share_title}>피부 타입 공유하기</div>

            <div className={styles.share_btn_wrapper}>
                <KakaoShareButton url={""} hash={
                    id
                        ? "#"+tagList.dry_oil[fruitList[id].hash[0]]+" #"+tagList.sens_regist[fruitList[id].hash[1]]+" #"+tagList.pigment[fruitList[id].hash[2]]
                        : ""
                }></KakaoShareButton>
                <div onClick={() => handleCopyClipBoard()} className={styles.share_btn_link}></div>
            </div>
            <div onClick={onClickTest} style={{marginBottom:"30px"}} className={`${cardStyles.card} ${cardStyles.first_card}`}><div>테스트 해보기</div></div>

            <div className={topStyles.copy_right_main}></div>
        </>
    )
}

export default Id
