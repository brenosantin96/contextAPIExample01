import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react';

import { Context } from '../contexts/ContextR';

export const SignUp = () => {

    const { state, dispatch } = useContext(Context);
    const [nameInput, setNameInput] = useState(state.user.name);
    const [ageInput, setAgeInput] = useState(state.user.age);


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgeInput(parseInt(e.target.value));
    }

    const handleSave = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: { name: nameInput }
        });
        dispatch({
            type: 'CHANGE_AGE',
            payload: { age: ageInput }
        });
    }


    return (
        <div>
            <h3>Tela SignUP: (Tema: {state.theme.status})</h3>
            <input type="text" placeholder='Digite um nome' value={nameInput} onChange={handleNameChange} />
            <input type="text" placeholder='Digite uma idade' value={ageInput} onChange={handleAgeChange} />

            <button onClick={handleSave}>Salvar</button>

            <Link to={'/exibir'}>Ir para showData</Link>
        </div>
    )
}