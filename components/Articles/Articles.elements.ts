import styled from 'styled-components';
import { colors, shadows } from '../../const/Styles';

export const ArticlesContainer = styled.div`
width: 100%;
padding: 1em;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;

export const ArticleContainer = styled.div`
width: 40%;
padding: 1.5em;
margin-bottom: 1em;
box-shadow: ${shadows.darkBlue};
background-color: ${colors.beigeTransparent};
transition: all 0.2s ease-in-out;
border-radius: 5px;
&:hover{
    background-color: ${colors.beigeTransparentHover}
}
@media all and (max-width: 800px){
    width: 45%
}
@media all and (max-width: 700px){
    width: 80%
}
`;

export const ArticleTitle = styled.h4`
text-align: center;
margin-bottom: 1em;
`;

export const ArticleImg = styled.img`
width: 100%;
box-shadow: ${shadows.darkBlue};
`;

export const ArticleDescription = styled.p`
margin: 1em 0;
`;

export const ArticleButtons = styled.div`
display: flex;
`;

export const ArticleButton = styled.button<{ bold: boolean }>`
padding: 0.5em 1em;
background-color: ${colors.beige};
color: ${colors.darkBlue};
width: 100%;
font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
transition: all 0.2s ease-in-out;
cursor: pointer;
border-radius: 5px;
&:hover{
    background-color: ${colors.beigeHover};
}
`;

export const ArticleLink = styled.a`
text-decoration: none;
color: ${colors.darkBlue};
`;
