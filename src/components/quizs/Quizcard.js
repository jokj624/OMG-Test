import React, { useState, useEffect } from 'react';
import Wrapper from '../common/Wrapper';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import quiz from '../../pages/contents/question';
import score from '../../pages/contents/score';
import Button from '../common/Button';
import styled from 'styled-components';

import '../common/Main.css';

const Question = styled.div`
  text-align : center;
  margin : 0;
  padding : 0;
`;

const Spacer = styled.div`
  height : 4rem;
`;

const useStyles = makeStyles({
    title: {
      fontSize: 20,
      marginBottom : '10px',
      marginTop : '10px',
      textAlign: "center",
      fontFamily: 'TTTogether',
      color : 'white'
    },
    button: {
      textAlign: "center",
      fontFamily: 'Y_Spotlight',
      marginTop: '5%',
    },
  });


const QuizCard = ({ match }) => {
    const classes = useStyles();
    const [curQuiz, setQuiz] = useState({});
    const [id, setId] = useState(0);

    useEffect(()=>{
      const num = parseInt(match.params.id);
      console.log(num);
      if(quiz){
        setQuiz(quiz[num-1]);    //렌더링 시 질문 설정 (현재 주소 파라미터에서 질문 번호 가져온다.
        setId(num+1);
      }
    }, [match]);

    const getScore = (arr) => {
      let scoreNum = 5;
      arr.map((name => {
        score[0][name] = +score[0][name] + scoreNum;  //score value가 NaN이라 형변환 해줌
        scoreNum -= 1;
        if(score[0][name] > +score[1].maxScore){
          score[1].maxScore = score[0][name];
          score[1].maxOmg = name;
        }
      }));
      console.log(score);
    };

    return(
        <Wrapper>
          {match.params.id < 10 &&
            <Question>
                <Typography className={classes.title}>{match.params.id}/10</Typography><br/>
                <Typography className={classes.title}>{curQuiz.question}</Typography>
                <br/>
                
                {curQuiz.answer && curQuiz.answer.map((item, index)=>(
                 <Link to={`/question/${id}`} key={index} >
                    <Button className={classes.button} 
                    weight={"normal"} width={"85%"} fontSize={"1.2em"} color={"black"} background={"#D1B6E1"} onClick={() => getScore(item.name)}>{item.text} </Button> 
                 </Link>
                ))}
            </Question>
          }
          {match.params.id == 10 &&
            <Question>
                <Typography className={classes.title}>{match.params.id}/10</Typography><br/>
                <Typography className={classes.title}>{curQuiz.question}</Typography>
                <br/>
                {curQuiz.answer && curQuiz.answer.map((item, index)=>(
                 <Link to={`/result`} key={index}>
                    <Button className={classes.button} 
                    weight={"normal"} width={"85%"} fontSize={"1.3em"} color={"black"} background={"#D1B6E1"} 
                    onClick={() => getScore(item.name)}>{item.text}</Button> 
                 </Link>
                ))}
            </Question>
          }
        </Wrapper>
    );
};

export default withRouter(QuizCard);
