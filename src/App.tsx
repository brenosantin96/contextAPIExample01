import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowData } from "./pages/ShowData";
import { SignUp } from "./pages/SignUp";
import { ContextProvider } from './contexts/Context';


const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Titulo da página</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/exibir" element={<ShowData />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;