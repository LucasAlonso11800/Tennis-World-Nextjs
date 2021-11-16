import { NextApiRequest, NextApiResponse } from "next"
import { checkAuth } from "../../../helpers/checkAuth";
import connectDB from "../../../middlewares/mongo";
import Article from "../../../models/Article";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, urlToImage, description, url, userId, token } = req.body;
    checkAuth(token)

    const newArticle = new Article({
        title,
        urlToImage,
        description,
        url,
        userId
    });

    try {
        await Article.insertMany(newArticle)
        res.json('Article saved')
    }
    catch (err: any) {
        throw new Error(err)
    }
};

export default connectDB(handler);