import React, { useState, useEffect } from 'react';
import Wrapper from '../common/Wrapper';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import result from '../../pages/contents/result';
import Button from '../common/Button';
import styled from 'styled-components';

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

  const Img = styled.img`
    width : 200px;
    height : 200px;
    border-radius : 50%;
    border : 1px solid black;
  `;



  const Resultcard = ({omg}) => {
    const classes = useStyles();
    omg = 0;
    const newLocal = require('../../img/' + result[omg].img);
    let omgsrc = newLocal.default;

        return(
            <>
            <Wrapper>
                <Card className={classes.root}>
                    <CardContent style = {{height : "700px"}}>
                        <Typography className={classes.title}>당신과 가장 비슷한</Typography>
                        <Typography className={classes.title}>오마이걸 멤버는!</Typography>
                        <Img src = {omgsrc} />
                        <Typography className={classes.title}>{result[omg].omg}</Typography>
                    </CardContent>
                </Card>
            </Wrapper>
            </>
        );
};

  export default Resultcard;