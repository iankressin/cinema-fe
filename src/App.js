import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Button from "./components/Button";
import MoviesListView from "./views/MoviesListView";
import TimeListView from "./views/TimeListView";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={MoviesListView} />
          <Route path="/horarios" exact={true} component={TimeListView} />
          <Route path="/cinemas" exact={true} component={Button} />
        </Switch>
        <Tabs />
      </BrowserRouter>
    </div>
  );
}

export default App;
