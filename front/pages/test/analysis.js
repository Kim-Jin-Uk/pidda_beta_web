import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Progress} from "antd";
import {createGlobalStyle} from "styled-components";
import styles from "../../styles/test.module.scss";

const Global = createGlobalStyle`
    .anticon{
      display: none;
    }
    .ant-progress-text{
      display: none;
    }
    
    .ant-progress .ant-progress-inner{
      width: 56px !important;
      height: 56px !important;
      position: absolute;
      top:260px;
      left: 50%;
      transform: translateX(-50%);
    }
`

const Analysis = () =>{
    const router = useRouter()
    const {dry, sens, pigment} = router.query
    const dryOily = JSON.parse(dry)
    const sensResist = JSON.parse(sens)
    const pigmentObj = JSON.parse(pigment)
    const [percent, setPercent] = useState(0)
    const [viewType, setViewType]= useState(false)
    const [dryScore,setDryScore] = useState(0)
    const [sensScore,setSensScore] = useState(0)
    const [pigmentScore,setPigmentScore] = useState(0)

    useEffect(() => {
        if (percent >= 100){
            let d_score = 0
            for (let i = 1; i < 8; i++) {
                const d = dryOily[`${i}`]
                d_score += d
            }
            setDryScore(d_score)

            let s_score = 0
            for (let i = 1; i < 10; i++) {
                const s = sensResist[`${i}`]
                s_score += s
            }
            setSensScore(s_score)

            let p_score = 0
            for (let i = 1; i < 8; i++) {
                const p = pigmentObj[`${i}`]
                p_score += p
            }
            setPigmentScore(p_score)

            setViewType(true)
        }else {
            setTimeout(function (){
                setPercent(percent + 1)
            },10)
        }
    },[percent])

    return(
        <>
            <Global />
            {
                viewType
                    ?(
                        <>
                            <div>{dryScore}</div>
                            <div>{sensScore}</div>
                            <div>{pigmentScore}</div>
                        </>
                    )
                    :(
                        <>
                            <Progress type="circle" percent={percent} />
                            <div className={styles.analysis_text}>분석중</div>
                        </>
                    )
            }

            <div className={styles.copy_right}></div>
        </>
    )
}

export default Analysis
