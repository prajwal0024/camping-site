import React from "react";
import "./sass/main.scss";
import { CreateAccountPage } from "./pages/Authentication/CreateAccountPage";
import { LoginPage } from "./pages/Authentication/LoginPage";
import { ForgetPasswordPage } from "./pages/Authentication/ForgetPasswordPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FourZeroFourPage } from "./pages/FourZeroFourPage";
import { HomePage } from "./pages/Home/HomePage";
import { UserProfilePage } from "./pages/Account/UserProfilePage";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/createAccount" component={CreateAccountPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/forget" component={ForgetPasswordPage} />
          <PrivateRoute exact path="/account" component={UserProfilePage} />
          <Route exact path="*" component={FourZeroFourPage} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
