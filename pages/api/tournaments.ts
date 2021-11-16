import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { TENNIS_API_URL } from '../../const/ServerURL';
import { ETour } from '../../types/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { tour } = req.body;
    const date = new Date().toISOString().substr(0, 10)
    try {
        const { data } = await axios.get(`${TENNIS_API_URL}/matches-by-date/${date}`, {
            headers: {
                'x-rapidapi-key': process.env.TENNIS_API_KEY as string,
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        });

        res.json(data.results[tour === ETour.ATP ? 0 : 1]);
    }
    catch (err: any) {
        throw new Error(err)
    }
};