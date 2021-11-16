import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState';
import { API_URL } from '../const/ServerURL';
import { Main } from '../styles/GlobalStyles';

import UserForm from '../components/UserForm/UserForm';
import { EActionTypes } from '../types/types';
import PageHead from '../components/PageHead';

export default function SignInPage() {
    const { state, dispatch } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(false);

    if (state !== null && typeof window !== 'undefined') window.location.assign("/");

    async function login(e: Event) {
        e.preventDefault()
        setLoading(true);
        try {
            const data = await (await axios.post(`${API_URL}/users/in`, { email, password })).data;
            dispatch({
                type: EActionTypes.LOGIN,
                payload: {
                    _id: data._id,
                    token: data.token,
                }
            });
            setEmail('');
            setPassword('');
            setAuthError('');
            setLoading(false);
            window.location.assign("/");
        }
        catch (err) {
            setLoading(false);
            setAuthError('Email or password incorrect')
        }
    };

    return (
        <>
            <PageHead title="Login" />
            <Main backgroundURL='/backgrounds/Finals.jpg'>
                <UserForm
                    title={'Sign In'}
                    subtitle={'Enter and visit your favourite articles about Tennis'}
                    buttonText={'Sign in'}
                    loading={loading}
                    authError={authError}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={login}
                />
            </Main>
        </>
    )
};