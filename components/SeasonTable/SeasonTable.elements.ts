import styled from 'styled-components';
import { colors } from '../../const/Styles';

export const Table = styled.table`
width: 100%;
color: ${colors.darkBlue};
`;

export const TableHead = styled.thead`
background-color: ${colors.beige};
`;

export const TableRow = styled.tr`
background-color: ${colors.beigeTransparent};
font-weight: bold;
&:hover{
    background-color: ${colors.beigeTransparentHover}   
}
> td {
    padding: 0 0.5em;
    text-align: center;
}
`;