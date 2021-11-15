import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { TENNIS_API_URL } from '../../const/ServerURL';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { tour } = req.body;
    const currentYear = new Date().getFullYear();
    try {
        const { data } = await axios.get(`${TENNIS_API_URL}/tournaments/${tour}/${currentYear}`, {
            headers: {
                'x-rapidapi-key': process.env.TENNIS_API_KEY as string,
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        });
        res.json(data.results)
    }
    catch (err: any) {
        throw new Error(err)
    }
};