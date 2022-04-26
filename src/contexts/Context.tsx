import React, { createContext } from "react";

type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: 'Breno',
    age: 26
};

type Props = {
    children: React.ReactNode;
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider = ({ children } : Props) => {

    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}