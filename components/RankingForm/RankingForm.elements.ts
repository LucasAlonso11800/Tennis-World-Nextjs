import styled from 'styled-components';
import { colors } from '../../const/Styles';

type Props = {
    isDisplayed: boolean
};

export const FormContainer = styled.div<Props>`
position: absolute;
z-index: 5;
right: 0;
transition: all 0.5s ease-in-out;
background-color: ${colors.darkBlue};
color: #fff;
display: flex;
flex-direction: ${({ isDisplayed }) => isDisplayed ? 'column' : 'row'};
height: 100%;
`;

export const FormTitleContainer = styled.div<Props>`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: ${({ isDisplayed }) => isDisplayed ? '100%' : '160px'};
@media all and (max-width:960px){
    width: ${({ isDisplayed }) => isDisplayed ? '100%' : '120px'};
}
`;

export const FormTitle = styled.h3`
text-align: center;
padding: 1em 0;
`;

export const Form = styled.form<Props>`
width: 20em;
padding: 1em;
display: ${({ isDisplayed }) => isDisplayed ? 'flex' : 'none'};
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Label = styled.label`
font-size: 1rem;
text-align: center;
margin: 0.5em 0;
`

export const RankingInput = styled.input`
width: 100%;
text-align: center;
padding: 0.5em;
`;

export const Select = styled.select`
width: 100%;
display: block;
padding: 0.5em;
`;

export const Option = styled.option`
text-align: center;
`;

export const FormSubmit = styled.button`
margin: 1em 0;
padding: 1em 2em;
width: 100%;
text-align: center;
font-weight: bold;
`;