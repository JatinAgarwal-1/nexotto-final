import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Component/SignIn";
import Validate from "./Component/Validate";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={Validate}></Route>
      </Switch>
    </>
  );
};

export default App;
