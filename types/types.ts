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
};

export type MatchType = {
    away_id: number
    away_player: string
    court: string
    date: string
    home_id: number
    home_player: string
    id: number
    round_id: number
    round_name: string
    status: string
    title: string
    result: ResultType
};

export type ResultType = {
    away_set1: number
    away_set2: number
    away_set3: number
    away_set4: number
    away_set5: number
    away_sets: number
    away_tb1: number
    away_tb2: number
    away_tb3: number
    away_tb4: number
    away_tb5: number
    home_set1: number
    home_set2: number
    home_set3: number
    home_set4: number
    home_set5: number
    home_sets: number
    home_tb1: number
    home_tb2: number
    home_tb3: number
    home_tb4: number
    home_tb5: number
    result_description: string
    winner_id: number
};