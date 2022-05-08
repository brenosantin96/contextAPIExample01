import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowData } from "./pages/ShowData";
import { SignUp } from "./pages/SignUp";
import { Context } from './contexts/ContextR';
import { useContext } from "react";


const App = () => {

  const { state, dispatch } = useContext(Context)

  const handleSwitchTheme = () => {
    if (state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        }
      });
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      });
    }
  }

  return (

    <BrowserRouter>
      <div style={{
        backgroundColor: state.theme.status === 'light' ? '#FFF' : '#000',
        color: state.theme.status === 'light' ? '#000' : '#FFF'
        }}>
        <h1>Titulo da página</h1>
        Tema: {state.theme.status}
        <button onClick={handleSwitchTheme}>Switch Theme</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/exibir" element={<ShowData />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;