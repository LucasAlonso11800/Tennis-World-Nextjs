import React, { Dispatch, SetStateAction } from 'react';
import { ETour } from '../../types/types';
import {
    PageTitleContainer,
    Title,
    TitleContainer,
    Subtitle,
    SelectContainer,
    Label,
    Select,
    Option
} from './PageTitle.elements';

type Props = {
    title: string
    subtitle: string
    setTour:  Dispatch<SetStateAction<ETour>>
};

export default function PageTitle(props: Props) {
    const { title, subtitle, setTour } = props;
    return (
        <PageTitleContainer>
            <TitleContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleContainer>
            <SelectContainer>
                <Label htmlFor='tour'>Select Tour</Label>
                <Select name='tour' onChange={e => setTour(e.target.value as ETour)}>
                    <Option value={ETour.ATP}>ATP</Option>
                    <Option value={ETour.WTA}>WTA</Option>
                </Select>
            </SelectContainer>
        </PageTitleContainer>
    )
};