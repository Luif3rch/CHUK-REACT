import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import * as serviceWorker from './serviceWorker'
//LOGIN-PAGE
import Login from "./pages/Login";
import ForgetPass from "./pages/ForgetPass";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
//COMPONENTS

import Categories from "./pages/Categories";
import JokeRandom from "./pages/JokeRandom";

;

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="ForgetPass" element={<ForgetPass />} />
      <Route path="SignUp" element={<SignUp />} />  

      <Route path="Home" element={<Home />} />
      <Route path="Categories" element={<Categories />} />
      <Route path="JokeRandom" element={<JokeRandom />} />
    </Routes>
  </BrowserRouter>
);
serviceWorker.unregister();
