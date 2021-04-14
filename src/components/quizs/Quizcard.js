import React, { useState, useEffect } from 'react';
import Wrapper from '../common/Wrapper';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import quiz from '../../pages/contents/question';
import Button from '../common/Button';

import '../common/Main.css';

const useStyles = makeStyles({
    root: {
      width: '350px', 
      position: "absolute",
      textAlign : "center",
      height: '700px',
      margin: '0',
      padding : '0',
      boxShadow: '3px 3px 3px 3px #616161',
      borderRadius : "16px",
    },
    title: {
      fontSize: 22,
      marginBottom : '10px',
      marginTop : '10px',
      textAlign: "center",
      fontFamily: 'TTTogether',
      color : "#571d80"
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

    return(
        <Wrapper>
          {match.params.id < 10 &&
            <Card className={classes.root}>
              <CardContent style = {{height : "700px"}}>
                <Typography className={classes.title}>{match.params.id}/10</Typography><br/>
                <Typography className={classes.title}>{curQuiz.question}</Typography>
                <br/>
                
                {curQuiz.answer && curQuiz.answer.map((item)=>(
                 <Link to={`/question/${id}`} >
                    <Button className={classes.button} 
                    weight={"normal"} width={"85%"} fontSize={"1.3em"}>{item.text}</Button> 
                 </Link>
                ))}
              </CardContent>
            </Card>
          }
          {match.params.id == 10 &&
            <Card className={classes.root}>
              <CardContent style = {{height : "700px"}}>
                <Typography className={classes.title}>{match.params.id}/10</Typography><br/>
                <Typography className={classes.title}>{curQuiz.question}</Typography>
                <br/>
                
                {curQuiz.answer && curQuiz.answer.map((item)=>(
                 <Link to={`/result`} >
                    <Button className={classes.button} 
                    weight={"normal"} width={"85%"} fontSize={"1.3em"}>{item.text}</Button> 
                 </Link>
                ))}
              </CardContent>
            </Card>
          }
        </Wrapper>
    );
};

export default withRouter(QuizCard);