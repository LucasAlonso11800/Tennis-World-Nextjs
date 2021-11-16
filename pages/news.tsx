import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState';
// Const
import { API_URL } from '../const/ServerURL';
// Types
import { GetStaticPropsResult } from 'next';
import { ArticleType } from '../types/types';
// Components
import { Main } from '../styles/GlobalStyles';
import PageHead from '../components/PageHead';
import LoadingIcon from '../components/LoadingIcon/LoadingIcon';
import Articles from '../components/Articles/Articles';
import SearchTab from '../components/SearchTab/SearchTab';

type Props = {
    articles: ArticleType[]
};

export default function NewsPage(props: Props) {
    const { state } = useContext(GlobalContext);
    const { articles } = props;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [news, setNews] = useState<ArticleType[]>(articles);
    const [query, setQuery] = useState<string>('Tennis');
    const [userArticles, setUserArticles] = useState<ArticleType[]>()

    async function searchNews(e: Event) {
        setIsLoading(true)
        e.preventDefault();
        try {
            const data: ArticleType[] = await (await axios.post(`${API_URL}/news`, { query })).data
            setIsLoading(false);
            setNews(data.slice(0, 10));
        }
        catch (err: any) {
            console.log(err)
        }
    };

    useEffect(() => {   
        if(state !== null){
            (async () => {
                try {
                    const data = await (await axios.post(`${API_URL}/news/get-news`, { id: state._id })).data
                    setUserArticles(data);
                }
                catch (err) {
                    console.log(err)
                }
            })();
        }
    }, [state]);

    return (
        <>
            <PageHead title="News" />
            <Main backgroundURL="/backgrounds/Clay.jpg">
                <SearchTab query={query} setQuery={setQuery} searchNews={searchNews} />
                {isLoading ? <LoadingIcon /> : <Articles news={news} userArticles={userArticles} setUserArticles={setUserArticles} pageName="news"/>}
            </Main>
        </>
    )
};

type StaticProps = {
    articles: ArticleType[]
};

export async function getStaticProps(): Promise<GetStaticPropsResult<StaticProps>> {
    try {
        const data: ArticleType[] = await (await axios.post(`${API_URL}/news`, { query: "Tennis" })).data;
        return {
            props: {
                articles: data
            }
        }
    }
    catch (err) {
        console.log(err)
        return {
            props: {
                articles: []
            }
        }
    }
};