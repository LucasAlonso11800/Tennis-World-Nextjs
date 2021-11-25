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
import PageHead from '../components/PageHead';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import RankingTable from '../components/RankingTable/RankingTable';
import RankingForm from '../components/RankingForm/RankingForm';

type Props = {
    players: PlayerType[]
    endpoint: string
};

export default function RaceRankingPage(props: Props) {
    const { players, endpoint } = props;

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
            const data: PlayerType[] = await (await axios.post(`${API_URL}/${endpoint}`, {
                tour, country, minRanking, maxRanking
            })).data;

            setIsLoading(false);
            setRankings(data);
        }
        catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <PageHead title="Race Rankings" />
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
        </>
    )
};

type StaticProps = {
    players: PlayerType[]
    endpoint: string
    rankingProperty: string
};

export async function getStaticProps(): Promise<GetStaticPropsResult<StaticProps>> {
    try {
        const data: PlayerType[] = await (await axios.post(`${API_URL}/race-ranking`, {
            tour: ETour.ATP,
            country: '',
            minRanking: 1,
            maxRanking: 50
        })).data;

        return {
            props: {
                players: data,
                endpoint: 'race-ranking',
                rankingProperty: 'race_ranking'
            },
            revalidate: 60 * 60 * 24 * 7
        }
    }
    catch (err) {
        console.log(err)
        return {
            props: {
                players: [],
                endpoint: 'race-ranking',
                rankingProperty: 'race_ranking'
            },
            revalidate: 10
        }
    }
};