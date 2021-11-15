import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { TENNIS_API_URL } from "../../const/ServerURL";
import { PlayerType } from "../../types/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { tour, country, minRanking, maxRanking } = req.body;
    try {
        const { data } = await axios.get(`${TENNIS_API_URL}/rankings/race/${tour}`, {
            headers: {
                'x-rapidapi-key': process.env.TENNIS_API_KEY as string,
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        });

        const players = data.results.rankings
            .filter((player: PlayerType) => player.race_ranking >= minRanking && player.race_ranking <= maxRanking)
            .filter((player: PlayerType) => country === '' ? player : player.country === country);
        
        res.json(players);
    }
    catch (err: any) {
        throw new Error(err)
    }
}