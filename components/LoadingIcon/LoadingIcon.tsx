import React from 'react';
import {
    IconContainer,
    Icon
} from './LoadingIcon.elements';
import { VscLoading } from 'react-icons/vsc';

export default function LoadingIcon() {
    return (
        <IconContainer>
            <Icon>
                <VscLoading size={64} color={'#fff'}/>
            </Icon>
        </IconContainer>
    )
};