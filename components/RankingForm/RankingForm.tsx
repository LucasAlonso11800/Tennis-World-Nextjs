import React, { useState , Dispatch, SetStateAction } from 'react';
import {
    FormContainer,
    FormTitleContainer,
    FormTitle,
    Form,
    Label,
    RankingInput,
    Select,
    Option,
    FormSubmit
} from './RankingForm.elements';
import { FaAngleDoubleLeft, FaTimes } from 'react-icons/fa';
import { countries } from '../../const/Countries';
import { ETour } from '../../types/types';

type Props = {
    minRanking: number
    setMinRanking: Dispatch<SetStateAction<number>>
    maxRanking: number
    setMaxRanking: Dispatch<SetStateAction<number>>
    setCountry: Dispatch<SetStateAction<string>>
    setTour: Dispatch<SetStateAction<ETour>>
    getAndFilterPlayers: (e: Event) => Promise<void>
};

export default function RankingForm(props: Props) {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const { minRanking, setMinRanking, maxRanking, setMaxRanking, setCountry, setTour, getAndFilterPlayers } = props;

    return (
        <FormContainer isDisplayed={isDisplayed}>
            <FormTitleContainer isDisplayed={isDisplayed}>
                <FormTitle>Filter<br /> Players</FormTitle>
                {isDisplayed ? <FaTimes onClick={() => setIsDisplayed(false)} />
                    : <FaAngleDoubleLeft onClick={() => setIsDisplayed(true)} />}
            </FormTitleContainer>
            <Form isDisplayed={isDisplayed}>
                <Label htmlFor='min-ranking'>Highest ranking</Label>
                <RankingInput
                    value={minRanking}
                    onChange={e => setMinRanking(parseInt(e.currentTarget.value))}
                    name='min-ranking'
                    type='number'
                    min='1'
                    max='249'
                />
                <Label htmlFor='max-ranking'>Lowest ranking</Label>
                <RankingInput
                    value={maxRanking}
                    onChange={e => setMaxRanking(parseInt(e.currentTarget.value))}
                    name='max-ranking'
                    type='number'
                    min="2"
                    max="250"
                />
                <Label htmlFor='country'>Country</Label>
                <Select onClick={e => setCountry(e.currentTarget.value)} name='country'>
                    <Option value=''>All</Option>
                    {countries.map(country => {
                        return <Option key={country} value={country}>
                            {country}
                        </Option>
                    })}
                </Select>
                <Label htmlFor='tour'>Tour</Label>
                <Select onClick={e => setTour(e.currentTarget.value as ETour)} name='tour'>
                    <Option value={ETour.ATP}>ATP</Option>
                    <Option value={ETour.WTA}>WTA</Option>
                </Select>
                <FormSubmit onClick={(e: any) => getAndFilterPlayers(e)}>Filter Players</FormSubmit>
            </Form>
        </FormContainer>
    )
};