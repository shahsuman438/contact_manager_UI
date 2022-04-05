
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { List } from "./pages/list/List";
import { Single } from "./pages/single/Single";
import { New } from "./pages/new/New";

import "./style/dark.scss"
import { useContext } from "react";
import { darkmodeContext } from "./context/darkmodeContext";

import Auth from "./components/auth/Auth";
import Protected from "./components/auth/protected/Protected";
import PageNotFound from "./components/pagenotfound/PageNotFound";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProtected from "./components/auth/protected/AuthProtected";



function App() {
  const { darkMode } = useContext(darkmodeContext)
  return (
    <div className={darkMode ? "app dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">,
            <Route index element={<Protected cmp={Home} />} />
            <Route path="auth" element={<AuthProtected cmp={Auth} />} />
            <Route path="profile" element={<Protected cmp={Single} />}></Route>
            <Route path="contacts">
              <Route index element={<Protected cmp={List} />}></Route>
              <Route path="new" element={<Protected cmp={New} />}></Route>
              <Route path="edit/:id" element={<Protected cmp={New} />}></Route>
            </Route>
            {/* <Route path="product">
            <Route index element={<List/>}></Route>
            <Route path=":productId" element={<Single/>}></Route>
            <Route path="new" element={<New/>}></Route>
          </Route> */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
