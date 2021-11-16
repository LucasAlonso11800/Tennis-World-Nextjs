import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next"
import { checkAuth } from "../../../helpers/checkAuth";
import connectDB from "../../../middlewares/mongo";
import Article from "../../../models/Article";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url, userId, token } = req.body;
    const user = checkAuth(token) as JwtPayload;

    try {
        const article = await Article.findOne({ url: url, userId: userId });
        if (!article) throw new Error('Article not found');
        if (user._id !== article.userId) throw new Error('Action not allowed');

        await Article.findOneAndDelete({ url: url, userId: userId });
        res.json('Article deleted from DB');
    }
    catch (err: any) {
        throw new Error(err)
    }
};

export default connectDB(handler);