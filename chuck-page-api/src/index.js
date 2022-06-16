import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


//LOGIN
import SignInSide from "./routes/SignInSide";
import ForgetPass from "./routes/ForgetPass";
import SignUp from "./routes/SignUp";
//APP
import App from "./App";
//
import Categories from "./routes/Categories";


import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInSide />} />
      <Route path="SignInSide" element={<SignInSide />} />
      <Route path="ForgetPass" element={<ForgetPass />} />
      <Route path="SignUp" element={<SignUp />} />

      <Route path="App" element={<App />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
