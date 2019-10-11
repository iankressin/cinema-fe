import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MoviesListView from "./views/MoviesListView";
import ScreenTimeListView from "./views/ScreenTimeListView";
import Menu from "./components/Menu";
import MovieInfoView from "./views/MovieInfoView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MoviesListView} />
        <Route path="/horarios" exact={true} component={ScreenTimeListView} />
        <Route path="/cinemas" exact={true} component={MovieInfoView} />
      </Switch>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
