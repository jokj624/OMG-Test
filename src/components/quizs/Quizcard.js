import React from 'react';
import Wrapper from '../common/Wrapper';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Responsive from '../common/Responsive';
import styled from 'styled-components';

import Button from '../common/Button';

const useStyles = makeStyles({
    root: {
      width: '350px', 
      position: "absolute",
      textAlign : "center",
      height: '700px',
      margin: '0',
      padding : '0',
      boxShadow: '5px 5px 5px 3px #616161',
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

const QuizCard = () => {
    const classes = useStyles();
    return(
        <Wrapper>
            <Card className={classes.root}>

            </Card>
        </Wrapper>
    );
};

export default QuizCard;
