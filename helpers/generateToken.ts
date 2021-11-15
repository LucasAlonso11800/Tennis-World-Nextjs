import jwt from 'jsonwebtoken';
import { UserType } from '../types/types';

export function generateToken(user: UserType) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' })
};