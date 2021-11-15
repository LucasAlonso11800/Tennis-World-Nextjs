export type LandingPageSectionDataType = {
    lightbg: boolean;
    imgStart: boolean;
    heading: string;
    title: string;
    text: string;
    link: string;
    linkText: string;
    img: string;
    alt: string;
}

export type PlayerType = {
    country: string
    first_name: string
    full_name: string
    id: number
    last_name: string
    movement: string
    ranking: number
    race_ranking: number
    ranking_points: number
    race_points: number
};

export enum ETour {
    ATP = 'ATP',
    WTA = 'WTA'
};

export type TournamentType = {
    city: string
    code: string
    country: string
    country_code: string
    end_date: string
    id: number
    name: string
    season: number
    start_date: string
    surface: string
}