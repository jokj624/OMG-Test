import React, { useState, useEffect } from 'react';
import Wrapper from '../common/Wrapper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import result from '../../pages/contents/result';
import styled from 'styled-components';
import score from '../../pages/contents/score';
import LoadingBar from '../common/LoadingBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../common/Main.css';
import Footer from '../common/Footer';
const Result = styled.div`
  text-align : center;
  height : 700px;
  margin : 0;
  padding : 0;
`;
const Spacer = styled.div`
  height : 4rem;
`;


const useStyles = makeStyles({
    title: {
        fontSize: 22,
        marginBottom: '10px',
        marginTop: '10px',
        textAlign: "center",
        fontFamily: 'TTTogether',
        color: 'white'
    },
    name: {
        fontSize: 35,
        marginBottom: '10px',
        marginTop: '-10px',
        textAlign: "center",
        fontFamily: 'TTTogether',
        color: '#b5c3ff'
    },
    button: {
        textAlign: "center",
        fontFamily: 'Y_Spotlight',
        marginTop: '5%',
    },
});

const Img = styled.img`
    width : 200px;
    height : 200px;
    border-radius : 50%;
    border : 1px solid white;
  `;

const Textbox = styled.div`
    border : 0.5px solid white;
    border-radius : 10%;
    padding : 25px;
  `;
const Subtitle = styled.div`
    color : white;
    font-family: 'TTTogether';
    font-size : 1.5rem;
    margin-bottom : 10px;
    text-align : left;
  
  `
const Text = styled.div`
  color : white;
  text-align : left;
`;
const Share = styled.div`
    font-size : 1.2em;
    color : #b5bbe6;
    margin-left: 5%;
  `;
const ShareBox = styled.div`
    display: flex;  
    margin: 5%;
    button {
        display: flex;
        width: 100%;
        background:none;
        outline: none;
        border: none;
    }
  `;

const Resultcard = () => {
    const [omg, setOmg] = useState(0);
    const [omgsrc, setSrc] = useState('');
    const [showResult, setShowResult] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const str = score[1].maxOmg;
        if (str === "효정") setOmg(0);
        else if (str === "미미") setOmg(1);
        else if (str === "유아") setOmg(2);
        else if (str === "승희") setOmg(3);
        else if (str === "지호") setOmg(4);
        else if (str === "비니") setOmg(5);
        else setOmg(6);
        //maxOmg 에 따른 index 설정
        const source = result[omg].img;
        const newLocal = require(`../../img/${source}`);        //img source 설정 
        setSrc(newLocal.default);
        const tick = setTimeout(() => {
      //      setShowResult(true);
        }, 3000);
        return () => clearTimeout(tick);
    }, [omg]);

    const shareTwitter = () => {
        window.open("https://twitter.com/intent/tweet"
            + "?via=likeCpp"
            + "&text=" + encodeURIComponent("재미로 보는 나와 비슷한 오마이걸 멤버는?!") // Title in this html document
            + "&url=" + encodeURIComponent(window.location.href)
        );

    };

    return (
        <>
        <Wrapper>
            <Spacer />
            {showResult &&
                <Result>
                    <Typography className={classes.title}>당신과 가장 비슷한</Typography>
                    <Typography className={classes.title}>오마이걸 멤버는!</Typography>
                    <Img src={omgsrc} />
                    <Typography className={classes.title}>{result[omg].message}</Typography>
                    <Typography className={classes.name}>{result[omg].omg}</Typography>
                    <Textbox>
                        <Subtitle>어떤 점이 닮았을까?</Subtitle>
                        <Text>{result[omg].result}</Text>
                    </Textbox>
                    <ShareBox>
                        <button onClick={shareTwitter} >
                            <FontAwesomeIcon icon={faTwitter} size="2x" color="white" /><Share>트위터에 공유하기!</Share>
                        </button>
                    </ShareBox>
                </Result>
            }
            {!showResult &&
                <LoadingBar done={100} />
            }
        </Wrapper>
        {showResult && <Footer />}
        </>
    );
};

export default Resultcard;