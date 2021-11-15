import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs';
import User from "../../../models/User";
import { generateToken } from "../../../helpers/generateToken";
import { UserType } from "../../../types/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const email: UserType | null = await User.findOne({ email: req.body.email });
        if (email) res.json('Email already registered')

        const newUser: UserType = new User({
            email: req.body.email,
            password: req.body.password
        });

        const salt: string = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(req.body.password, salt);

        const users: UserType[] = await User.insertMany(newUser);
        const token: string = generateToken(users[0]);

        res.json({
            _id: users[0]._id,
            token
        })
    }
    catch (err: any) {
        throw new Error(err)
    }
};