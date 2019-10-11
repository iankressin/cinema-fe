import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Button from "./components/Button";
import MoviesListView from "./views/MoviesListView";
import ScreenTimeListView from "./views/ScreenTimeListView";
import Tabs from "./components/Tabs";
import MovieInfoView from "./views/MovieInfoView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MoviesListView} />
        <Route path="/horarios" exact={true} component={ScreenTimeListView} />
        <Route path="/cinemas" exact={true} component={MovieInfoView} />
      </Switch>
      <Tabs />
    </BrowserRouter>
  );
}

export default App;
