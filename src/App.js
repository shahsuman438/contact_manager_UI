import { Home } from "./pages/home/Home";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Login } from "./pages/login/Login";
import { List } from "./pages/list/List";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";

import "./style/dark.scss"
import { useContext, useState } from "react";
import { darkmodeContext } from "./context/darkmodeContext";
import Register from "./pages/register/Register";

function App() {
  // const [dark,setDark]=useState(false)


  const {darkMode}=useContext(darkmodeContext)



  return (
    <div className={darkMode?"app dark":"App"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="auth/login" element={<Login/>}/>
          <Route path="auth/register" element={<Register/>}/>
          <Route path="profile" element={<Single/>}></Route>
          <Route path="contacts">
            <Route index element={<List/>}></Route>
            <Route path="new" element={<New/>}></Route>
          </Route>
          <Route path="product">
            <Route index element={<List/>}></Route>
            <Route path=":productId" element={<Single/>}></Route>
            <Route path="new" element={<New/>}></Route>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
