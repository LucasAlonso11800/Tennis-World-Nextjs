import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${req.body.query}&en&apiKey=${process.env.NEWS_API_KEY}`)
        res.json(response.data.articles)
    }
    catch (err: any) {
        throw new Error(err)
    }
};