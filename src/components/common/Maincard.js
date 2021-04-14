import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Responsive from './Responsive';
import styled from 'styled-components';
import omg from '../../img/omgmain_ver2.png';
import Wrapper from './Wrapper';

import Button from './Button';

import './Main.css';

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
    marginTop : '70px'
  },
});

const Img = styled.img`
    width : 300px;
    overflow : hidden;
    margin-top : 60px;
    margin-bottom : 50px;
`
const MainCard = ({ history }) => {
  const classes = useStyles();
  return (
    <>
    <Wrapper>
    <Card className={classes.root}>
        <CardContent style = {{height : "700px"}}>
            <Img src={omg}/>
            <Typography className={classes.title}>재미로 보는</Typography>
            <Typography className={classes.title}>나와 비슷한 <span style = {{ color : "#f595d2", fontSize: "1.25em"}}>오마이걸</span> 멤버는?</Typography>
            <Button className={classes.button} style = {{background : "#712dad"}}
              onClick={()=> {
                history.push("/question/1");
              }}>START!</Button>
        </CardContent>
    </Card>
    </Wrapper>
    </>
  );
};

export default withRouter(MainCard);