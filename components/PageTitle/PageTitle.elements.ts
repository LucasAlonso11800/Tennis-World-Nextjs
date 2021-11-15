import styled from 'styled-components';
import { colors } from '../../const/Styles';

export const PageTitleContainer = styled.div`
width: 100%;
padding: 1em;
background-color: ${colors.beige};
color: ${colors.darkBlue};
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
`;

export const TitleContainer = styled.div`
display: flex;
align-items: center;
@media all and (max-width: 600px){
    flex-direction: column;
    margin-right: 0.5em;
}
`;

export const Title = styled.h2`
display: inline;
`;

export const Subtitle = styled.p`
margin: 0 0.5em;
`;

export const SelectContainer = styled.div`
display: flex;
align-items: center;
`;
export const Label = styled.label`
font-size: 1.25rem;
margin-right: 1em;
`;
export const Select = styled.select`
padding: 0.5em;
`;
export const Option = styled.option``;