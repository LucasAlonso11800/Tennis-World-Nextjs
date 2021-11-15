import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import { Actions, DecodedTokenType, UserType } from '../types/types';

let initialState: UserType | null = null;

if (localStorage.getItem("token")) {
    const decodedToken: DecodedTokenType = jwtDecode(localStorage.getItem("token") as string);

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
    } else {
        initialState = {
            _id: decodedToken._id,
            token: localStorage.getItem("token") as string
        }
    }
};

export const GlobalContext = createContext<{
    state: UserType | null
    dispatch: React.Dispatch<Actions>
}>({
    state: initialState,
    dispatch: () => { },
});

function reducer(state: UserType | null, action: Actions) {
    switch (action.type) {
        case 'LOGIN': {
            localStorage.setItem("token", action.payload.token)
            return action.payload
        }
        case 'LOGOUT': {
            localStorage.removeItem("token")
            return null
        }
        default: return state
    }
};

type ProviderProps = { children: React.ReactNode };
export const GlobalProvider = (props: ProviderProps) => {
    const { children } = props
    const [state, dispatch] = useReducer(reducer, initialState);

    return <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
    </GlobalContext.Provider>
};