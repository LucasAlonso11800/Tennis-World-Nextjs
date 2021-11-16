import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// Context
import { GlobalContext } from '../context/GlobalState';
// Const
import { API_URL } from '../const/ServerURL';;
// Components
import { Main } from '../styles/GlobalStyles';
import PageHead from '../components/PageHead';
import Articles from '../components/Articles/Articles';
import WarningCard from '../components/WarningCard/WarningCard';
// Types
import { ArticleType } from '../types/types';

export default function UserPage() {
    const { state } = useContext(GlobalContext);
    const [news, setNews] = useState<ArticleType[] | undefined>();

    useEffect(() => {
        if (state) {
            (async () => {
                try {
                    const data = await (await axios.post(`${API_URL}/news/get-news`, { id: state._id })).data
                    setNews(data)
                }
                catch (err) {
                    console.log(err)
                }
            })()
        }
    }, [state]);

    return (
        <>
            <PageHead title="Your articles" />
            <Main backgroundURL="/backgrounds/Balls.jpg">
                {state !== null ? <Articles news={news} setNews={setNews} pageName="user-articles"/> : <WarningCard />}
            </Main>
        </>
    )
};