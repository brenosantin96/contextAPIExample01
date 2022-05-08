import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../contexts/ContextR';



export const ShowData = () => {

    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h3>Tela ShowData</h3>

            MEU NOME É: {state.user.name}
            <br />
            MINHA IDADE É: {state.user.age}
            
            <br />
            <Link to={'/'}>Ir para signUp</Link>
        </div>
    )
}