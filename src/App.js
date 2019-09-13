import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Button from "./components/Button";
import MoviesListView from "./views/MoviesListView";
import TimeListView from "./views/TimeListView";
import Tabs from "./components/Tabs";
import MovieInfoView from "./components/MovieInfo";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MoviesListView} />
        <Route path="/horarios" exact={true} component={TimeListView} />
        <Route path="/cinemas" exact={true} component={MovieInfoView} />
      </Switch>
      <Tabs />
    </BrowserRouter>
  );
}

export default App;
