import styled, { keyframes } from 'styled-components';

export const IconContainer = styled.div`
margin: 6em auto;
height: 20vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const Rotation = keyframes`
0%{
    transform: rotateZ(0)
}
100%{
    transform: rotateZ(359deg)
}
`;

export const Icon = styled.div`
animation-name: ${Rotation};
animation-duration: 1s;
animation-timing-function: ease-in-out;
animation-iteration-count: infinite;
`;
