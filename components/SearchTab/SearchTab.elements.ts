import styled from 'styled-components';
import { colors } from '../../const/Styles';
import { DefaultButton } from '../../styles/GlobalStyles';

export const FormContainer = styled.form`
width: 100%;
display: flex;
`;

export const NewsInput = styled.input`
padding: 1em;
font-size: 1.125rem;
flex-grow: 1;
outline: none;
border: none;
@media all and (max-width:720px){
    font-size: 1rem;
};
@media all and (max-width: 650px){
    font-size: 0.875rem
}
`;

export const SearchButton = styled(DefaultButton)`
padding: 1em;
border-radius: 0;
background-color: ${colors.beige};
color: ${colors.darkBlue};
font-weight: bold;
outline: none;
&:hover{
    background-color: ${colors.beigeHover};
}
`;