import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { Context } from '../contexts/Context';



export const ShowData = () => {

    const { name, age } = useContext(Context);

    return (
        <div>
            tela de {name}
            Tela ShowData
            <br />
            <Link to={'/'}>Ir para signUp</Link>
        </div>
    )
}