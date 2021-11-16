import styled from 'styled-components';
import { colors, shadows } from '../../const/Styles';

export const WarningCardContainer = styled.div`
width: 40%;
margin-top: 2em;
margin-left: 2em;
background-color: ${colors.beige};
color: ${colors.darkBlue};
text-align: center;
padding: 1em;
box-shadow: ${shadows.darkBlue};
border-radius: 5px;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: ${colors.beigeHover}
}
@media all and (max-width: 500px){
    width: 60%
}
`;
export const WarningText = styled.p`
margin: 1em 0;
`;
export const ButtonsContainer = styled.div`
display: flex;
`;
export const CardButton = styled.button`
width: 100%;
padding: 0.5em 1em;
margin: 0 0.5em;
background-color: ${colors.darkBlue};
border: none;
border-radius: 5px;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: ${colors.darkBlueHover}
}
> a {
    color: #FFF;
}
`;