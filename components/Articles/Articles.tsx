import React, { Dispatch, SetStateAction } from 'react';
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
import { ArticleType } from '../../types/types';
import axios from 'axios';
import { API_URL } from '../../const/ServerURL';

type Props = {
    news: ArticleType[]
    setNews: Dispatch<SetStateAction<ArticleType[]>>
    isSaved?: boolean
};

export default function Articles(props: Props) {
    const { news, setNews, isSaved } = props;

    // async function saveArticle(article: ArticleType) {
    //     const { url, title, urlToImage, description } = article;
    //     if (saved) {
    //         try {
    //             await axios.post(`${API_URL}/news/delete`, { url, userId: userData.userId, token: userData.token });
    //             setSaved(!saved);
    //             if(setNews) setNews(news => news.filter(n => n.url !== url));
    //         }
    //         catch (err) { console.log(err) }
    //     }
    //     else {
    //         try {
    //             await axios.post(`${API_URL}/news/add`, { title, urlToImage, description, url, userId: userData.userId, token: userData.token });
    //             setSaved(!saved);
    //         }
    //         catch (err) { console.log(err) }
    //     }
    // };

    return (
        <ArticlesContainer>
            {news.map(article => {
                const { url, title, urlToImage, description } = article;
                return (
                    <ArticleContainer key={article.url}>
                        <ArticleTitle>{title}</ArticleTitle>
                        <ArticleImg src={urlToImage} />
                        <ArticleDescription>{description}</ArticleDescription>
                        <ArticleButtons>
                            <ArticleButton type="button" bold={false}>
                                <ArticleLink target='_BLANK' href={url}>Read More</ArticleLink>
                            </ArticleButton>
                            {/* <ArticleButton type="button" onClick={() => saveArticle()} bold={true}>
                                {!userData ? 'Be sure to log in to save articles' :
                                    saved ? 'Article saved' : 'Save Article'}
                            </ArticleButton> */}
                        </ArticleButtons>
                    </ArticleContainer>
                )
            })}
        </ArticlesContainer>
    )
};