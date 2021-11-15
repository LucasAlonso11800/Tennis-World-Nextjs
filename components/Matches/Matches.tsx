import React from 'react';
import {
    MatchesContainer,
    NoMatchesAlert,
    MatchContainer,
    MatchTitle,
    MatchDataContainer,
    MatchData,
    Result,
    Space
} from './Matches.elements';
import { MatchType } from '../../types/types';

type Props = {
    matches: MatchType[]
};

type Tiebreak = {
    firstSet: boolean
    secondSet: boolean
    thirdSet: boolean
    fourthSet: boolean
    fifthSet: boolean
};

export default function Matches(props: Props) {
    const { matches } = props;

    return (
        <MatchesContainer>
            {matches.length === 0 ?
                <NoMatchesAlert>No matches being played today</NoMatchesAlert> :
                matches.map(match => {
                    const { result, title, round_name, court, date } = match;

                    let tiebreaks: Tiebreak = { firstSet: false, secondSet: false, thirdSet: false, fourthSet: false, fifthSet: false };
                    let isThereThirdSet: boolean = false;
                    let isThereFourthSet: boolean = false;
                    let isThereFifthSet: boolean = false;

                    function checkResult() {
                        if (result) {
                            tiebreaks = {
                                firstSet: result.home_tb1 !== undefined,
                                secondSet: result.home_tb2 !== undefined,
                                thirdSet: result.home_tb3 !== undefined,
                                fourthSet: result.home_tb4 !== undefined,
                                fifthSet: result.home_tb5 !== undefined
                            }
                            isThereThirdSet = result.home_set3 !== undefined;
                            isThereFourthSet = result.home_set4 !== undefined;
                            isThereFifthSet = result.home_set5 !== undefined;
                        }
                    };

                    checkResult();
                    
                    return (
                        <MatchContainer key={match.id}>
                            <MatchTitle>{title}</MatchTitle>
                            <MatchDataContainer>
                                <MatchData><b>Round: </b>{round_name}</MatchData>
                                <MatchData><b>Court: </b>{court}</MatchData>
                                <MatchData><b>Hour: </b>{date.substring(11, 16)} GMT</MatchData>
                            </MatchDataContainer>
                            {result ?
                                <Result>
                                    {result.home_set1} - {result.away_set1}<Space />
                                    {tiebreaks.firstSet ? `(${result.home_tb1} - ${result.away_tb1})` : ''}<Space />
                                    {result.home_set2} - {result.away_set2}<Space />
                                    {tiebreaks.secondSet ? `(${result.home_tb2} - ${result.away_tb2})` : ''}<Space />
                                    {isThereThirdSet ? `${result.home_set3} - ${result.away_set3}` : ''}<Space />
                                    {tiebreaks.thirdSet ? `(${result.home_tb3} - ${result.away_tb3})` : ''}<Space />
                                    {isThereFourthSet ? `${result.home_set4} - ${result.away_set4}` : ''}<Space />
                                    {tiebreaks.fourthSet ? `(${result.home_tb4} - ${result.away_tb4})` : ''}<Space />
                                    {isThereFifthSet ? `${result.home_set5} - ${result.away_set5}` : ''}<Space />
                                    {tiebreaks.fifthSet ? `(${result.home_tb5} - ${result.away_tb5})` : ''}<Space />
                                    <p>{result.result_description}</p>
                                </Result>
                                :
                                'Not started'}
                        </MatchContainer>
                    )
                })}
        </MatchesContainer>
    )
};