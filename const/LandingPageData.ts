import { LandingPageSectionDataType } from '../types/types';
import { formattedDate } from './FormattedDate';

export const rankingsSection: LandingPageSectionDataType = {
    lightbg: true,
    imgStart: true,
    heading: `Updated to ${formattedDate}`,
    title: 'Rankings ATP & WTA',
    text: 'Check the current ATP and WTA rankings, filter players by country and ranking',
    link: '/ranking',
    linkText: 'Rankings',
    img: '/miniatures/Djokovic.jpg',
    alt: 'Novak Djokovic'
};

export const raceSection: LandingPageSectionDataType = {
    lightbg: false,
    imgStart: false,
    heading: `Updated to ${formattedDate}`,
    title: 'Race to the finals',
    text: "Check the current season's ranking and see if your favourite player is getting into the World Tour Finals",
    link: '/race-to-london',
    linkText: 'Race to the finals',
    img: '/miniatures/Nadal.jpg',
    alt: 'Rafael Nadal'
};

export const currentTournamentsSection: LandingPageSectionDataType = {
    lightbg: true,
    imgStart: true,
    heading: `Updated to ${formattedDate}`,
    title: 'Current Tournaments',
    text: "Check the matches being played today in both ATP and WTA circuits",
    link: '/current-tournaments',
    linkText: 'Current Tournaments',
    img: '/miniatures/Federer.jpg',
    alt: 'Roger Federer'
};

export const calendarSection: LandingPageSectionDataType = {
    lightbg: false,
    imgStart: false,
    heading: `Updated to ${formattedDate}`,
    title: 'Season Calendar',
    text: "Check the current season calendar and the dates and cities each tournament is held",
    link: '/season',
    linkText: 'Season Calendar',
    img: '/miniatures/Osaka.jpg',
    alt: 'Naomi Osaka'
};

export const newsSection: LandingPageSectionDataType = {
    lightbg: true,
    imgStart: true,
    heading: `Updated to ${formattedDate}`,
    title: 'News',
    text: "Look for the most recent news about Tennis, tournaments and your favourite players",
    link: '/news',
    linkText: 'News',
    img: '/miniatures/Delpo.jpg',
    alt: 'Juan Martin Del Potro'
};

export const articlesSection: LandingPageSectionDataType = {
    lightbg: false,
    imgStart: false,
    heading: `Updated to ${formattedDate}`,
    title: 'Your Articles',
    text: "Create your account and keep track of your favourite articles",
    link: '/user-articles',
    linkText: 'Your articles',
    img: '/miniatures/Sharapova.jpg',
    alt: 'Maria Sharapova'
};