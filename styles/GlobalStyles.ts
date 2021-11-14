import styled from 'styled-components';

type Props = {
    backgroundURL?: string
};

export const Main = styled.main<Props>`
background-image: ${({backgroundURL}) =>  backgroundURL ? `url(${backgroundURL})` : ''};
background-size: cover;
background-attachment: fixed;
background-position: center;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
position: relative;
`