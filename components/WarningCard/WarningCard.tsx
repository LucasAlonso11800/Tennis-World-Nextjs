import React from 'react';
import {
    WarningCardContainer,
    WarningText,
    ButtonsContainer,
    CardButton
} from './WarningCard.elements';
import { FaExclamationCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function WarningCard() {
    return (
        <WarningCardContainer>
            <FaExclamationCircle size={48}/>
            <WarningText>Please log in in order to save your favourite news.</WarningText>
            <WarningText>In case you don&apos;t have yet an account you can sign up for free.</WarningText>
            <ButtonsContainer>
                <CardButton>
                    <Link href="/signin">Sign In</Link>
                </CardButton>
                <CardButton>
                    <Link href="signup">Sign Up</Link>
                </CardButton>
            </ButtonsContainer>
        </WarningCardContainer>
    )
};