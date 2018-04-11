import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import Layout from "./_Layout";
import BlockShow from "./Block/_Show";
import appStyle from "../../variables/styles/appStyle";
import yellow from "material-ui/colors/yellow";

class Block extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <Layout>
        <BlockShow {...rest} />
      </Layout>
    );
  }
}

export default withStyles(appStyle)(Block);
