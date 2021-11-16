import styled from 'styled-components';
import { colors, shadows } from '../../const/Styles';

type Props = {
    lightbg?: boolean
    imgStart?: boolean
};


export const LandingSectionContainer = styled.section<Props>`
background-color: ${({ lightbg }) => lightbg ? colors.beige : colors.darkBlue};
`;

export const Row = styled.div<Props>`
width: 100%;
display: flex;
flex-direction: ${({ imgStart }) => imgStart ? 'row-reverse' : 'row'};
padding: 1em;
@media all and (max-width: 850px){
    padding: 2em 0.5em;
}
@media all and (max-width: 600px){
    flex-direction: ${({ imgStart }) => imgStart ? 'column-reverse' : 'column'};
}
`;

export const Column = styled.div<Props>`
width: 100%;
padding: 1em 2em;
> span {
    border-radius: 10px;
    box-shadow: ${({ lightbg }) => lightbg ? shadows.darkBlue : shadows.beige};
}
`;

export const Heading = styled.p<Props>`
font-size: 0.75rem;
color: ${({ lightbg }) => lightbg ? colors.darkBlue : '#aaa'};
margin-bottom: 1em;
`;

export const Title = styled.h2<Props>`
font-size: 1.5rem;
color: ${({ lightbg }) => lightbg ? colors.darkBlue : '#fff'};
`;

export const Text = styled.p<Props>`
font-size: 1rem;
color: ${({ lightbg }) => lightbg ? colors.darkBlue : '#fff'};
margin: 1em 0;
`;

export const Button = styled.button<Props>`
background-color: ${({ lightbg }) => lightbg ? colors.darkBlue : colors.beige};
padding: 0.5em 1em;
border: none;
border-radius: 5px;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: ${({ lightbg }) => lightbg ? colors.darkBlueHover : colors.beigeHover};
}
`;

export const Link = styled.a<Props>`
font-size: 1rem;
color: ${({ lightbg }) => lightbg ? '#fff' : colors.darkBlue};
font-weight: bold;
`;