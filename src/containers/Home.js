import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Actions
import NotFound from "../components/NotFound";
import HomeIndex from "./Home/Index";
import HomeExample from "./Home/Example";

class Home extends Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route path="/" exact component={HomeIndex} />
          <Route path="/example" name="HomeExample" component={HomeExample} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Home;
