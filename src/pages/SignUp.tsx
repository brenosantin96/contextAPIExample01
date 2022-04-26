import { Link } from 'react-router-dom'
import { useContext } from 'react';

import {Context} from '../contexts/Context';

export const SignUp = () => {
    
    const {name, age} = useContext(Context);
    
    return (
        <div>
            Tela SignUp do {name} que tem {age} anos.
            <br />
            <Link to={'/exibir'}>Ir para showData</Link>
        </div>
    )
}