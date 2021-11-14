import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPageSection from '../components/LandingPage/LandingPageSection'
import { articlesSection, calendarSection, currentTournamentsSection, newsSection, raceSection, rankingsSection } from '../const/LandingPageData'
import { Main } from '../styles/GlobalStyles'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Tennis World</title>
                <meta name="description" content="Tennis World" />
                <link rel="icon" href="/logos/ATP.png" />
            </Head>
            <Main>
                <LandingPageSection {...rankingsSection}/>
                <LandingPageSection {...raceSection}/>
                <LandingPageSection {...currentTournamentsSection}/>
                <LandingPageSection {...calendarSection}/>
                <LandingPageSection {...newsSection}/>
                <LandingPageSection {...articlesSection}/>
            </Main>
        </>
    )
}

export default Home
