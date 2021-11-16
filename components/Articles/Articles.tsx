import React, { Dispatch, SetStateAction, useContext } from 'react';
import axios from 'axios';
// Context
import { GlobalContext } from '../../context/GlobalState';
// Components
import {
    ArticlesContainer,
    ArticleContainer,
    ArticleTitle,
    ArticleImg,
    ArticleDescription,
    ArticleButtons,
    ArticleButton,
    ArticleLink
} from './Articles.elements';
// Types
import { ArticleType } from '../../types/types';
// Const
import { API_URL } from '../../const/ServerURL';

type Props = {
    news?: ArticleType[]
    setNews?: Dispatch<SetStateAction<ArticleType[] | undefined>>
    userArticles?: ArticleType[] | undefined
    setUserArticles?: Dispatch<SetStateAction<ArticleType[] | undefined>>
    pageName: string
};

export default function Articles(props: Props) {
    const { news, setNews, userArticles, setUserArticles, pageName } = props;

    const { state } = useContext(GlobalContext);

    async function saveArticle(article: ArticleType) {
        const { url, title, urlToImage, description } = article;
        if (state === null) return window.location.assign('/signin');

        const saved = pageName === "news" ?
            userArticles ? userArticles.find(userArticle => userArticle.url === article.url) : false : true;

        if (saved) {
            try {
                await axios.post(`${API_URL}/news/delete`, { url, userId: state?._id, token: state?.token });
                if (setUserArticles) setUserArticles(articles => articles?.filter(art => art.url !== url));
                if (setNews) setNews(news => news?.filter(n => n.url !== url));
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            try {
                await axios.post(`${API_URL}/news/add`, { title, urlToImage, description, url, userId: state?._id, token: state?.token });
                window.location.assign('/user-articles')
            }
            catch (err) {
                console.log(err)
            }
        }
    };

    return (
        <ArticlesContainer>
            {news?.map(article => {
                const { url, title, urlToImage, description } = article;

                const saved = pageName === "news" ?
                    userArticles ? userArticles.find(userArticle => userArticle.url === article.url) : false : true;

                return (
                    <ArticleContainer key={article.url}>
                        <ArticleTitle>{title}</ArticleTitle>
                        <ArticleImg src={urlToImage} />
                        <ArticleDescription>{description}</ArticleDescription>
                        <ArticleButtons>
                            <ArticleButton type="button" bold={false}>
                                <ArticleLink target='_BLANK' href={url}>Read More</ArticleLink>
                            </ArticleButton>
                            <ArticleButton type="button" onClick={() => saveArticle(article)} bold={true}>
                                {state === null ? 'Be sure to log in to save articles' :
                                    saved ? 'Article saved' :
                                        'Save Article'
                                }
                            </ArticleButton>
                        </ArticleButtons>
                    </ArticleContainer>
                )
            })}
        </ArticlesContainer>
    )
};