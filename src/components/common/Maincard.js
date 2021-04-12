import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Responsive from './Responsive';
import styled from 'styled-components';
import omg from '../../img/omgmain.png';

import Button from './Button';

import './Main.css';

const Wrapper = styled(Responsive)`
    height : 100%;
    position: relative;
`;
const useStyles = makeStyles({
  root: {
    maxWidth: '350px', 
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    textAlign : "center",
    height: '80%',
    margin: '0',
    padding : '0',
    boxShadow: '5px 5px 5px 3px #616161',
    marginBottom : '15px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 5px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    marginBottom : '10px',
    marginTop : '10px',
    textAlign: "center",
    fontFamily: 'Black Han Sans'
  },
  button: {
    textAlign: "center",
    marginTop : '80px'
  },
});

const Img = styled.img`
    width : 350px;
    overflow : hidden;
    margin-top : 40px;
    margin-bottom : 40px;

`


export default function MainCard() {
  const classes = useStyles();
  return (
    <>
    <Wrapper>
    <Card className={classes.root}>
        <CardContent style = {{height : "95%"}}>
            <Img src={omg}/>
            <Typography className={classes.title} color="textSecondary">
                재미로 보는
            </Typography>
            <Typography className={classes.title} color="textSecondary">
                나와 비슷한 오마이걸 멤버는?
            </Typography>
            <Button className={classes.button}>START!</Button>
        </CardContent>
    </Card>
    </Wrapper>
    </>
  );
}