import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./pages/Main";
import FaceDetectionPage from "./pages/FaceDetection";

const Routes = () => (
  <Switch>
    <Route component={MainPage} path="/" exact />
    <Route component={FaceDetectionPage} path="/face" exact />
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
