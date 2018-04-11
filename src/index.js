import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import registerServiceWorker from "./utils/registerServiceWorker";
import models from "./models";
import _times from "lodash/times";

// UI
import CssBaseline from "material-ui/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import blue from "material-ui/colors/blue";
import grey from "material-ui/colors/grey";

// Modules
import Home from "./containers/Home";

// Styles
const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: blue["A700"]
    },
    secondary: grey
  },
  shadows: _times(
    25,
    () =>
      "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"
  )
});

const history = createBrowserHistory();

ReactDOM.render(
  <Provider {...models}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
