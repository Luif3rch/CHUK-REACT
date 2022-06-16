
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";


import SignInSide from './routes/SignInSide';

function App() {
  return (
    
    <switch>


    <Route path="/">
      <SignInSide/>
    </Route>
    <Link to="/invoices">Invoices</Link> |{" "}
    <Link to="/expenses">Expenses</Link>


    </switch>
  );
}

export default App;
