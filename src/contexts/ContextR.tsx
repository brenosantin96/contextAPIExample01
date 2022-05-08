import { createContext, useReducer } from "react";
import { UserType, userReducer, userInitialState } from '../reducers/userReducer';
import {ThemeType, themeReducer, themeInitialState} from '../reducers/themeReducer'
import { reducerActionType } from "../types/reducerActionType";


type initialStateType = {
    user: UserType;
    theme: ThemeType;

}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState,
    theme: themeInitialState
}

//Criando um context de reducers
export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

//Criando um mainReducer que vai ter varios reducers.
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

//Adicionando Children manualmente no nosso componente
//https://alunos.b7web.com.br/forum/reactjs/property-children-does-not-exist-on-type
interface ComponentWithChildrenProps {
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ComponentWithChildrenProps) => {

    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>

            {children}

        </ Context.Provider>

    )
}