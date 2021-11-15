import type { NextPage } from 'next'
import PageHead from '../components/PageHead'
import LandingPageSection from '../components/LandingPage/LandingPageSection'
import { articlesSection, calendarSection, currentTournamentsSection, newsSection, raceSection, rankingsSection } from '../const/LandingPageData'
import { Main } from '../styles/GlobalStyles'

const Home: NextPage = () => {
    return (
        <>
            <PageHead title="" />
            <Main>
                <LandingPageSection {...rankingsSection} />
                <LandingPageSection {...raceSection} />
                <LandingPageSection {...currentTournamentsSection} />
                <LandingPageSection {...calendarSection} />
                <LandingPageSection {...newsSection} />
                <LandingPageSection {...articlesSection} />
            </Main>
        </>
    )
}

export default Home
