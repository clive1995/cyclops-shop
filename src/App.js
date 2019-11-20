import React from 'react';
import './App.css';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignInAndSignUp} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
