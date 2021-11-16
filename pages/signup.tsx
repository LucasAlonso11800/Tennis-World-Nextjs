import React, { useState, useContext } from 'react';
import axios from 'axios';
// Context
import { GlobalContext } from '../context/GlobalState';
// Const
import { API_URL } from '../const/ServerURL';
// Components
import { Main } from '../styles/GlobalStyles';
import UserForm from '../components/UserForm/UserForm';
// Types
import { EActionTypes } from '../types/types';
import PageHead from '../components/PageHead';

export default function SignUpPage() {
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [authError, setAuthError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    if (state !== null && typeof window !== 'undefined') window.location.assign("/");

    async function saveUser(e: Event) {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await (await axios.post(`${API_URL}/users/add`, { email, password })).data

            dispatch({
                type: EActionTypes.LOGIN,
                payload: {
                    _id: data._id,
                    token: data.token,
                }
            });
            setAuthError('');
            setEmail('');
            setPassword('');
            setLoading(false);
            window.location.assign('/');
        }
        catch (err) {
            setLoading(false);
            setAuthError('Email already registered')
        }
    };

    return (
        <>
            <PageHead title="Register" />
            <Main backgroundURL="/backgrounds/Hard.jpg">
                <UserForm
                    title={'Create Account'}
                    subtitle={'Sign up and save articles about your favourite players and tournaments'}
                    buttonText={'Sign up'}
                    loading={loading}
                    authError={authError}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={saveUser}
                />
            </Main>
        </>
    )
};