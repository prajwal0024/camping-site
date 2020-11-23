import React from "react";
import "./sass/main.scss";
import { CreateAccountPage } from "./pages/Authentication/CreateAccountPage";
import { LoginPage } from "./pages/Authentication/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FourZeroFourPage } from "./pages/FourZeroFourPage";
import { HomePage } from "./pages/Home/HomePage";
import { UserProfilePage } from "./pages/Account/UserProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/createAccount" component={CreateAccountPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/account" component={UserProfilePage} />
        <Route exact path="*" component={FourZeroFourPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
