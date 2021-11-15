import React from 'react';
import Head from 'next/head';

type Props = {
    title: string
}

export default function PageHead(props: Props) {
    const { title } = props;
    return (
        <Head>
            <title>Tennis World - {title}</title>
            <meta name="description" content={`Tennis World - ${title}`} />
            <meta name="keywords" content="Tennis, Rankings, Sports, Tournaments, Djokovic, Nadal, Federer, News" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Lucas Alonso" />
            <meta name="charset" content="utf-8" />
            <link rel="icon" href="/logos/ATP.png" />
        </Head>
    )
};