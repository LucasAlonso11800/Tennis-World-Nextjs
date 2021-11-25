import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
// Const
import { API_URL } from '../const/ServerURL';
// Types
import { ETour, TournamentType } from '../types/types';
import { GetStaticPropsResult } from 'next';
// Components
import PageHead from '../components/PageHead';
import { Main } from '../styles/GlobalStyles';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import SeasonTable from '../components/SeasonTable/SeasonTable';
import PageTitle from '../components/PageTitle/PageTitle';

type Props = {
    seasonTournaments: TournamentType[]
}

export default function SeasonPage(props: Props) {
    const { seasonTournaments } = props;

    const firstUpdate = useRef(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [tournaments, setTournaments] = useState<TournamentType[]>(seasonTournaments);
    const [tour, setTour] = useState<ETour>(ETour.ATP);

    useEffect(() => {
        if (firstUpdate.current){
            firstUpdate.current = false;
            return
        };
            
        setIsLoading(true);
        (async () => {
            try {
                const data = await (await axios.post(`${API_URL}/season`, { tour })).data
                setIsLoading(false);
                setTournaments(data);
            }
            catch (err) {
                console.log(err)
            }
        })();
    }, [tour]);

    const year = new Date().getFullYear();

    return (
        <>
            <PageHead title={`Season ${year}`} />
            <Main backgroundURL="/backgrounds/Us-Open.jpg">
                <PageTitle
                    title={`Season ${year}`}
                    subtitle={''}
                    setTour={setTour}
                />
                {isLoading ? <LoadingIcon /> : <SeasonTable tournaments={tournaments} />}
            </Main>
        </>
    )
};

type StaticProps = {
    seasonTournaments: TournamentType[]
};

export async function getStaticProps(): Promise<GetStaticPropsResult<StaticProps>> {
    try {
        const data: TournamentType[] = await (await axios.post(`${API_URL}/season`, { tour: ETour.ATP })).data;

        return {
            props: {
                seasonTournaments: data,
            },
            revalidate: 60 * 60 * 24 * 7
        }
    }
    catch (err) {
        console.log(err)
        return {
            props: {
                seasonTournaments: [],
            },
            revalidate: 10
        }
    }
};