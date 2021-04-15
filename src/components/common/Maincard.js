import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import omg from '../../img/omgmain_ver2.png';
import Wrapper from './Wrapper';
import Button from './Button';

import './Main.css';

const Main = styled.div`
  text-align : center;
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
    color : "white"
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
    @media (max-width : 349px) {
      width : 100%;
    }

`;

const MainCard = ({ history }) => {
  const classes = useStyles();
  return (
    <>
    <Wrapper>
    <Main>
      <Img src={omg}/>
      <Typography className={classes.title}>재미로 보는</Typography>
      <Typography className={classes.title}>나와 비슷한 <span style = {{ color : "#f595d2", fontSize: "1.25em"}}>오마이걸</span> 멤버는?</Typography>
      <Button className={classes.button} style = {{background : "#712dad"}}
        onClick={()=> {
          history.push("/question/1");
        }}>START!</Button>
    </Main>
    </Wrapper>
    </>
  );
};

export default withRouter(MainCard);
