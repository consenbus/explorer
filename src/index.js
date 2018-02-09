import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import registerServiceWorker from "./utils/registerServiceWorker";
import models from "./models";

// Modules
import Home from "./containers/Home";

// Styles
import "semantic-ui-css/semantic.min.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider {...models}>
    <Router history={history}>
      <Switch>
        <Route path="/" name="Home" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
