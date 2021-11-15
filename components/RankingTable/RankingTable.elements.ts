import styled, { css } from 'styled-components';
import { colors } from '../../const/Styles';

type Props = {
    borderTop?: boolean
    borderBottom?: boolean
    content: number
}

export const Table = styled.table`
width: ${({ width }) => width ? `${width}px` : '100%'};
@media all and (max-width: 570px){
    display: block;
}
text-align: center;
`;

export const TableHead = styled.thead`
background-color: ${colors.beige};
color: ${colors.darkBlue};
@media all and (max-width: 570px){
    position: absolute;
    top: -9999px;
    left: -9999px;
    display: block;
}
`;

export const TableRow = styled.tr`
    @media all and (max-width: 570px){
    display: block;
}
`;
export const TableHeader = styled.th`
    @media all and (max-width: 570px){
    display: block;
}
`;
export const TableBody = styled.tbody`
    @media all and (max-width: 570px){
    display: block;
}
`;

export const Player = styled.tr`
background-color: ${colors.beigeTransparent};
color: ${colors.darkBlue};
font-weight: bold;
transition: all 0.2s ease-in-out;
@media all and (max-width: 570px){
    display: block;
}
&:hover{
    background-color: ${colors.beigeTransparentHover}
}
`;

const contentArray = ['Ranking', 'Player', 'Country', 'Points', 'Movement'];

export const PlayerData = styled.td<Props>`
@media all and (max-width: 570px){
    position: relative;
    padding-left: 50%;
    padding-top: 0.5em;
    display: block;
    border-top: ${({ borderTop }) => borderTop ? `1px solid ${colors.darkBlue}` : ''};
    border-bottom: ${({ borderBottom }) => borderBottom ? `1px solid ${colors.darkBlue}` : ''};
::before{
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        ${({ content }) => content >= 0 && css`content: '${contentArray[content]}';`}
    };
}
`;