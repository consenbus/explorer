import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import Layout from "./_Layout";
import Latest from "./Index/_Latest";
import Stats from "./Index/_Stats";
import appStyle from "../../variables/styles/appStyle";
import yellow from "material-ui/colors/yellow";

class Index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Stats />
        <Latest />
      </Layout>
    );
  }
}

export default withStyles(appStyle)(Index);
