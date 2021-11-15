import { NextApiRequest, NextApiResponse } from "next"
import Article from "../../../models/Article"
import { ArticleType } from "../../../types/types"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    try {
        const articles: ArticleType[] = await Article.find({ userId: id }).sort({ 'date': -1 });
        res.json(articles);
    }
    catch (err) {
        console.log(err)
    }
};