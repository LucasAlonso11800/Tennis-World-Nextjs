import React, { useState } from 'react';
import axios from 'axios';
// Const
import { API_URL } from '../const/ServerURL';
// Styles
import { Main } from '../styles/GlobalStyles';
// Types
import { GetStaticPropsResult } from 'next';
import { ETour, PlayerType } from '../types/types';
// Components
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import RankingTable from '../components/RankingTable/RankingTable';
import RankingForm from '../components/RankingForm/RankingForm';

type Props = {
    players: PlayerType[]
    endpoint: string
    rankingProperty: string
};

export default function RaceRankingPage(props: Props) {
    const { players, endpoint, rankingProperty } = props;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rankings, setRankings] = useState<PlayerType[]>(players);
    const [minRanking, setMinRanking] = useState<number>(1);
    const [maxRanking, setMaxRanking] = useState<number>(50);
    const [country, setCountry] = useState<string>('');
    const [tour, setTour] = useState<ETour>(ETour.ATP);

    async function getAndFilterPlayers(e: Event) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const data: PlayerType[] = await (await axios.post(`${API_URL}/${endpoint}`, { tour, country, rankingProperty })).data.results.rankings;

            setIsLoading(false);
            setRankings(data);
        }
        catch (err) {
            console.log(err)
        }
    };

    return (
        <Main backgroundURL={'/backgrounds/Roland-garros.jpg'}>
            {isLoading ? <LoadingIcon /> : <RankingTable rankings={rankings} endpoint={endpoint} />}
            <RankingForm
                minRanking={minRanking}
                setMinRanking={setMinRanking}
                maxRanking={maxRanking}
                setMaxRanking={setMaxRanking}
                setCountry={setCountry}
                setTour={setTour}
                getAndFilterPlayers={getAndFilterPlayers}
            />
        </Main>
    )
};

type StaticProps = {
    players: PlayerType[]
    endpoint: string
    rankingProperty: string
};

export async function getStaticProps(): Promise<GetStaticPropsResult<StaticProps>> {
    try {
        const data: PlayerType[] = await (await axios.post(`${API_URL}/race-to-london`, { tour: 'ATP' })).data.results.rankings;
        const players = data.filter(player => player.race_ranking <= 50 && player.full_name !== 'Kevin Krawietz');

        return {
            props: {
                players,
                endpoint: 'race-to-london',
                rankingProperty: 'race_ranking'
            }
        }
    }
    catch (err) {
        console.log(err)
        return {
            props: {
                players: [],
                endpoint: 'race-to-london',
                rankingProperty: 'race_ranking'
            }
        }
    }
};