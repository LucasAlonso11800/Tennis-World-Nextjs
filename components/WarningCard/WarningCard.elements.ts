import styled from 'styled-components';
import { colors, shadows } from '../../const/Styles';
import { DefaultButton } from '../../styles/GlobalStyles';

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

export const CardButton = styled(DefaultButton)`
width: 100%;
margin: 0 0.5em;
background-color: ${colors.darkBlue};
&:hover{
    background-color: ${colors.darkBlueHover}
}
> a {
    color: #FFF;
}
`;