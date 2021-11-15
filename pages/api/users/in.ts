import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs';
import User from "../../../models/User";
import { generateToken } from "../../../helpers/generateToken";
import { UserType } from "../../../types/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user: UserType | null = await User.findOne({ email: req.body.email });
        if (!user) throw new Error('User not found');

        const match: boolean = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error('Wrong username or password');

        const token = generateToken(user);
        res.json({
            _id: user._id,
            token
        });
    }
    catch (err: any) {
        throw new Error(err)
    }
};