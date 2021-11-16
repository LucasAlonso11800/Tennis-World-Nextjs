import styled from 'styled-components';
import { colors, shadows } from '../../const/Styles';

export const MatchesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    padding: 1em;
`; 

export const NoMatchesAlert = styled.h3`
text-align: center;
font-size: 2rem;
border-bottom: 2px solid #000;
`;

export const MatchContainer = styled.div`
width: 40%;
display: flex;
flex-direction: column;
padding: 1em;
margin-bottom: 1em;
border-radius: 5px;
transition: all 0.2s ease-in-out;
background-color: ${colors.beigeTransparent};
box-shadow: ${shadows.darkBlue};
@media all and (max-width:700px){
    width: 45%
}
@media all and (max-width:500px){
    width: 80%
}
&:hover{
    background-color: ${colors.beigeTransparentHover};
}
`;

export const MatchTitle = styled.h3`
font-size: 1.375rem;
`;
export const MatchDataContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 1em 0;
`;
export const MatchData = styled.p`
width: 50%;
`;
export const Result = styled.p`
font-weight: bold;
`;
export const Space = styled.span`
margin-left: 0.25em;
`