import React, { Dispatch, SetStateAction } from 'react';
import {
    FormContainer,
    NewsInput,
    SearchButton
} from './SearchTab.elements';

type Props = {
    query: string,
    setQuery: Dispatch<SetStateAction<string>>,
    searchNews: (e: any) => void
};

export default function SearchTab(props: Props) {
    const { query, setQuery, searchNews } = props;
    return (
        <FormContainer>
            <NewsInput
                type='text'
                placeholder='Search News About Your Favourite Players and Tournaments'
                value={query}
                onChange={e => setQuery(e.target.value)} />
            <SearchButton onClick={e => searchNews(e)}>Search News</SearchButton>
        </FormContainer>
    )
};