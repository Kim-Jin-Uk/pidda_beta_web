import React, { useEffect } from 'react'
import useScript from "../hooks/use-script"
import styles from "../styles/test.module.scss";

import fruit_1 from "../images/type/fruit_1.svg";
import fruit_2 from "../images/type/fruit_2.svg";
import fruit_3 from "../images/type/fruit_3.svg";
import fruit_4 from "../images/type/fruit_4.svg";
import fruit_5 from "../images/type/fruit_5.svg";
import fruit_6 from "../images/type/fruit_6.svg";
import fruit_7 from "../images/type/fruit_7.svg";
import fruit_8 from "../images/type/fruit_8.svg";
import fruit_9 from "../images/type/fruit_9.svg";
import fruit_10 from "../images/type/fruit_10.svg";
import fruit_11 from "../images/type/fruit_11.svg";
import fruit_12 from "../images/type/fruit_12.svg";


const KakaoShareButton = (props) => {
    console.log(props)
    useScript('https://developers.kakao.com/sdk/js/kakao.js')

    useEffect(() => {
        createKakaoButton()
    }, [])

    const createKakaoButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        if (window.Kakao) {
            const kakao = window.Kakao
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                console.log(process.env.NEXT_PUBLIC_KAKAO_KEY)
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                kakao.init("6cccd2fc45f62be95b6679ca58572c50")
            }

            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title:"pida",
                    description: props.hash,
                    imageUrl: "https://k.kakaocdn.net/14/dn/btrqMQE4FOx/yIHyrpnh5PyO4OF9yhDUu0/o.jpg", // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        },
                    },
                ],
            })
        }
    }

    return (
        <div id="kakao-link-btn" className={styles.share_btn_kakao}></div>
    )
}

export default KakaoShareButton
