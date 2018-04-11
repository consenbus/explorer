import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Actions
import NotFound from "./NotFound";
import HomeIndex from "./Home/Index";
import HomeExample from "./Home/Example";
import HomeBlock from "./Home/Block";
import HomeAccount from "./Home/Account";

class Home extends Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route path="/" exact component={HomeIndex} />
          <Route path="/blocks/:hash" exact component={HomeBlock} />
          <Route path="/accounts/:id" exact component={HomeAccount} />
          <Route path="/example" name="HomeExample" component={HomeExample} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Home;
