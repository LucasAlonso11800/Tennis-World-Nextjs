import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import { Actions, DecodedTokenType, UserType } from '../types/types';

export const GlobalContext = createContext<{
    state: UserType | null
    dispatch: React.Dispatch<Actions>
}>({
    state: null,
    dispatch: () => { },
});

function getInitialState() {
    if (typeof localStorage !== "undefined") {
        if (localStorage.getItem("token")) {
            const decodedToken: DecodedTokenType = jwtDecode(localStorage.getItem("token") as string);

            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem("token");
                return null;
            };

            return {
                _id: decodedToken._id,
                token: typeof localStorage !== undefined ? localStorage.getItem("token") as string : ''
            }
        }
    };
    return null;
};

function reducer(state: UserType | null, action: Actions) {
    switch (action.type) {
        case 'LOGIN': {
            typeof localStorage !== undefined ? localStorage.setItem("token", action.payload.token) : () => { };
            return action.payload
        }
        case 'LOGOUT': {
            typeof localStorage !== undefined ? localStorage.removeItem("token") : () => { };
            return null
        }
        default: return state
    }
};

type ProviderProps = { children: React.ReactNode };
export const GlobalProvider = (props: ProviderProps) => {
    const { children } = props

    const [state, dispatch] = useReducer(reducer, getInitialState());

    return <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
    </GlobalContext.Provider>
};