import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// Const
import { API_URL } from '../const/ServerURL';
// Types
import { ETour, MatchType, TournamentType } from '../types/types';
import { GetStaticPropsResult } from 'next';
// Component
import { Main } from '../styles/GlobalStyles';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import PageTitle from '../components/PageTitle/PageTitle';
import PageHead from '../components/PageHead';
import Matches from '../components/Matches/Matches';

type Props = {
    tournament: TournamentType | null
    matches: MatchType[]
};

export default function CurrentTournamentsPage(props: Props) {
    const { tournament, matches } = props;
    const firstUpdate = useRef(true);
    const [currentTournament, setCurrentTournament] = useState<TournamentType | null>(tournament);
    const [currentMatches, setCurrentMatches] = useState<MatchType[]>(matches);
    const [tour, setTour] = useState<ETour>(ETour.ATP);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return
        };

        setIsLoading(true);
        (async () => {
            try {
                const data = await (await axios.post(`${API_URL}/tournaments`, { tour })).data
                
                setIsLoading(false);
                setCurrentMatches(data.matches);
                setCurrentTournament(data.tournament);
            }
            catch (err) {
                console.log(err)
            }
        })();
    }, [tour]);

    return (
        <>
            <PageHead title="Current Tournaments"/>
            <Main backgroundURL="/backgrounds/Wimbledon.jpeg">
                <PageTitle
                    title={currentTournament?.name}
                    subtitle={currentTournament?.city}
                    setTour={setTour}
                />
                {isLoading ? <LoadingIcon /> : <Matches matches={currentMatches} />}
            </Main>
        </>
    )
};

type StaticProps = {
    tournament: TournamentType | null
    matches: any[]
};

export async function getStaticProps(): Promise<GetStaticPropsResult<StaticProps>> {
    try {
        const data = await (await axios.post(`${API_URL}/tournaments`, { tour: ETour.ATP })).data;
        console.log(data, Array.isArray(data), typeof data, data === '');
        const { matches, tournament } = data
        return {
            props: {
                tournament,
                matches
            }
        }
    }
    catch (err) {
        console.log(err)
        return {
            props: {
                tournament: null,
                matches: []
            }
        }
    }
};