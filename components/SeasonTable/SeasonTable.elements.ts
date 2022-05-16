import styled, { css } from 'styled-components';
import { colors } from '../../const/Styles';

export const Table = styled.table`
width: 100%;
color: ${colors.darkBlue};
`;

export const TableHead = styled.thead`
background-color: ${colors.beige};
@media all and (max-width: 570px){
    position: absolute;
    top: -9999px;
    left: -9999px;
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

export const TableRow = styled.tr`
background-color: ${colors.beigeTransparent};
font-weight: bold;
border-radius: 5px;
transition: all 0.2s ease-in-out;
&:hover{
    background-color: ${colors.beigeTransparentHover}   
}
@media all and (max-width: 570px){
    display: block;
}`;

const contentArray = ["Start date", "End date", "Tournament", "Surface", "City", "Country"];
type Props = {
    borderTop?: boolean
    borderBottom?: boolean
    content: number
}

export const TournamentData = styled.td<Props>`
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
}`;