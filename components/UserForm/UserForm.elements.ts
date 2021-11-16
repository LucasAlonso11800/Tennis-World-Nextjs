import styled from 'styled-components';
import { colors, shadows } from '../../const/Styles';

export const Container = styled.div`
width: 40%;
margin-top: 2em;
margin-left: 2em;
background-color: ${colors.beige};
color: ${colors.darkBlue};
text-align: center;
padding: 1em;
box-shadow: ${shadows.darkBlue};
border-radius: 10px;
@media all and (max-width: 600px){
    width: 60%
}
@media all and (max-width: 500px){
    width: 70%
}
`;
export const Title = styled.h3``;
export const Subtitle = styled.p`
margin-top: 0.5em;
`;
export const ErrorContainer = styled.div`
display: flex;
justify-content: space-around;
margin: 1em 0;
`;
export const ErrorMessage = styled.p`
border-bottom: 1px solid ${colors.darkBlue};
`;
export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
`;
export const Label = styled.label`
margin: 0.5em 0;
font-weight: bold;
`;
export const Input = styled.input`
padding: 0.5em 1em;
`;
export const SubmitButton = styled.button`
margin-top: 1em;
padding: 0.5em 1em;
font-weight: bold;
background-color: ${colors.darkBlue};
border: none;
color: #fff;
cursor: pointer;
border-radius: 5px;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: ${colors.darkBlueHover}
}
`;
