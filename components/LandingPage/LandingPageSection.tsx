import React from 'react';
import { LandingPageSectionDataType } from '../../types/types';
import {
    LandingSectionContainer,
    Row,
    Column,
    Heading,
    Title,
    Text,
    Button,
    Link
} from './LandingPageSection.elements';
import Image from 'next/image'

export default function LandingPageSection(props: LandingPageSectionDataType) {
    const { lightbg, imgStart, heading, title, text, link, linkText, img, alt } = props;
    return (
        <LandingSectionContainer lightbg={lightbg}>
            <Row imgStart={imgStart}>
                <Column>
                    <Heading lightbg={lightbg}>{heading}</Heading>
                    <Title lightbg={lightbg}>{title}</Title>
                    <Text lightbg={lightbg}>{text}</Text>
                    <Button lightbg={lightbg}>
                        <Link href={link} lightbg={lightbg}>{linkText}</Link>
                    </Button>
                </Column>
                <Column lightbg={lightbg}>
                    <Image src={img} alt={alt} layout="responsive" width={650} height={400} priority={alt === 'Novak Djokovic' || alt === 'Rafael Nadal'}/>
                </Column>
            </Row>
        </LandingSectionContainer>
    )
};
