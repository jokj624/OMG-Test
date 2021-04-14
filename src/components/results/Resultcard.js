import React, { useState, useEffect } from 'react';
import Wrapper from '../common/Wrapper';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import result from '../../pages/contents/result';
import styled from 'styled-components';

import '../common/Main.css';

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
      marginBottom : '10px',
      marginTop : '10px',
      textAlign: "center",
      fontFamily: 'TTTogether',
      color : 'white'
    },
    name: {
      fontSize: 35,
      marginBottom : '10px',
      marginTop : '-10px',
      textAlign: "center",
      fontFamily: 'TTTogether',
      color : '#b5c3ff'
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


  const Resultcard = ({omg}) => {
    const classes = useStyles();
    omg = 0;
    const newLocal = require('../../img/' + result[omg].img);
    let omgsrc = newLocal.default;

        return(
            <Wrapper>
              <Spacer/>
                <Result>
                  <Typography className={classes.title}>당신과 가장 비슷한</Typography>
                  <Typography className={classes.title}>오마이걸 멤버는!</Typography>
                  <Img src = {omgsrc}/>
                  <Typography className={classes.title}>{result[omg].message}</Typography>
                  <Typography className={classes.name}>{result[omg].omg}</Typography>
                  <Textbox>
                    <Subtitle>어떤 점이 닮았을까?</Subtitle>
                    <Text>{result[omg].result}</Text>
                  </Textbox>
                </Result>
            </Wrapper>
        );
};

  export default Resultcard;