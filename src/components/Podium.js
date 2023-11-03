import React from 'react';
import styled from 'styled-components/native'
import ProfileAvatar from "./ProfileAvatar";
import Theme from '../styles/Theme';
const Container = styled.View`
flex-direction : row;
justify-content : center;

`
const StyledText = styled.Text`
font-size : 15px;
margin-top : 5px;
text-align:center;
`;
const NumberText = styled.Text`
font-size : 10px;
margin-top : 5px;
text-align:center;
color : gray;
font-weight: bold;
`;
const IconContainer =styled.View`
flex-direction : column;
justify-content : flex-start;
margin-horizontal: 20px;
margin-bottom:auto;
`

const RankNumber=styled.Text`
font-size : 20px;
background-color: ${({bgColor})=>bgColor};
margin:auto;
border-radius:10px;
color:white;
width:25px;
text-align:center;
`
function Podium({data}) {

  const {_1st,_2nd,_3rd}=data;


  return <Container>
    
    < IconContainer><RankNumber bgColor='silver'>2</RankNumber><ProfileAvatar size={'lg'}/><StyledText >{_2nd.nickname}</StyledText><NumberText>{_2nd.times}회</NumberText></IconContainer>
    
    < IconContainer ><RankNumber bgColor='gold'>1</RankNumber ><ProfileAvatar size={'xl'}/><StyledText>{_1st.nickname}</StyledText><NumberText>{_1st.times}회</NumberText></IconContainer>
    < IconContainer ><RankNumber bgColor='#cd7f32'>3</RankNumber><ProfileAvatar size={'lg'}/><StyledText >{_3rd.nickname}</StyledText><NumberText>{_3rd.times}회</NumberText></IconContainer>
  </Container>;
}

export default Podium;
