import styled from 'styled-components';
import { colors } from '../../const/Styles';

type Props = {
    isDisplayed?: boolean;
}

export const Header = styled.header`
background-color: ${colors.darkBlue};
@media all and (max-width: 960px){
    padding: 1em 0;
}
`;

export const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
> a {   
    font-size: 1.75rem;
    margin: 0 1em;
    color: #fff;
    &:hover{
    text-decoration: none;
    color: #fff;
    }
}
> span {
    margin: 0 0.5em!important;
}
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width:960px){
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const MenuContainer = styled.div<Props>`
display: flex;
flex-grow: 1;
@media all and (max-width: 960px){
    display: flex;
    width: 100%;
    position: absolute;
    top: 70px;
    transition: all 0.5s ease-in-out;
    left: ${({ isDisplayed }) => (isDisplayed ? 0 : '-105%')};
    background-color: ${colors.darkBlue};
    z-index: 10;
}
@media all and (max-width: 600px){
    flex-direction: column;
}
@media all and (max-width: 429px){
    top: 101px;
}
`;


export const Menu = styled.ul`
list-style-type: none;
position: relative;
width: 25%;
cursor: pointer;
@media all and (max-width: 600px){
    width: 40%
}
`

export const MenuTitle = styled.li<Props>`
padding: 1.5em 1em;
text-align: center;
color: #fff;
transition: all 0.2s ease-in-out;
font-weight: ${({ isDisplayed }) => isDisplayed ? 700 : 300};
&:hover{
    background-color: #000
};
`
export const Item = styled.li<Props>`
display: ${({ isDisplayed }) => isDisplayed ? 'flex' : 'none'};
flex-direction: column;
position: absolute;
top: ${({ isDisplayed }) => isDisplayed ? 1 : '-10%'};
transition: all 0.5s ease-in-out;
z-index: 10;
background-color: ${colors.darkBlue};
width: 100%;
@media all and (max-width: 600px){
    top: 0;
    transform: translateX(${({ isDisplayed }) => isDisplayed ? '100%' : '-100%'});
}
> a {
    text-align: center;
    color: #fff;
    padding: 1em;
    transition: all 0.2s ease-in-out;
    &:hover {
    background-color: #000;
    text-decoration: none;
    font-weight: 700;
    }
}
`;